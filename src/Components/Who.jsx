import React from 'react';
import "../Css/Who.css";
import { motion } from 'framer-motion';

const Who = () => {
  const items = [
    "A woman who's been through something but never told her story",
    "A woman who knows she's called to help others heal",
    "A woman who wants to grow in confidence, purpose, and maybe even income",
    "A woman tired of hiding, shrinking, or waiting"
  ];

  return (
    <motion.div
      className='bigWho'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className='headWho'>
        <h2>THIS IS FOR YOU IF YOU ARE</h2>
      </div>

      <div className='contWho'>
        <div className='contSmall'>
          <div className='leftWho'></div>

          <div className='rightWho'>
            {items.map((text, index) => (
              <motion.div
                className='cbx'
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <p>{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Who;






