import { useState } from 'react'
import Login from './components/Login'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className='app'>
            <Login />
        </div>
    )
}

export default App
