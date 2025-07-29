// import React from 'react';
// import '../Css/BonusOffer.css';
// import { useNavigate } from "react-router-dom"

// const BonusOffer = () => {
//   const navigate = useNavigate()

//   const registerBonus = () => {

//     navigate("/register")

//   }

//   return (
//     <section className="bonus-section">
//       <div className="bonus-container">
//         <article className="bonus-content">
//           <h1 className="bonus-title">EXCLUSIVE BONUS OFFER</h1>
//           <h4 className="bonus-subtitle">3-Day Post-Webinar WhatsApp Community</h4>
//           <p className="bonus-description">
//             Join our private 3-day WhatsApp group after the webinar to continue the journey. Share insights, connect with others, and apply what you’ve learned in a supportive community.
//           </p>
//           <ul className="bonus-list">
//             <li>Real stories to inspire you.</li>
//             <li>Real encouragement from peers.</li>
//             <li>Real steps to move forward.</li>
//           </ul>
//           <p className="bonus-closing">
//             You're not alone. Join 500+ women rising together.
//           </p>
//           <button className="bonus-cta" onClick={registerBonus}>Secure Your Spot</button>
//         </article>
//       </div>
//     </section>
//   );
// };

// export default BonusOffer;


import React from 'react';
import '../Css/BonusOffer.css';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const BonusOffer = () => {
  const navigate = useNavigate();

  const registerBonus = () => {
    navigate("/register");
  };

  return (
    <motion.section
      className="bonus-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.div
        className="bonus-container"
        variants={fadeInUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.article className="bonus-content">
          <motion.h1
            className="bonus-title"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            EXCLUSIVE BONUS OFFER
          </motion.h1>

          <motion.h4
            className="bonus-subtitle"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            3-Day Post-Webinar WhatsApp Community
          </motion.h4>

          <motion.p
            className="bonus-description"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            Join our private 3-day WhatsApp group after the webinar to continue the journey. Share insights, connect with others, and apply what you’ve learned in a supportive community.
          </motion.p>

          <motion.ul
            className="bonus-list"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <li>Real stories to inspire you.</li>
            <li>Real encouragement from peers.</li>
            <li>Real steps to move forward.</li>
          </motion.ul>

          <motion.p
            className="bonus-closing"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            You're not alone. Join 500+ women rising together.
          </motion.p>

          <motion.button
            className="bonus-cta"
            onClick={registerBonus}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            Secure Your Spot
          </motion.button>
        </motion.article>
      </motion.div>
    </motion.section>
  );
};

export default BonusOffer;
