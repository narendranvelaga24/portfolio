import React from 'react';
import { motion } from 'framer-motion';

const About = React.forwardRef((props, ref) => {
  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut", delay } })
  };
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: (delay = 0) => ({ opacity: 1, transition: { duration: 0.6, ease: "easeOut", delay } })
  };

  return (
    <section ref={ref} id="about" className="py-32 px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-8">
            <motion.div 
              className="text-sm text-neutral-500 font-mono tracking-wider uppercase"
              initial="hidden" whileInView="visible" variants={textReveal} viewport={{ once: true, margin: "-100px" }}
            >
              About
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-light leading-tight"
              initial="hidden" whileInView="visible" variants={textReveal} custom={0.1} viewport={{ once: true, margin: "-100px" }}
            >
              Building the future through
              <span className="text-neutral-400"> code and creativity</span>
            </motion.h2>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-6">
              <motion.p 
                className="text-lg text-neutral-300 leading-relaxed font-light"
                initial="hidden" whileInView="visible" variants={textReveal} custom={0.2} viewport={{ once: true, margin: "-100px" }}
              >
                I'm Narendran Velaga, an engineering student at Dayananda Sagar College of Engineering with a strong 
                foundation in C/C++, JavaScript, and web development. I enjoy building functional and interactive applications.
              </motion.p>
              <motion.p 
                className="text-lg text-neutral-300 leading-relaxed font-light"
                initial="hidden" whileInView="visible" variants={textReveal} custom={0.3} viewport={{ once: true, margin: "-100px" }}
              >
                Currently working as a Web Development Intern at StackZero, I'm constantly learning and looking for 
                opportunities to contribute to real-world projects and grow into a well-rounded software engineer.
              </motion.p>
            </div>
            
            <motion.div 
              className="grid grid-cols-2 gap-8 pt-8"
              initial="hidden" whileInView="visible" variants={fadeIn} custom={0.4} viewport={{ once: true, margin: "-100px" }}
            >
              <div>
                <div className="text-neutral-500 text-sm font-mono mb-4">Expertise</div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-3 group"><div className="w-1 h-1 bg-neutral-600 rounded-full group-hover:bg-neutral-400 transition-all duration-300" /><span>Full-Stack Development</span></div>
                  <div className="flex items-center space-x-3 group"><div className="w-1 h-1 bg-neutral-600 rounded-full group-hover:bg-neutral-400 transition-all duration-300" /><span>Frontend Technologies</span></div>
                  <div className="flex items-center space-x-3 group"><div className="w-1 h-1 bg-neutral-600 rounded-full group-hover:bg-neutral-400 transition-all duration-300" /><span>Database Management</span></div>
                  <div className="flex items-center space-x-3 group"><div className="w-1 h-1 bg-neutral-600 rounded-full group-hover:bg-neutral-400 transition-all duration-300" /><span>Problem Solving</span></div>
                </div>
              </div>
              <div>
                <div className="text-neutral-500 text-sm font-mono mb-4">Technologies</div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-3 group"><div className="w-1 h-1 bg-neutral-600 rounded-full group-hover:bg-neutral-400 transition-all duration-300" /><span>JavaScript, React</span></div>
                  <div className="flex items-center space-x-3 group"><div className="w-1 h-1 bg-neutral-600 rounded-full group-hover:bg-neutral-400 transition-all duration-300" /><span>Node.js, Express</span></div>
                  <div className="flex items-center space-x-3 group"><div className="w-1 h-1 bg-neutral-600 rounded-full group-hover:bg-neutral-400 transition-all duration-300" /><span>SQL, MongoDB</span></div>
                  <div className="flex items-center space-x-3 group"><div className="w-1 h-1 bg-neutral-600 rounded-full group-hover:bg-neutral-400 transition-all duration-300" /><span>Git, VS Code</span></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
