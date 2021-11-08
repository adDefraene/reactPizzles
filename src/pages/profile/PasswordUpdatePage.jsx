import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import authAPI from '../../services/authAPI';
import usersAPI from '../../services/usersAPI';
import jwtDecode from 'jwt-decode';

const PasswordUpdatePage = ({match}) => {

    // Var that contains the decoded information contained in the JWT token stored
    const userInfosJWT = jwtDecode(window.localStorage.getItem('authToken'))

    // Var that contains the current user's infos
    const [currentUser, setCurrentUser] = useState({
        oldPassword: "",
        newPassword: ""
    })
    
    const [errors, setErrors] = useState({
        isOk: "",
        content: ""
    })

    // Method that handles the changes in the inputs of the form that updates the user's informations
    const handleChange = (event) => {
        const {name, value} = event.currentTarget
        setCurrentUser({...currentUser, [name]: value})
        console.log(currentUser)
    }

    // Method that handles the submit of the form  that updates the user's informations
    const handleSubmit = async event => {
        event.preventDefault()
        try{
            // Gives the Bearer token
            authAPI.setup()
            await usersAPI.put(userInfosJWT.id, currentUser)
            setErrors({"isOk": true, "content":"Votre mot de passe a été correctement modifié !"})
        }catch(response){
            console.error(response)
            setErrors({"isOk": false, "content":"L'ancien mot de passe ne correspond pas !"})
        }

    }
    
    const revealPassword = (event) => {
        let password = document.querySelector("#updatePasswordNew")
        if(password.type === "password"){
            event.currentTarget.innerHTML = 'Cacher<i class="fas fa-eye-slash"></i>'
            password.type = "text"
        }else{
            event.currentTarget.innerHTML = 'Vérifier<i class="fas fa-eye"></i>'
            password.type = "password"
        }
    }

    const checkPath = () => {
        let path = match.path
        if(path === "/profile/password-update"){
            document.querySelector(".pizzles-nav-selectedPage").classList.remove("pizzles-nav-selectedPage")
            document.querySelector("#pizzles-nav-profile").classList.add("pizzles-nav-selectedPage")
        }
    }

    useEffect(()=>{
        checkPath()
    }, [match])

    return ( 
<>
    <div className="container pizzles-first-container">
        <div className="row">
            <div className="col-12 col-lg-3">
                <Link to="/profile" className="pizzles-btn mb-3 pizzles-btn-back"><i className="fas fa-chevron-circle-left"></i>Retour au profil</Link>
            </div>
            <div className="col-12 col-lg-6 mb-5">
                <h2 className="pizzles-title text-center mb-4 mx-auto">Modifier mon mot de passe</h2>
            </div>
            <div className="col-12 pizzles-register-box my-3 p-3">
                <div className="row">
                    <div className="col-12 col-md-10 offset-md-1 my-3 py-4 px-5">
                        <form onSubmit={handleSubmit} className="row">
                            <div className="col-12">
                                <label htmlFor="updatePasswordOld" className="form-label">Mon ancien mot de passe</label>
                                <input type="password" className="form-control mb-4" id="updatePasswordOld" name="oldPassword" value={currentUser.oldPassword} onChange={handleChange} required />
                            </div>
                            <div className="col-12">
                                <label htmlFor="updatePasswordNew" className="form-label">Mon nouveau mot de passe</label>
                                <div className="pizzles-register-password">
                                    <button type="button" onClick={revealPassword} id="register-reveal-password" className="btn btn-secondary">Vérifier<i className="fas fa-eye"></i></button>
                                    <input type="password" className="form-control mb-4 ml-2" id="updatePasswordNew" value={currentUser.newPassword} onChange={handleChange} name="newPassword" required />
                                </div>
                            </div>
                            <button type="submit" className="pizzles-btn pizzles-btn-yellow mt-5 mb-2">Modifier mon mot de passe<i className="fas fa-user-edit"></i></button>
                            {errors.isOk !== "" ? (<p className={`text-center ${(errors.isOk ? "valid-feedback" : "invalid-feedback")}`} style={{display:"block"}}>{errors.content}</p>): ("")}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>

     );
}
 
export default PasswordUpdatePage;