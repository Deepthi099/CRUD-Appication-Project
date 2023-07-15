import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'http://localhost:8000';

export const getUsers = async () => {
    //id = id || '';
    try{
    return await axios.get(`${usersUrl}/all`);
    } catch(error){
        console.log('Error while calling getUsers API',error);
    }
}

export const getUser = async (id) => {
    try{
    return await axios.get(`${usersUrl}/${id}`);
    }catch(error){
        console.log('error while calling get user api',error);
    }
}


export const addUser = async (user) => {
    try{
    return await axios.post(`${usersUrl}/add`, user);
    }catch(error){
        console.log('error while calling add user api',error);
    }
}

export const editUser = async (user,id) => {
    try{
    return await axios.put(`${usersUrl}/${id}`,user);
    }catch(error){
        console.log('error while calling edit user api',error);
    }
}

export const deleteUser = async (id) => {
    try{
    return await axios.delete(`${usersUrl}/${id}`);
    }catch(error){
        console.log('error while calling delete user api',error);
    }
}

