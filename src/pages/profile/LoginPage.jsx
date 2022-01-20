import React from 'react';
import authAPI from '../../services/authAPI';
import AuthContext from '../../contexts/AuthContext';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { useState } from 'react';
import Field from '../../components/form/Field';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

/**
 * Page that is used to execute the login for the user
 * @param props 
 * @returns html
 */
const LoginPage = (props) => {

    // Var that retrives if the user is authenticated
    const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext)

    // Var of the credentials of the user
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })

    // Var of the form's errors
    const [error, setError] = useState("")

    // Keeps the credentials Var updated at each  changes in the form
    const handleChange = (event) => {
        const value = event.currentTarget.value
        const name = event.currentTarget.name 
        setCredentials({...credentials, [name]:value})
    }

    // When the form is submited, do the authentication of the user
    const handleSubmit = async (event) => {
        event.preventDefault()
        try{
            await authAPI.authenticate(credentials)
            setError("")
            // Set its global autentication to true
            setIsAuthenticated(true)
            // Display a toast
            toast.success("Vous vous êtes correctement connecté !")
            // Go to their profile
            props.history.replace("/profile")
        }catch(error){
            setError("Adresse mail ou mot de passe incorrect")
        }
    }

    // If the users is already authenticated
    if(isAuthenticated){
        // Go to their profile
        props.history.replace("/profile")
    }

    const checkPath = () => {
        let path = props.match.path
        if(path === "/login"){
            document.querySelector(".pizzles-nav-selectedPage").classList.remove("pizzles-nav-selectedPage")
            document.querySelector("#pizzles-nav-profile").classList.add("pizzles-nav-selectedPage")
        }
    }

    useEffect(()=>{
        checkPath()
    }, [props.match])

    return ( 
<>
    <div className="container pizzles-first-container">
        <div className="row">
            <div className="col-12">
                <h2 className="pizzles-title text-center mx-auto mb-4">Se connecter</h2>
            </div>
            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 pizzles-connection-box my-3 py-4 px-5">
                <form onSubmit={handleSubmit}>
                    <Field
                        label="Mon adresse mail"
                        type="email"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                        required={true}
                        error={error}
                    />
                    <Field
                        label="Mon mot de passe"
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required={true}
                        error=""
                    />
                    <button className="pizzles-btn pizzles-btn-yellow mt-5 mb-2">Se connecter <i className="fas fa-sign-in-alt"></i></button>
                </form>
            </div>
            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-3 mb-5 pizzles-alternateLogin">
                <p>Pas encore de compte ?</p>
                <Link to="/register" className="pizzles-btn pizzles-btn-white ml-auto">S'enregistrer<i className="fas fa-pen-alt"></i></Link>
            </div>
        </div>
    </div>
</>
     );
}
 
export default LoginPage;