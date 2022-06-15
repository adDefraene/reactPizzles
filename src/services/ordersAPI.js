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
async function createOrder(order){
    const response = await Axios.post(`${API_URL}orders`, {...order, user:`api/users/${order.customer}`})
    return response.data
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

/**
 * Method GET that retrives all of the User's Orders that are done
 * @param {integer} userId 
 * @returns array
 */
async function findUserOrdersWaiting(userId, dateOfTheDay){
    const response = await Axios.get(`${API_URL}users/${userId}/orders?order[date]=asc&date=${dateOfTheDay}`);
    return response.data["hydra:member"];
}

/**
 * Method GET that retrieves all of the Orders of the day
 * @param {date} dateOfTheDay 
 * @returns array
 */
async function findOrdersOfTheDay(dateOfTheDay){
    const response = await Axios.get(`${API_URL}orders?date=${dateOfTheDay}`);
    return response.data["hydra:member"];
}


/**
 * Method GET that retrieves all of the Orders of the day that wait to be done
 * @param {date} dateOfTheDay 
 * @returns array
 */
async function findOrdersWaintingOfTheDay(dateOfTheDay){
    const response = await Axios.get(`${API_URL}orders?date=${dateOfTheDay}&order[date]=asc&state=ORDERED`);
    return response.data["hydra:member"];
}

// Final Var for the exports our methods
const ordersApiMethods = {
    create: createOrder,
    findDone: findUserOrdersDone,
    findOrdered: findUserOrdersWaiting,
    findOne: findOrder,
    findDaily: findOrdersOfTheDay,
    findWaitDaily: findOrdersWaintingOfTheDay
}

// EXPORT
export default ordersApiMethods