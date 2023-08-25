**Step 1:** create a contexts folder inside the src folder
<br />

**Step 2:** create a JS file that uses the createContext hook and assign a variable in it with the value of createContext, like this:

```js
import React, { createContext } from 'react'

export const LoginContext = createContext({})
```

<br />

**Step 3:** import the created context in App.jsx and wrap the whole app indside the created context's provider. Also give the provider a value of all the states you want to use within some other components:

```js
import { LoginContext } from './Contexts/LoginContext'
const App = () => {

    const [showProfile, setShowProfile] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return(
        <div>
            <LoginContext.Provider value={{ username, setUsername, setPassword, setShowProfile }}>
                <h3>Some Heading</h3>
            </LoginContext>
        </div>
    )
}
```

<br />

**Step 4:** Finally, go to the component in which you wanna use the state from created context. Import the useContext hook, and then destructure all the states or functions you want from the created context. You dont have to use all the states in the functions, you can grab the ones you need. After that,you can use the state/function like you'd normally do:

```js
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
```
