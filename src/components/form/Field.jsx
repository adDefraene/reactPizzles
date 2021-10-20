import React from 'react'

const Field = ({name, label, value, onChange, placeholder = "", type= "text", error="", required= false}) => {
    return ( 
        <div className="form-group">
            <label className="form-label" htmlFor={name}>{label}</label>
            <input 
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                name={name}
                id={name}
                required={required}
                className={"form-control mb-4 " + (error && " is-invalid")}
            />
            {error && (
                <p className="invalid-feedback">{error}</p>
            )
            }
        </div>
     );
}
 
export default Field