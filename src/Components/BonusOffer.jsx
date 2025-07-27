import React from 'react';
import '../Css/BonusOffer.css';
import { useNavigate } from "react-router-dom"

const BonusOffer = () => {
  const navigate = useNavigate()

  const registerBonus = () => {

    navigate("/register")

  }

  return (
    <section className="bonus-section">
      <div className="bonus-container">
        <article className="bonus-content">
          <h1 className="bonus-title">EXCLUSIVE BONUS OFFER</h1>
          <h4 className="bonus-subtitle">3-Day Post-Webinar WhatsApp Community</h4>
          <p className="bonus-description">
            Join our private 3-day WhatsApp group after the webinar to continue the journey. Share insights, connect with others, and apply what you’ve learned in a supportive community.
          </p>
          <ul className="bonus-list">
            <li>Real stories to inspire you.</li>
            <li>Real encouragement from peers.</li>
            <li>Real steps to move forward.</li>
          </ul>
          <p className="bonus-closing">
            You're not alone. Join 500+ women rising together.
          </p>
          <button className="bonus-cta" onClick={registerBonus}>Secure Your Spot</button>
        </article>
      </div>
    </section>
  );
};

export default BonusOffer;