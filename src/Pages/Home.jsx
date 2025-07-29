// import React from 'react';
// import "../Css/Home.css";
// import { useNavigate } from 'react-router-dom';
// import mobileImg from "../assets/cover 1c.png"

// import desktopImg from "../assets/Homedesk.jpg";

// const Home = () => {
//   const navigate = useNavigate();

//   const registerNavigate = () => {
//     navigate("/register");
//   };

//   const detailsNavigate = () => {
//     navigate("/about");
//   };

//   return (
//     <div>
//       <div className='outerBig'>
//         <div className='containerHold'>
//           <div className='holder'>
//             <div className='up'>
//               <img src={mobileImg} alt="" className='mobile-image' />
//               <img src={desktopImg} alt="" className='desktop-image' />
//             </div>
//             <div className='down'>
//               <button onClick={registerNavigate}>Register</button>
//               <button onClick={detailsNavigate}>Event details</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// };

// export default Home;



import React from 'react';
import "../Css/Home.css";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import mobileImg from "../assets/cover 1c.png";
import desktopImg from "../assets/Homedesk.jpg";

const Home = () => {
  const navigate = useNavigate();

  const registerNavigate = () => {
    navigate("/register");
  };

  const detailsNavigate = () => {
    navigate("/about");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className='outerBig'>
        <motion.div
          className='containerHold'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className='holder'
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            {/* 📷 Image Section */}
            <motion.div
              className='up'
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 0.8 }}
            >
              <img src={mobileImg} alt="" className='mobile-image' />
              <img src={desktopImg} alt="" className='desktop-image' />
            </motion.div>

            {/* 🔘 Buttons */}
            <motion.div
              className='down'
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15, delayChildren: 0.5 }
                }
              }}
            >
              <motion.button
                onClick={registerNavigate}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Register
              </motion.button>

              <motion.button
                onClick={detailsNavigate}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Event Details
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;





