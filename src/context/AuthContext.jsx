import React, { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const initialState = { id: uuidv4(), userName: 'arthurdev', currentlyAuth: true }
const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState(authActive())

    function authActive() {
        return JSON.parse(localStorage.getItem('auth')) ?
            JSON.parse(localStorage.getItem('auth'))
            : localStorage.setItem('auth', JSON.stringify(initialState))
    }

    useEffect(function() {
        authActive()
    }, [])

    return (
        <AuthContext.Provider
            value={{ auth, setAuth }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext