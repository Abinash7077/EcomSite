import React from 'react';
import './Footer.css'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer_container row text-center'>
        <div className="col_1">
            <img src="img/amb.png" className='footerImg' width="45px" alt="" />
            <h1>AMB SHOP</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quae necessitatibus pariatur? Minima rerum iusto eos odio expedita sequi maxime tempora suscipit id in aliquam accusamus, nam necessitatibus reiciendis laudantium corrupti culpa sit alias ipsum et aperiam ad? Officia numquam, repudiandae dolorem vitae officiis omnis.
          </p>
          <button className='btn btn-primary'>Contact Me</button>
        </div>
       
      
    </div>
  );
}

export default Footer;
