import Axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL;

async function findAll(){
    const response = await Axios.get(`${API_URL}reviews/`);
    return response.data['hydra:member'];
}

function createReview(orderId, review){
    return Axios.post(`${API_URL}reviews/`, {...review, order:`api/orders/${orderId}`})
}


const reviewsApiMethods = {
    findAll: findAll,
    create: createReview
}

export default reviewsApiMethods