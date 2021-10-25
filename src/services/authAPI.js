import Axios from "axios"
import jwtDecode from 'jwt-decode'

/**
 * File that contains the methods used in the Authentication process via our API
 */

// Get APIs basic link
const API_URL = process.env.REACT_APP_API_URL;

/**
 * Method that verifies the user's given infos in order to log them
 * @param {object} credentials 
 * @returns true
 */
async function authenticate(credentials){
    // the async method to verify the user's credentials
    const response = await Axios
        .post(`${API_URL}login_check`, credentials);
    // Get the token form the authetication
    const token = response.data.token;
    // Set the token into the local storage
    window.localStorage.setItem("authToken", token);
    // Adds the header with the value of the token
    Axios.defaults.headers["Authorization"] = "Bearer " + token;
    return true;
}

/**
 * Method that logs out a user
 */
function logout(){
    window.localStorage.removeItem("authToken")
    delete Axios.defaults.headers['Authorization']
}

/**
 * Method that provides the user's token to the Axios header if it is still valid
 */
function setup(){
    // Check if we have a token
    const token = window.localStorage.getItem('authToken') 

    // If so
    if(token)
    {
        // Decode its infos
        const jwtData = jwtDecode(token)

        // Verify if its expiration is not surpassed
        if((jwtData.exp * 1000) > new Date().getTime())
        {
            // If not, give the authorization header
            Axios.defaults.headers["Authorization"]="Bearer " + token 
        }
    }
}

/**
 * Method that simply returns a boolean if the user's token is still valid
 * @returns boolean
 */
function isAuthenticated() {
    const token = window.localStorage.getItem("authToken")
    if(token){
        const jwtData = jwtDecode(token)
        if((jwtData.exp * 1000) > new Date().getTime()){
            return true
        }
        return false // token expiré
    }
    return false // pas de token

}

// Final Var for the exports our methods
const AuthApiMethods = {
    authenticate: authenticate,
    logout: logout,
    setup: setup,
    isAuthenticated : isAuthenticated
}

// EXPORT
export default AuthApiMethods