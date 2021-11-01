import Axios from 'axios';

/**
 * File that contains the methods used in the Pizzas process of our API
 */

// Get APIs basic link
const API_URL = process.env.REACT_APP_API_URL;
const APP_URL = process.env.REACT_APP_URL;

/**
 * Method GET that retrieves all of the Pizzas
 * @returns array
 */
async function findAll(){
    const response = await Axios.get(`${API_URL}pizzas`);
    return response.data["hydra:member"];
}

/**
 * Method GET that retrives a specific Pizza from its slug
 * @param {string} slug 
 * @returns object
 */
async function find(slug){
    const response = await Axios.get(`${API_URL}pizzas/${slug}/`);
    return response.data;
}

/**
 * Method GET that retrives a specific Pizza from its "@Id"
 * @param {string} bigId 
 * @returns object
 */
async function findByBigId(bigId){
    const response = await Axios.get(`${APP_URL}${bigId}`);
    return response.data;
}

/**
 * Method GET that retrieves the ingredients of a specific Pizza form its slug
 * @param {string} slug 
 * @returns array
 */
async function findIngredients(slug){
    const response = await Axios.get(`${API_URL}pizzas/${slug}/ingredients`);
    return response.data;
}

// Final Var for the exports our methods
const pizzasApiMethods = {
    findAll: findAll,
    find: find,
    findId: findByBigId,
    ingredients : findIngredients
}

// EXPORT
export default pizzasApiMethods