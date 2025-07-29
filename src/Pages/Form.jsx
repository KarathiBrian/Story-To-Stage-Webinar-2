import React, { useState } from 'react';
import "../Css/Form.css";
import Footer from '../Components/Footer';

const Form = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className='formGoogle'>
      {loading && (
        <div className='loadingSpinner'>
          <div className="ripple-loader">
            <div></div>
            <div></div>
          </div>
          <p>Getting things ready for you... just a moment 😊</p>
        </div>
      )}

      <iframe
        src='https://docs.google.com/forms/d/e/1FAIpQLSdYvbLSVlpEurtSFptgzO4xfTmWHUkqAUGJbEhoyh_1zXvpXw/viewform?usp=sharing&ouid=100944596123287161908'
        width="100%"
        height="1800"
        style={{ border: "none" }}
        onLoad={() => setLoading(false)}
        title='Google form'
      ></iframe>

      <Footer />
    </div>
  );
};

export default Form;