import React, { useState } from 'react';
import './App.css';
import SigninPage from './SigninPage';

function App() {

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [signIn, setSignIn] = useState()
  const [signOut, setSignOut] = useState()

  const handleReset = () => {
    document.querySelectorAll('input').event.target.value = ""
  };

  return (

    <div>

      <input type="text" onChange={event => setUsername(event.target.value)} />
      <input type="password" onChange={event => setPassword(event.target.value)} />

      {username === "shebi" && password === "1234" ? <SigninPage /> : <p>no tienes acceso</p> }

      {console.log(username)}
      {console.log(password)}

      <button onClick={() => setSignIn("")}>sign in</button>
      <button onClick={() => setSignOut("")}>sign out</button>


      {/*signIn === true ? <SigninPage /> : ""*/}
    </div>

  );
}

export default App;
