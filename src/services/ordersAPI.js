import Axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL;

function createOrder(order){
    return Axios.post(`${API_URL}orders`, {...order, user:`api/users/${order.user}`})
}

async function findOrder(orderId){
    const response = await Axios.get(`${API_URL}orders/${orderId}`);
    return response.data;
}

async function findUserOrdersDone(userId){
    const response = await Axios.get(`${API_URL}users/${userId}/orders?order[date]=desc&state=DONE`);
    return response.data["hydra:member"];
}

const ordersApiMethods = {
    create: createOrder,
    findDone: findUserOrdersDone,
    findOne: findOrder
}

export default ordersApiMethods