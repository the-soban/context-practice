import React, { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState('')
    const [showProfile, setShowProfile] = useState(false)

    return (
        <div className="login">
            <input
                type="text"
                placeholder="Enter username"
                onChange={(event) => {
                    setUsername(event.target.value)
                }}
            />
            <input type="text" placeholder="Enter password" />
            <button
                onClick={() => {
                    setShowProfile(true)
                }}
            >
                Login
            </button>

            {showProfile && <h2>{username}</h2>}
        </div>
    )
}

export default Login
