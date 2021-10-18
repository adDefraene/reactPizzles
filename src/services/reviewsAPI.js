import Axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL;

function createReview(orderId, review){
    return Axios.post(`${API_URL}reviews/${orderId}`, {...review})
}

export default {
    create: createReview
}