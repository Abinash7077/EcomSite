import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./Component/Header.css";
import { NavLink } from "react-router-dom";

const Header = ({ history }) => {
  const [category, setCategory] = useState();
  const[auth, setAuth]=useState(false)
  const productCartItem = useSelector((state) => state.product.cartItem);
  const data = [
    { to: "/", value: "Home",category:"Home" },
    {
      to: "/About",
      value: "About",
      category:"About"
    },
    
  
  ];

  return (
    <>
      <div className="header">
        <NavLink to="/">
          <img src="img/amb.png" alt="" className="w-25px logo" />
        </NavLink>

        <div className="nav">
          <ul className="ul">
            {data.map((item) => (
              <li className="li">
                {" "}
                
                <NavLink className="navlink" to={item.to}>
                  {item.value}
                </NavLink>
              </li>
              
            ))}
            {(!auth)?<>
              <li className="li" >
            <NavLink className="navlink" to="/Logout">
                  Logout
                </NavLink>
            </li>
             <li className="li" >
             <NavLink className="navlink" to="/Cart">
                   Cart{productCartItem.length}
                 </NavLink>
             </li>
            </>
            :<li className="li" >
            <NavLink className="navlink" to="/Login">
                  Login
                </NavLink>
            </li>
            }
           
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
