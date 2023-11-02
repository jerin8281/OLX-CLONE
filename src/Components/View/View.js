import React, { useContext, useEffect, useState } from 'react';
import {FirebaseContext} from '../../Store/Context'

import './View.css';
import { ProductContext } from '../../Store/ProductContext';
function View() {
  const{postDetails}=useContext(ProductContext)
  const {firebase}=useContext(FirebaseContext)
  const [user,setUser]=useState()
  useEffect(()=>{
    
    const {userId}=postDetails
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(doc => {
        
        
       
       setUser(doc.data())
       

        
      });
    })
    
    
    
  
  },[])
  return (
    
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; 250000 </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {user &&<div className="contactDetails">
          <p>Seller details</p>
          <p>{user.username}</p>
          <p>{user.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
