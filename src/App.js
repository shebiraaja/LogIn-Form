import React, { useState } from 'react';
import './App.css';
import SigninPage from './SigninPage';

function App() {

  const [username, setUsername] = useState("")
  const [signIn, setSignIn] = useState()

  const handleReset = () => {
    document.querySelectorAll('input').event.target.value = ""
  };

  return (

    <div>

      <input type="text" onChange={event => setUsername(event.target.value)} />
      <input type="password" onChange={event => setSignIn(event.target.value)} />

      {username === "hola123" && signIn === "shebi" ? <SigninPage /> : "no tienes acceso" }

      {console.log(username)}
      {console.log(signIn)}

      <button onClick={() => setUsername("")}>sign in</button>
      <button onClick={() => setSignIn("")}>sign out</button>


      {/*signIn === true ? <SigninPage /> : ""*/}
    </div>

  );
}

export default App;
