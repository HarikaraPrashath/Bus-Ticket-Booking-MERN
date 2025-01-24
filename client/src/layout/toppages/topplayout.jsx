import React from 'react';
import { motion } from 'framer-motion';
import Rootlayout from '../rootlayout';

const Topplayout = ({ bgImage, title, className }) => {
  const variants = {
    hidden: { opacity: 0, y: -800 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={`w-full bg-cover h-[30vh] bg-no-repeat bg-center relative ${className}`}
      style={{ backgroundImage: `url(${bgImage})` }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 0.85, ease: 'easeInOut' }}
    >
      {/* Gradient Overlay */}
      <Rootlayout className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-700/80 via-blue-800/60 to-blue-900/80 flex items-center justify-center flex-col gap-3">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: -800 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -800 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="text-5xl text-white font-bold capitalize drop-shadow-md"
        >
          {title}
        </motion.h1>
      </Rootlayout>
    </motion.div>
  );
};

export default Topplayout;
