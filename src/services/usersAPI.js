import Axios from "axios";

/**
 * File that contains the methods used in the Users process via our API
 */

// Get APIs basic link
const API_URL = process.env.REACT_APP_API_URL;

/**
 * Method POST that creates a new User
 * @param {object} newUser 
 * @returns void
 */
async function registerUser(newUser){
    return await Axios.post(`${API_URL}users`, newUser);
}

/**
 * Method GET that retrives a User by its id number
 * @param {integer} userId 
 * @returns object
 */
async function getCurrentUser(userId){
    const response = await Axios.get(`${API_URL}users/${userId}`);
    return response.data;
}

/**
 * Method PATCH that updates some infos of an User by its id number
 * @param {integer} userId 
 * @param {object} newInformations 
 * @returns void
 */
async function updateUser(userId, newInformations){
    return await Axios.patch(`${API_URL}users/${userId}`, newInformations, {headers :{"Content-Type": "application/merge-patch+json"}})
}

/**
 * !!! UNUSED PUT METHOD !!! (used to update all infos of a user)
 * @param {interger} userId 
 * @param {object} newInformations 
 * @returns vois
 */
async function updateAllUser(userId, newInformations){
    return await Axios.put(`${API_URL}users/${userId}`, newInformations)
}

// Final Var for the exports our methods
const usersApiMethods = {
    get: getCurrentUser,
    create: registerUser,
    patch: updateUser,
    put: updateAllUser
}

// EXPORT
export default usersApiMethods