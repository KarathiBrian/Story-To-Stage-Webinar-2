import React from 'react';
import "../Css/Learn.css";
import { motion } from 'framer-motion';

const Learn = () => {
  const gridItems = [
    {
      title: "The S.T.A.R Model to shape your story",
      desc: "A simple framework to craft your story with clarity, connection, and confidence."
    },
    {
      title: "How to monetize your message for impact",
      desc: "Learn how to share your story in ways that inspire and generate purpose-driven income."
    },
    {
      title: "3 powerful, guided exercises to help you unlock your story",
      desc: "Reflective prompts to help you uncover, shape, and speak your message with ease."
    },
    {
      title: "Clarity on your next steps",
      desc: "Gain clarity on who your story is meant to reach and how to deliver it with impact, confidence, and purpose."
    }
  ];

  return (
    <motion.div
      className='bigLearn'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className='contLearn'>
        <h2>WHAT YOU'LL LEARN</h2>
        <div className='learnGrid'>
          {gridItems.map((item, index) => (
            <motion.div
              className='gridItem'
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Learn;











