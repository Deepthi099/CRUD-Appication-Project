import {useState , useEffect} from 'react';

import { FormControl, FormGroup, InputLabel,Input ,Typography,styled,Button} from "@mui/material";
// import {useState , useEffect} from 'react';

 import {editUser,getUser} from '../service/api';
 import { useNavigate ,useParams} from 'react-router-dom';



    
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

const EditUser =() =>{

    const [user, setUser]=useState(defaultvalue);
   // const {name,username,email,phone}=user;
    const navigate = useNavigate();
    const { id } = useParams();
   
    useEffect(() => {
        loadUserDetails();
    }, [])

    const loadUserDetails = async() => {
        const response = await getUser(id);
        setUser(response.data);
    }


    // const { id } = useParams();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }
    
    const editUserDetails = async() => {
        const response = await editUser(user,id);
        navigate('/all');
    }

    return (
        <Container>
            <Typography varient="h3">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name" value={user.name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username" value={user.username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="email" value={user.email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="phone" value={user.phone}/>
            </FormControl>
            <FormControl>
            <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;



