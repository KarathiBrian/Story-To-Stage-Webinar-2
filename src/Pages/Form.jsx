import React, { useState } from 'react';
import "../Css/Form.css";
import Footer from '../Components/Footer';

const Form = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className='formGoogle'>
      {loading && (
        <div className='loadingSpinner'>
          <div className="dot-loader">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <p>Just a sec! Getting your form ready...😊</p>
        </div>
      )}






      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdYvbLSVlpEurtSFptgzO4xfTmWHUkqAUGJbEhoyh_1zXvpXw/viewform?embedded=true"
        width="100%"
        height="1800"
        style={{ border: "none" }}
        onLoad={() => setLoading(false)}
        title='Google form'
      ></iframe>

      <Footer />
    </div>
  );
}

export default Form;
