import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, FileText } from '../icons';

const Contact = React.forwardRef(({ currentTime, handleMouseEnter, handleMouseLeave }, ref) => {
  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut", delay } })
  };

  return (
    <section ref={ref} id="contact" className="py-32 px-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <motion.div 
              className="text-sm text-neutral-500 font-mono tracking-wider uppercase mb-8"
              initial="hidden" whileInView="visible" variants={textReveal} viewport={{ once: true, margin: "-100px" }}
            >
              Contact
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-light leading-tight mb-8"
              initial="hidden" whileInView="visible" variants={textReveal} custom={0.1} viewport={{ once: true, margin: "-100px" }}
            >
              Let's build something
              <span className="text-neutral-400"> amazing together</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-300 leading-relaxed font-light"
              initial="hidden" whileInView="visible" variants={textReveal} custom={0.2} viewport={{ once: true, margin: "-100px" }}
            >
              I'm always excited to discuss new opportunities, collaborate on projects, 
              and contribute to innovative solutions.
            </motion.p>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-1">
              <motion.a 
                href="mailto:narendran.v004@gmail.com"
                className="group flex items-center justify-between py-6 border-b border-neutral-800 hover:border-neutral-600 transition-all duration-500 hover:bg-neutral-900/20 px-4 rounded-lg"
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                initial="hidden" whileInView="visible" variants={textReveal} custom={0.3} viewport={{ once: true, margin: "-100px" }}
                whileHover={{ x: 5, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-neutral-800/50 rounded-full group-hover:bg-neutral-700/50 transition-all duration-300">
                    <Mail className="w-4 h-4 text-neutral-400" />
                  </div>
                  <span className="text-lg">narendran.v004@gmail.com</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-neutral-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </motion.a>
              
              <motion.a 
                href="https://linkedin.com/in/narendran-velaga"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-6 border-b border-neutral-800 hover:border-neutral-600 transition-all duration-500 hover:bg-neutral-900/20 px-4 rounded-lg"
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                initial="hidden" whileInView="visible" variants={textReveal} custom={0.4} viewport={{ once: true, margin: "-100px" }}
                whileHover={{ x: 5, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-neutral-800/50 rounded-full group-hover:bg-neutral-700/50 transition-all duration-300">
                    <Linkedin className="w-4 h-4 text-neutral-400" />
                  </div>
                  <span className="text-lg">LinkedIn Profile</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-neutral-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </motion.a>
              
              <motion.a 
                href="https://github.com/narendranvelaga24"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-6 border-b border-neutral-800 hover:border-neutral-600 transition-all duration-500 hover:bg-neutral-900/20 px-4 rounded-lg"
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                initial="hidden" whileInView="visible" variants={textReveal} custom={0.5} viewport={{ once: true, margin: "-100px" }}
                whileHover={{ x: 5, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-neutral-800/50 rounded-full group-hover:bg-neutral-700/50 transition-all duration-300">
                    <Github className="w-4 h-4 text-neutral-400" />
                  </div>
                  <span className="text-lg">GitHub Repository</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-neutral-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </motion.a>
              <motion.a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-6 border-b border-neutral-800 hover:border-neutral-600 transition-all duration-500 hover:bg-neutral-900/20 px-4 rounded-lg"
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                initial="hidden" whileInView="visible" variants={textReveal} custom={0.6} viewport={{ once: true, margin: "-100px" }}
                whileHover={{ x: 5, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-neutral-800/50 rounded-full group-hover:bg-neutral-700/50 transition-all duration-300">
                    <FileText className="w-4 h-4 text-neutral-400" />
                  </div>
                  <span className="text-lg">My Resume</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-neutral-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </motion.a>
            </div>
            
            <motion.div 
              className="pt-8 border-t border-neutral-800/50"
              initial="hidden" whileInView="visible" variants={textReveal} custom={0.7} viewport={{ once: true, margin: "-100px" }}
            >
              <div className="text-neutral-500 text-sm font-mono mb-2">Current Location</div>
              <div className="text-2xl font-mono tabular-nums">{currentTime}</div>
              <div className="text-neutral-500 text-sm">Bengaluru, Karnataka (IST)</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
