import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../../data';
import { ArrowUpRight } from '../icons';

const Works = React.forwardRef(({ handleMouseEnter, handleMouseLeave }, ref) => {
  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut", delay } })
  };

  return (
    <section ref={ref} id="works" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.div 
            className="text-sm text-neutral-500 font-mono tracking-wider uppercase mb-8"
            initial="hidden" whileInView="visible" variants={textReveal} viewport={{ once: true, margin: "-100px" }}
          >
            Selected Works
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-light"
            initial="hidden" whileInView="visible" variants={textReveal} custom={0.1} viewport={{ once: true, margin: "-100px" }}
          >
            Projects that showcase
            <span className="text-neutral-400"> technical skills and creativity</span>
          </motion.h2>
        </div>

        <div className="space-y-1">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              className={`group project-item border-t border-neutral-800 py-10 hover:bg-neutral-900/20 transition-colors duration-700 rounded-lg px-4 ${project.url ? 'cursor-pointer' : 'cursor-default'}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => project.url && window.open(project.url, '_blank', 'noopener,noreferrer')}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && project.url) {
                  window.open(project.url, '_blank', 'noopener,noreferrer');
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
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-8">
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-3">
                    <h3 className="text-2xl md:text-3xl font-light tracking-tight group-hover:text-neutral-200 transition-colors duration-500">
                      {project.title}
                    </h3>
                    <div className="text-neutral-500 text-sm font-mono">
                      {project.year}
                    </div>
                  </div>
                  <div className="text-neutral-400 mb-6 font-light text-lg">
                    {project.subtitle}
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <p className="text-neutral-300 leading-relaxed font-light mb-4">
                        {project.description}
                      </p>
                      {project.challenges && (
                        <p className="text-neutral-400 leading-relaxed font-light text-sm">
                          <span className="text-neutral-500 font-mono text-xs">Challenge:</span> {project.challenges}
                        </p>
                      )}
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="text-neutral-500 text-xs font-mono mb-2">Technology Stack</div>
                        <div className="text-sm leading-relaxed">{project.tech}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <motion.div 
                  className="opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.5 }}
                  variants={{
                      initial: { x: 0, y: 0 },
                      hover: { x: 5, y: -5 }
                  }}
                  whileHover="hover"
                >
                  <ArrowUpRight className="w-6 h-6 text-neutral-400" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Works;
