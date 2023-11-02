import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from './Store/Context';
import { useContext } from 'react';
import { FirebaseContext } from './Store/Context';


/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login'
import Create from './Components/Create/Create';
import View from './Components/View/View'
import Product from './Store/ProductContext';


function App() {
  const {setUser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
    
  })
  return (
    <div>
      <Product>
      <BrowserRouter>
        <Routes>
          
         
          <Route   path='/' Component={Home}></Route>
          
          <Route Component={Signup} path='/signup'></Route>
          <Route Component={Login} path='/login'></Route>
          <Route Component={Create} path='/create'></Route>
          <Route Component={View} path='/view'></Route>
         
          


        
      
      </Routes>
      
      </BrowserRouter>
      </Product>
     
      
    </div>
  );
}

export default App;
