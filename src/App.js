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


  function entrar(username, password) {
    // alert(`hello ${username} ${password}`)
    if (username === "shebi_32" && password === "1234") {
      // console.log("has iniciado sesion")
      console.log(<SigninPage/>)
    } else {
      console.log("credenciales incorrectas")
    }
  }

  // function salir() {
  //   console.log(document.getElementsByClassName("input").value = "")



  //   // if (username === "" && password === "") {
  //   //   console.log("has cerrando sesion")
  //   // }
  // }

  function clear(username, password) {
    if(username === String & password === String) {
      username(() => "") && password(() => "")
    } 
  }

  return (

    <div>

      <input type="text" className="input" onChange={event => setUsername(event.target.value) } value={username} />
      <input type="password" className="input" onChange={event => setPassword(event.target.value)} value={password} />

      {/*username === "shebi" && password === "1234" ? <SigninPage /> : <p>no tienes acceso</p>*/}


      <button onClick={/*() => setSignIn()*/() => entrar(username, password)}>sign in</button>
      <button onClick={
        /*() => setUsername(() => "") && () => setPassword(() => "")*/
      () => clear(username, password)}>sign out</button>
      {console.log(username)}
      {console.log(password)}


      {/*signIn === true ? <SigninPage /> : ""*/}
      {/*signIn === true ? <SigninPage /> : ""*/}
      </div>

  );
}

export default App;
