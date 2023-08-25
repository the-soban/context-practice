import React, { useState, useContext } from 'react'
import { LoginContext } from '../Contexts/LoginContext'

const Login = () => {
    const { setUsername, setPassword, setShowProfile } =
        useContext(LoginContext)

    return (
        <div className="login">
            <input
                type="text"
                placeholder="Enter username"
                onChange={(event) => {
                    setUsername(event.target.value)
                }}
            />
            <input
                type="text"
                placeholder="Enter password"
                onChange={(event) => {
                    setPassword(event.target.value)
                }}
            />
            <button
                onClick={() => {
                    setShowProfile(true)
                }}
            >
                Login
            </button>
        </div>
    )
}

export default Login
