import Axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

async function findAll(){
    const response = await Axios.get(`${API_URL}pizzas/`);
    return response.data["hydra:member"];
}

async function find(slug){
    const response = await Axios.get(`${API_URL}pizzas/${slug}`);
    return response.data["hydra:member"];
}

const pizzasApiMethods = {
    findAll: findAll,
    find: find
}

export default pizzasApiMethods