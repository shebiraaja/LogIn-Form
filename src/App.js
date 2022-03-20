import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';
import SigninPage from './SigninPage';

function App() {
  const { register, handleSubmit, errors } = useForm()
  const [userInfo, setUserInfo] = useState();
  const onSubmit = (data) => {
    setUserInfo(data)
  }

  // const [username, setUsername] = useState()
  // const [password, setPassword] = useState()
  // const [signIn, setSignIn] = useState()
  // const [signOut, setSignOut] = useState(true)

  // function entrar(username, password) {
  //   if (username === "shebi_32" && password === "1234") {
  //     alert("has iniciado sesion")
  //   } else {
  //     console.log("credenciales incorrectas")
  //     alert("Credenciales incorrectas")

  //   }
  // }


  return (

    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
        <h1>Registration form</h1>
        <div className="field">
          <label>Username</label>
          <input type="text" name='username' placeholder='username' ref={register} />
        </div>

        <div className="field">
          <label>Email</label>
          <input type="email" name='email' placeholder='email' ref={register} />
        </div>

        <div className="field">
          <label>Password</label>
          <input type="password" name='password' placeholder='password' ref={register} />
        </div>
        <button>Submit</button>
      </form>

    </div>

    /* <div>

    //   <input type="text" className="input" onChange={event => setUsername(event.target.value)} value={username} />
    //   <input type="password" className="input" onChange={event => setPassword(event.target.value)} value={password} />

    //   {/*username === "shebi" && password === "1234" ? <SigninPage /> : <p>no tienes acceso</p>}


    //   <button onClick={/*() => setSignIn()() => entrar(username, password)}>sign in</button>
    //   <button onClick={
    //     /*() => setUsername(() => "") && () => setPassword(() => "")
    //   () => clear(username, password)}>sign out</button>
    //   {console.log(username)}
    //   {console.log(password)}


    //   {/*signIn === true ? <SigninPage /> : ""}
    //   {/*signIn === true ? <SigninPage /> : ""}
    //   </div>
  */



  );
}

export default App;
