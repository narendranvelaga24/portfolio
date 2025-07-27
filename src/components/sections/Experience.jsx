import React from 'react';
import { motion } from 'framer-motion';
import { experiencesData } from '../../data';

const Experience = React.forwardRef((props, ref) => {
  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut", delay } })
  };

  return (
    <section ref={ref} id="experience" className="py-32 px-8 bg-neutral-900/30 border-y border-neutral-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.div 
            className="text-sm text-neutral-500 font-mono tracking-wider uppercase mb-8"
            initial="hidden" whileInView="visible" variants={textReveal} viewport={{ once: true, margin: "-100px" }}
          >
            Experience
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-light"
            initial="hidden" whileInView="visible" variants={textReveal} custom={0.1} viewport={{ once: true, margin: "-100px" }}
          >
            My professional
            <span className="text-neutral-400"> journey so far</span>
          </motion.h2>
        </div>
        <div className="space-y-12">
          {experiencesData.map((exp, index) => (
            <motion.div 
              key={index} 
              className="grid md:grid-cols-3 gap-8"
              initial="hidden" whileInView="visible" variants={textReveal} custom={index * 0.1} viewport={{ once: true, margin: "-100px" }}
            >
              <div className="md:col-span-1">
                <h3 className="text-xl font-normal text-neutral-200">{exp.company}</h3>
                <p className="text-neutral-400">{exp.role}</p>
                <p className="text-neutral-500 font-mono text-sm mt-1">{exp.period}</p>
              </div>
              <div className="md:col-span-2">
                <ul className="space-y-4">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-neutral-500 mr-4 mt-1">&#8227;</span>
                      <span className="text-neutral-300 leading-relaxed font-light">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Experience;
