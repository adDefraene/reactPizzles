import React from 'react'

// The form just needed to know if the users is authenticated or not
export default React.createContext({
    isAuthenticated: false,
    setIsAuthenticated: (value) => {}
})