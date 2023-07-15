import  { useState, useEffect } from 'react';
 import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material';
 import { getUsers,deleteUser} from '../service/api';
 import { Link } from 'react-router-dom';
 const StyledTable = styled(Table)`
 width: 90%;
 margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TBody = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AllUsers =() =>{

            const [users, setUsers] = useState([]);
            
            useEffect(() => {
                getAllUsers();
            }, []);

            const getAllUsers = async () => {
                let response = await getUsers();
                setUsers(response.data);
            }
            const deleteUserDetails = async (id) => {
                        await deleteUser(id);
                        getAllUsers();
                    } 

      return(
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>

            {users.map((user) => (
                    <TBody key={user._id}>
                        <TableCell>{user._id}</TableCell> 
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button varient="contained" style={{marginRight : 10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                            <Button  variant='contained' color="secondary" onClick={() => deleteUserDetails(user._id)}>Delete</Button>
                        </TableCell>
                    </TBody>
                ))}

            </TableBody>
            </StyledTable>

        // <p>Hello</p>
    )
}

export default AllUsers;


