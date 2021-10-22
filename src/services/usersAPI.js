import Axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

async function registerUser(newUser){
    return await Axios.post(`${API_URL}users`, newUser);
}

async function getCurrentUser(userId){
    const response = await Axios.get(`${API_URL}users/${userId}`);
    return response.data;
}

async function updateUser(userId, newInformations){
    return await Axios.patch(`${API_URL}users/${userId}`, newInformations, {headers :{"Content-Type": "application/merge-patch+json"}})
}

async function updateAllUser(userId, newInformations){
    return await Axios.put(`${API_URL}users/${userId}`, newInformations)
}


const usersApiMethods = {
    get: getCurrentUser,
    create: registerUser,
    patch: updateUser,
    put: updateAllUser
}

export default usersApiMethods