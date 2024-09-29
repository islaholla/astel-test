import React from 'react';
import { motion } from 'framer-motion';
import banner from '../../assets/diverse-people-working-office-min.jpg';

const Banner = () => {
  const textAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="relative w-full h-[350px] bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <motion.h1
        className="relative text-white text-4xl font-bold text-center top-1/2 transform -translate-y-1/2"
        initial="hidden"
        animate="visible"
        variants={textAnimation}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        About Us
      </motion.h1>
      
      
    </div>
  );
};

export default Banner;
