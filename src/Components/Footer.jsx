import React from 'react'
import "../Css/Footer.css"
import { FaFacebook } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div>

      <div className='footerBig'>
        <div className='containerFooter'>

          <a href="https://www.facebook.com/p/Rev-Joyce-Kariuki-100067634826893/">
            <FaFacebook className='fb' />
          </a>



          <p> © Copyright 2025 </p>


          <a href="https://www.instagram.com/ladyjoycekariuki/">

            <FaInstagram className='ig' />

          </a>

        </div>
      </div>
    </div>
  )
}

export default Footer