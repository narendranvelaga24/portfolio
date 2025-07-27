import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <footer className="py-12 px-8 border-t border-neutral-800">
      <motion.div 
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 space-y-4 md:space-y-0"
        initial="hidden" 
        animate="visible" 
        variants={fadeIn}
      >
        <div>© {new Date().getFullYear()} <span className="transition-all duration-700 hover:tracking-wide">Narendran Velaga</span>. All rights reserved.</div>
        <div className="font-mono">Crafted with code and creativity</div>
      </motion.div>
    </footer>
  );
};

export default Footer;
