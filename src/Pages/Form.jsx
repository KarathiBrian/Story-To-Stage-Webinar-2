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
        src="https://docs.google.com/forms/d/e/1FAIpQLScVc7cwoGxd7LWuDpX6Zq33h8DFXObKjnKFnvbdDMLgxP0W7Q/viewform?usp=sharing&ouid=100944596123287161908"
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
