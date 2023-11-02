import React, { useContext, useEffect, useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';

import Heart from '../../assets/Heart';
import './Post.css';
import {AuthContext,FirebaseContext} from '../../Store/Context'
import { ProductContext } from '../../Store/ProductContext';
function Posts() {
  const navigate=useNavigate()
  
  const {firebase}=useContext(FirebaseContext)
  const {setPostDetails}=useContext(ProductContext)
  const [products,setProducts]=useState([])
  useEffect(()=>{
    firebase.firestore().collection('products').get().then((snapshot)=>{
      const allPost=snapshot.docs.map((product)=>{
        return{
          ...product.data(),
          id:product.id}
        
        
      })
      
      
      console.log(allPost);
      setProducts(allPost)
      
    })

  },[])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div  className="cards">
          {products.map((product)=>{
            return(
          <div 
            className="card"
            onClick={()=>{
              setPostDetails(product)
              navigate('/view')
            }}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
            <img  src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
          </div>)})}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
        {products.map((product)=>{
            return(
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
             <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
          </div>)})}
        </div>
      </div>
    </div>
  );
}

export default Posts;
