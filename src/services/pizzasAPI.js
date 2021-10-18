import Axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL;

function findAll(){
    return Axios.get(`${API_URL}pizzas`)
                .then(response => response.data["hydramember"])
}
function find(slug){
    return Axios.get(`${API_URL}pizzas/${slug}`)
                .then(response => response.data["hydramember"])
}

export default {
    findAll: findAll,
    find: find
}