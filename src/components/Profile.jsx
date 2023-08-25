import React, { useState, useContext } from 'react'
import { LoginContext } from '../Contexts/LoginContext'

const Profile = () => {
    const { username, password } = useContext(LoginContext)

    return (
        <div>
            <h1>Your Profile</h1>
            <h2>Username: {username}</h2>
            <h2>Password: {password}</h2>
        </div>
    )
}

export default Profile
