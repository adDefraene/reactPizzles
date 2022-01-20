import Axios from 'axios'

/**
 * File that contains the methods used in the Reviews process of our API
 */

// Get APIs basic link
const API_URL = process.env.REACT_APP_API_URL;

/**
 * Method GET that retrieves the Reviews : via a pagination in the original Symfony, there are the last 6 Reviews provided
 * @returns array
 */
async function findAll(){
    const response = await Axios.get(`${API_URL}reviews/`);
    return response.data['hydra:member'];
}

/**
 * Method POST that adds a Review to an specific Order by its id number
 * @param {integer} orderId 
 * @param {object} review 
 * @returns void
 */
function createReview(orderId, review){
    //console.log(review)
    return Axios.post(`${API_URL}reviews`, {...review, reviewedOrder:`api/orders/${orderId}`})
}

// Final Var for the exports our methods
const reviewsApiMethods = {
    findAll: findAll,
    create: createReview
}

// EXPORT
export default reviewsApiMethods