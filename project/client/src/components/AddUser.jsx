


import {useState} from 'react';

import { FormControl, FormGroup, InputLabel,Input ,Typography,styled,Button} from "@mui/material";

 import {addUser} from '../service/api';
 import { useNavigate } from 'react-router-dom';


const Container=styled(FormGroup)`
width:50%;
margin:auto;
& >div{
    margin-top:20px;
}
`
const defaultvalue={
    name: '',
    username: '',
    email: '',
    phone: ''
}

const AddUser =() =>{

    const [user, setUser]=useState(defaultvalue);

    const navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    
    const addUserDetails=async () =>{

        await addUser(user);
        navigate('/all');
    }

    return (
        <Container>
            <Typography varient="h3">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username" />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="phone"/>
            </FormControl>
            <FormControl>
                <Button varient="contained" onClick={()=> addUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;


