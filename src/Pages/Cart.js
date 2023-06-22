import React from "react";
import '../Cart.css'
import { useSelector } from "react-redux";

import CartCard from "../Component/CartCard";


const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  console.log(productCartItem)

  const RemoveFromCart=()=>{
 
  }
  return (
    <div className="container">
      <div className="row cartRow text-center">
        
        {productCartItem.length === 0 ? (
          <h1 className="cart_h1">
            Cart is Empty <br />
            Please add Something in basket
          </h1>
        ) : (
          productCartItem.map((item) =>
           <CartCard name={item.name} src={item.src}
          id={item.id}
          key={item.id} />)
        )}
      </div>
    </div>
  );
};

export default Cart;
