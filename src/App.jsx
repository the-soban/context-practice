import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import { LoginContext } from './Contexts/LoginContext'
import './App.css'

function App() {
    const [showProfile, setShowProfile] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="app">
            <LoginContext.Provider
                value={{
                    username,
                    setUsername,
                    password,
                    setPassword,
                    setShowProfile,
                }}
            >
                <h3>My Context Practice</h3>
                {showProfile ? <Profile /> : <Login />}
            </LoginContext.Provider>
        </div>
    )
}

export default App
