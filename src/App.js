import React, { useState } from 'react';
import './App.css';
import SigninPage from './SigninPage';

function App() {

  const [username, setUsername] = useState("")
  const [signIn, setSignIn] = useState(false)

  return (

    <div>

      <input type="text" onChange={event => setUsername(event.target.value)} />
      <input type="password" onChange={event => setSignIn(event.target.value)} />

      {username === "hola123" && signIn === "shebi" ? <SigninPage /> : "no tienes acceso"}

      <button onClick={() => setUsername(<SigninPage />)}>sign in</button>
      <button onClick={() => setSignIn(false)}>sign out</button>


      {/*signIn === true ? <SigninPage /> : ""*/}
    </div>

  );
}

export default App;
