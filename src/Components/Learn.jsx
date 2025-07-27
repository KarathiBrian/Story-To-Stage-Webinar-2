import React from 'react';
import "../Css/Learn.css";

const Learn = () => {
  return (
    <div>
      <div className='bigLearn'>
        <div className='contLearn'>
          <h2>WHAT YOU'LL LEARN</h2>
          <div className='learnGrid'>
            <div className='gridItem'>
              <h4>There's Power in Your Past</h4>
              <p>Discover the hidden message in your lived experiences</p>
            </div>
            <div className='gridItem'>
              <h4>From Silence to Significance</h4>
              <p>Why your story matters—even if it's not dramatic</p>
            </div>
            <div className='gridItem'>
              <h4>Dig It Out & Speak It Loud</h4>
              <p>Simple steps to find, name, and own your message</p>
            </div>
            <div className='gridItem'>
              <h4>Refine to Shine</h4>
              <p>How to shape your story into something that influences, inspires, and multiplies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;