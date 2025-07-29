import React from 'react';
import "../Css/EventDtl.css";
import { motion } from 'framer-motion';

const EventDtl = () => {
  return (
    <motion.section 
      className='bigEvent'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className='contEvent'
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className='upAbout'
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.div 
            className='leftUp'
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className='whatHead'>WHAT IT'S ABOUT</h3>
            <motion.div 
              className='leftUpContent'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <ul>
                <li>Do you have a story, a life experience but don't know where to start sharing it?</li>
                <li>Have you gone through something and now wonder, “Can God use this?”</li>
                <li>Are you ready to turn your past into purpose, and even income?</li>
              </ul>
              <p className='highlightText'>
                Then this 90-minute transformational webinar is for YOU. It’s time to take what you've lived, and turn it into something powerful.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            className='rightUp'
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Background image via CSS */}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default EventDtl;



