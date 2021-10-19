import React from 'react';
import {Link} from 'react-router-dom'

const LoginPage = () => {
    return ( 
<>
    <div className="container pizzles-first-container">
        <div className="row">
            <div className="col-12">
                <h2 className="pizzles-title text-center mx-auto mb-4">Se connecter</h2>
            </div>
            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 pizzles-connection-box my-3 py-4 px-5">
                <form action="#">
                    <label for="connectionEmail" className="form-label">Mon adresse mail</label>
                    <input type="email" className="form-control mb-4" id="connectionEmail" aria-describedby="emailHelp" required />
                    <label for="connectionPassword" className="form-label">Mon mot de passe</label>
                    <input type="password" className="form-control mb-4" id="connectionPassword" required />
                    <button type="submit" className="pizzles-btn pizzles-btn-yellow mt-5 mb-2">Se connecter <i className="fas fa-sign-in-alt"></i></button>
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