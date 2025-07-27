import React from 'react';
import { motion } from 'framer-motion';

const CustomCursor = ({ mousePosition, cursorVariant, isLoaded, isScrolling }) => {
  const variants = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      width: '12px',
      height: '12px',
      backgroundColor: '#f5f5f5',
      mixBlendMode: 'difference',
    },
    hover: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      width: '60px',
      height: '60px',
      backgroundColor: 'rgba(245, 245, 245, 0.2)',
      mixBlendMode: 'normal',
    }
  };

  return (
    <motion.div 
      className="fixed rounded-full pointer-events-none z-50 top-0 left-0"
      variants={variants}
      animate={cursorVariant}
      initial={{ scale: 0, opacity: 0 }}
      style={{
          scale: isLoaded ? (isScrolling ? 0.5 : 1) : 0,
          rotate: isScrolling ? 45 : 0,
          opacity: isLoaded ? 1 : 0,
      }}
      transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
          mass: 0.5,
          ...((isScrolling || !isLoaded) && { duration: 0.2 })
      }}
    />
  );
};

export default CustomCursor;