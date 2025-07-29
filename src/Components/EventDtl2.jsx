import React from 'react';
import "../Css/EventDtl2.css";
import image from "../assets/15d.png";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const EventDtl2 = () => {
  const navigate = useNavigate();

  const registerEvent = () => {
    navigate("/register");
  };

  return (
    <motion.div
      className='bigSection'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className='contSection'>
        <motion.div
          className='divider'
          initial={{ width: 0 }}
          whileInView={{ width: "70%" }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        />
        <motion.div
          className='downSection'
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className='leftImage'
            style={{ backgroundImage: `url(${image})` }}
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.div
            className='rightText'
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h2>WHO IT’S FOR</h2>
            <ul>
              <li>Women with inspiring personal stories</li>
              <li>Those seeking to empower others</li>
              <li>Individuals ready to turn passion into profit</li>
            </ul>
            <motion.button
              onClick={registerEvent}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Register Now
            </motion.button>
            <motion.p
              className='trust-badge'
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Join 500+ Women
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EventDtl2;
