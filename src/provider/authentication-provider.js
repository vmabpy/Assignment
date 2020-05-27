import React, { useState } from 'react'
import { View } from 'react-native'
const AuthenticationContext = React.createContext()

const AuthenticationProvider = (props) => {
    const [authentication, setAuthentication] = useState()


    return (
        <AuthenticationContext.Provider value={{ authentication, setAuthentication }}>
            {props.children}
        </AuthenticationContext.Provider>
    )
}

export { AuthenticationProvider, AuthenticationContext };