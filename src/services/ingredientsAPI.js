import Axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL;

async function findAll(){
    const response = await Axios.get(`${API_URL}ingredients`);
    return response.data["hydra:member"];
}
async function find(id){
    const response = await Axios.get(`${API_URL}ingredients/${id}`);
    return response.data;
}

const ingredientsApiMethods = {
    findAll: findAll,
    find: find
}

export default ingredientsApiMethods