import Axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL;

function createOrder(order){
    return Axios.post(`${API_URL}orders`, {...order, user:`api/users/${order.user}`})
}

export default {
    create: createOrder,
}