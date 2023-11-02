import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../../Store/Context';
import {useNavigate} from 'react-router-dom'



import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const {firebase}=useContext(FirebaseContext)
  const  navigate=useNavigate()
  
  const [mail,setMail]=useState('')
  const [password,setPassword]=useState('')
  function sumbitHandle(e){
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(mail, password).then(()=>{
      navigate('/')

    }).catch((error)=>{
      alert(error.message)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={sumbitHandle}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={mail}
            onChange={(e)=>{
              setMail(e.target.value)
            }}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=>{navigate('/Signup')}}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
