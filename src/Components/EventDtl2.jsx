import React from 'react';
import "../Css/EventDtl2.css";
import image from "../assets/18.jpg";
import { useNavigate } from 'react-router-dom';

const EventDtl2 = () => {
  const navigate = useNavigate();

  const registerEvent = () => {
    navigate("/register");
  };

  return (
    <div>
      <div className='bigSection'>
        <div className='contSection'>
          <div className='divider'></div>
          <div className='downSection'>
            <div className='leftImage' style={{ backgroundImage: `url(${image})` }}></div>
            <div className='rightText'>
              <h2>WHO IT’S FOR</h2>
              <ul>
                <li>Women with inspiring personal stories</li>
                <li>Those seeking to empower others</li>
                <li>Individuals ready to turn passion into profit</li>
              </ul>
              <button onClick={registerEvent}>Register Now</button>
              <p className='trust-badge'>Join 500+ Women</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDtl2;
