import React from 'react'

/**
 * Displays a Bootstrap form field for forms
 * @param params
 * @returns html
 */
const Field = ({name, label, value, onChange, placeholder = "", type= "text", error="", required= false}) => {
    return ( 
        <div className="form-group">
            {/* Input's label */}
            <label className="form-label" htmlFor={name}>{label}</label>
            {/* Input itself */}
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
            {/* ICO displays the input's error */}
            {error && (
                <p className="invalid-feedback">{error}</p>
            )
            }
        </div>
     );
}
 
export default Field