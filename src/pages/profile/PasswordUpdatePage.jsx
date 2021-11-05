import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'

const PasswordUpdatePage = ({match}) => {

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
                        <form action="#" className="row">
                            <div className="col-12">
                                <label for="updatePasswordOld" className="form-label">Mon ancien mot de passe</label>
                                <input type="password" className="form-control mb-4" id="updatePasswordOld" name="updatePasswordOld" required />
                            </div>
                            <div className="col-12">
                                <label for="updatePasswordNew" className="form-label">Mon nouveau mot de passe</label>
                                <div className="pizzles-register-password">
                                    <button type="button" id="register-reveal-password" className="btn btn-secondary">Vérifier<i className="fas fa-eye"></i></button>
                                    <input type="password" className="form-control mb-4 ml-2" id="updatePasswordNew" name="updatePasswordNew" required />
                                </div>
                            </div>
                            <button type="submit" className="pizzles-btn pizzles-btn-yellow mt-5 mb-2">Modifier mon mot de passe<i className="fas fa-user-edit"></i></button>
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