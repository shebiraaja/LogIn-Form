import React, { useState } from 'react';
import './App.css';
import SigninPage from './SigninPage';

function App() {

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [signIn, setSignIn] = useState()
  const [signOut, setSignOut] = useState(true)

  // const handleReset = () => {
  //   document.querySelectorAll('input').event.target.value = ""
  // };

  // const check = (username, password) => {
  //   if(username === "shebi" && password === "shebi"){
  //     <SigninPage/> 
  //   }else {
  //     <p>no</p>
  //   }

  // }


  function hello(username, password) {
    // alert(`hello ${username} ${password}`)
    if (username === "shebi" && password === "shebi") {
      console.log("has iniciado sesion")
    } else {
      console.log("credenciales incorrectas")
    }
  }


  return (

    <div>

      <input type="text" onChange={event => setUsername(event.target.value)} />
      <input type="password" onChange={event => setPassword(event.target.value)} />

      {/*username === "shebi" && password === "1234" ? <SigninPage /> : <p>no tienes acceso</p>*/}


      <button onClick={() => hello(username, password)}>sign in</button>
      <button onClick={() => setSignOut(false)}>sign out</button>
      {console.log(username)}
      {console.log(password)}


      {/*signIn === true ? <SigninPage /> : ""*/}
    </div>

  );
}

export default App;
