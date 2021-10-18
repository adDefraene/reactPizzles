import Axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL;

function findAll(){
    return Axios.get(`${API_URL}ingredients`)
                .then(response => response.data["hydramember"])
}
function find(id){
    return Axios.get(`${API_URL}ingredients/${id}`)
                .then(response => response.data["hydramember"])
}

export default {
    findAll: findAll,
    find: find
}