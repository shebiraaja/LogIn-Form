import React, { useState } from 'react';
import './App.css';
import SigninPage from './SigninPage';

function App() {

  const [username, setUsername] = useState("shebi")
  const [signIn, setSignIn] = useState(false)

  return (

    <div>
    
    <input type="text" onChange={event => setUsername(event.target.value)} />

    

    {signIn === true ? <SigninPage /> : ""}
    
    <button onClick={() => setSignIn(true)}>sign in</button>
    <button onClick={() => setSignIn(false)}>sign out</button>
    </div>

  );
}

export default App;
