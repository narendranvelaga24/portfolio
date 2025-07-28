import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from '../icons';

const Hero = React.forwardRef(({ scrollY, mousePosition, isLoaded, scrollToSection, handleMouseEnter, handleMouseLeave }, ref) => {
  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }
  };
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: (delay = 0) => ({ opacity: 1, transition: { duration: 0.6, ease: "easeOut", delay } })
  };
  const scaleUp = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } }
  };

  return (
    <section ref={ref} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black transition-transform duration-1000 ease-out"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{ transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * 0.01}px)` }}
        />
      </div>
      
      <motion.div 
        className="text-center z-20 relative"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
      >
        <motion.h1 
          className="text-7xl sm:text-6xl md:text-8xl lg:text-9xl font-extralight mb-8 tracking-tight leading-none px-4"
          variants={textReveal}
        >
          <span className="block transition-all duration-700 hover:tracking-wide">
            Narendran
          </span>
          <span className="block text-neutral-400 transition-all duration-700 hover:tracking-wide">
            Velaga
          </span>
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-neutral-400 font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
          variants={textReveal}
        >
          Engineering student passionate about web development, problem-solving, and creative programming.
        </motion.p>
        
        <motion.div 
          className="flex justify-center items-center space-x-8 mt-12"
          variants={fadeIn}
        >
          <div className="text-sm text-neutral-500 font-mono">
            Available for opportunities
          </div>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <motion.button
            onClick={() => scrollToSection('works')}
            className="px-8 py-3 border border-neutral-700 rounded-full hover:bg-neutral-800/30 transition-all duration-500 group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            variants={scaleUp}
            whileHover={{ scale: 1.05, borderColor: 'rgb(115 115 115)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center space-x-2">
              <span>View My Work</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </span>
          </motion.button>
          
          <motion.button
            onClick={() => window.open('/resume.pdf', '_blank')}
            className="px-8 py-3 border border-neutral-600 rounded-full hover:bg-neutral-800/30 transition-all duration-500 group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            variants={scaleUp}
            whileHover={{ scale: 1.05, borderColor: 'rgb(115 115 115)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center space-x-2">
              <span>Download Resume</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </span>
          </motion.button>
        </div>
        
        <motion.div 
          className="flex flex-col items-center mt-6"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
          custom={1.2}
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-neutral-400 to-transparent animate-pulse" />
          <div className="text-xs text-neutral-500 font-mono mt-2 text-center tracking-wider">SCROLL</div>
        </motion.div>
      </motion.div>
    </section>
  );
});

export default Hero;