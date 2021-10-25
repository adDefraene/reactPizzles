import Axios from 'axios'

/**
 * File that contains the methods used in the Ingredients process of our API
 */

// Get APIs basic link
const API_URL = process.env.REACT_APP_API_URL;

/**
 * Method GET that retrives all of the ingredients available
 * @returns array
 */
async function findAll(){
    const response = await Axios.get(`${API_URL}ingredients`);
    return response.data["hydra:member"];
}

/**
 * Method GET that retrieves a specific ingredient by its id number
 * @param {integer} id 
 * @returns object
 */
async function find(id){
    const response = await Axios.get(`${API_URL}ingredients/${id}`);
    return response.data;
}

// Final Var for the exports our methods
const ingredientsApiMethods = {
    findAll: findAll,
    find: find
}

// EXPORT
export default ingredientsApiMethods