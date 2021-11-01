import React, { Component } from 'react';

const Button = ({text, icon, colour, bootstrapClasses, id=""}) => {

    return (

        <button type="submit" id="registerSubmit" className="pizzles-btn pizzles-btn-yellow mt-5 mb-2">Envoyer mon message<i className="fas fa-paper-plane"></i></button>

    )

}

export default Button;
