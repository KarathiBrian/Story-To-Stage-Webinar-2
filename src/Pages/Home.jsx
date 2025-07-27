import React from 'react';
import "../Css/Home.css";
import { useNavigate } from 'react-router-dom';
// import mobileImg from "../assets/nw3.jpg"
// import mobileImg from "../assets/cover1 1080X1080.png"
// import mobileImg from "../assets/cover 1b.png"
import mobileImg from "../assets/cover 1c.png"

import desktopImg from "../assets/Homedesk.jpg";

const Home = () => {
  const navigate = useNavigate();

  const registerNavigate = () => {
    navigate("/register");
  };

  const detailsNavigate = () => {
    navigate("/about");
  };

  return (
    <div>
      <div className='outerBig'>
        <div className='containerHold'>
          <div className='holder'>
            <div className='up'>
              <img src={mobileImg} alt="" className='mobile-image' />
              <img src={desktopImg} alt="" className='desktop-image' />
            </div>
            <div className='down'>
              <button onClick={registerNavigate}>Register</button>
              <button onClick={detailsNavigate}>Event details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
