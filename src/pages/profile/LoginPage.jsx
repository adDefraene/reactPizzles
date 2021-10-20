import React from 'react';
import authAPI from '../../services/authAPI';
import AuthContext from '../../contexts/AuthContext';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { useState } from 'react';
import Field from '../../components/form/Field';

const LoginPage = (props) => {

    const {setIsAuthenticated} = useContext(AuthContext)

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })

    const [error, setError] = useState("")

    const handleChange = (event) => {
        const value = event.currentTarget.value
        const name = event.currentTarget.name 
        setCredentials({...credentials, [name]:value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try{
            await authAPI.authenticate(credentials)
            setError("")
            setIsAuthenticated(true)
            props.history.replace("/profile")
        }catch(error){
            setError("Adresse mail ou mot de passe incorrect")
        }
    }

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