import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../../data';

const Education = React.forwardRef(({ handleMouseEnter, handleMouseLeave }, ref) => {
  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut", delay } })
  };

  return (
    <section ref={ref} id="education" className="py-32 px-8 bg-neutral-900/30 border-y border-neutral-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.div
            className="text-sm text-neutral-500 font-mono tracking-wider uppercase mb-8"
            initial="hidden" whileInView="visible" variants={textReveal} viewport={{ once: true, margin: "-100px" }}
          >
            Education
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-light"
            initial="hidden" whileInView="visible" variants={textReveal} custom={0.1} viewport={{ once: true, margin: "-100px" }}
          >
            Academic
            <span className="text-neutral-400"> background</span>
          </motion.h2>
        </div>

        <div className="space-y-1">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.institution}
              className={`group border-t border-neutral-800 py-10 hover:bg-neutral-900/20 transition-colors duration-700 rounded-lg px-4 ${edu.url ? 'cursor-pointer' : 'cursor-default'}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => edu.url && window.open(edu.url, '_blank', 'noopener,noreferrer')}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && edu.url) {
                  window.open(edu.url, '_blank', 'noopener,noreferrer');
                }
              }}
              role="link"
              tabIndex={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: index * 0.1, ease: "easeInOut" }
                }
              }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center text-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-normal text-neutral-200 group-hover:text-neutral-100 transition-colors duration-500">{edu.institution}</h3>
                  <p className="text-neutral-400 font-mono text-base md:text-lg mt-2">{edu.period}</p>
                </div>
                <div>
                  <p className="text-lg text-neutral-300 leading-relaxed font-light mb-2">{edu.program}</p>
                  <div className="text-lg text-neutral-300">{edu.detail}</div>
                  <div className="text-base text-neutral-500 mt-2">{edu.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Education;
