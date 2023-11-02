import React, { useState,useContext, } from 'react';
import { FirebaseContext } from '../../Store/Context';
import { useNavigate } from "react-router-dom";





import Logo from '../../olx-logo.png';
import './Signup.css';


export default function Signup() {
  

  const navigate=useNavigate()
  
  const [user,setUser]=useState('')
  const [mail,setMail]=useState('')
  const [number,setNumber]=useState('')
  const [password,setPassword]=useState('')

  const {firebase}=useContext(FirebaseContext)
  
  function sumbitHandle(e){
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(mail, password).then((result)=>{
      result.user.updateProfile({displayName:user}).then(()=>{
        firebase.firestore().collection("users").add({
          id:result.user.uid,
          username:user,
          phone:number
          
        }).then(()=>{navigate('/login')
          
        })
      })
    })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={sumbitHandle}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
            value={user}
            onChange={(e)=>{setUser(e.target.value)}}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            
            value={mail}
            onChange={(e)=>{setMail(e.target.value)}}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
            value={number}
            onChange={(e)=>{setNumber(e.target.value)}}
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
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={()=>{navigate('/login')}}>Login</a>
      </div>
    </div>
  );
}
