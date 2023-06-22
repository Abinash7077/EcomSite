import React from 'react';


import './Card.css'
import { useDispatch } from 'react-redux';

import { addCartItem } from '../redux/productSlide';

const Card = ({name,src,id}) => {
  const dispatch=useDispatch()
  const handleAddCartProduct=async (e)=>{
    e.preventDefault()
console.log(data)
    dispatch(addCartItem({
      _id:id,
      name:name,
      src:src,
      
    }))
    
    const response=await fetch("http://localhost:4040/shopData",{
      method:"POST",
      headers:{
        'Content-Type':'application/json',

      },
      body:JSON.stringify({
        name,src
      })
    })
  
var data=response.json()


  }
    
  return (
    <div class="col-lg-4 my-3 col-md-6">
    <div className="card  card_box " id={id}  >
  <img src={src} className="card-img-top" alt="rose"/>
  <div className="card_body card_text">
    <h5 className="card-title my-2">{name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='text-center'><button className="btn btn-primary" type='submit' onClick={handleAddCartProduct}>Add To Cart</button></div>
    
  </div>
</div>
    </div>
  );
}

export default Card;
