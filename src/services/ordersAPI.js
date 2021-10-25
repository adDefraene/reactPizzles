import Axios from 'axios'

/**
 * File that contains the methods used in the Order process of our API
 */

// Get APIs basic link
const API_URL = process.env.REACT_APP_API_URL;

/**
 * Method POST that adds an Order
 * @param {Object} order 
 * @returns void
 */
function createOrder(order){
    return Axios.post(`${API_URL}orders`, {...order, user:`api/users/${order.user}`})
}

/**
 * Method GET that retreives an Order form its Id number
 * @param {integer} orderId 
 * @returns object
 */
async function findOrder(orderId){
    const response = await Axios.get(`${API_URL}orders/${orderId}`);
    return response.data;
}

/**
 * Method GET that retrives all of the User's Orders that are done
 * @param {integer} userId 
 * @returns array
 */
async function findUserOrdersDone(userId){
    const response = await Axios.get(`${API_URL}users/${userId}/orders?order[date]=desc&state=DONE`);
    return response.data["hydra:member"];
}

// Final Var for the exports our methods
const ordersApiMethods = {
    create: createOrder,
    findDone: findUserOrdersDone,
    findOne: findOrder
}

// EXPORT
export default ordersApiMethods