import React, { useState } from 'react';
import './CartCard.css'
import { deleteCartItem } from '../redux/productSlide';
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";

import { useDispatch } from 'react-redux';

const CartCard = ({id,name,src}) => {
  const[itemNo,setItemNo]=useState(1)
const dispatch=useDispatch()
  return (
   <div className="cart_card mx-auto ">
    <div className="img">
    <img src={src} className='cartImg' alt="" />
    </div>
  
<div className='text-center text1'> <h1 className='h1'>{name}</h1>
<p>{id}</p>
<p className='p'>No Of Items: {itemNo}</p>
<BsPlusLg className='cartIcon' onClick={()=>itemNo>=1?setItemNo(itemNo+1):itemNo}/>

<AiFillDelete className='deleteIcon' onClick={()=>dispatch(deleteCartItem(id))}/>
<AiOutlineMinus className='cartIcon' onClick={()=>itemNo>=1?setItemNo(itemNo-1):itemNo}/>
<div className="button"><button className='btn btn-danger my-2'>Buy Now</button></div>
</div>
   
   </div>
  );
}

export default CartCard;
