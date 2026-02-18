import React from 'react';
import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiSqlite,
  SiAmazonwebservices,
  SiDocker,
  SiGit,
  SiPostman,
  SiJira,
} from 'react-icons/si';

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
              Building scalable products with
              <span className="text-neutral-400"> code, cloud, and creativity</span>
            </motion.h2>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-6">
              <motion.p 
                className="text-lg text-neutral-300 leading-relaxed font-light"
                initial="hidden" whileInView="visible" variants={textReveal} custom={0.2} viewport={{ once: true, margin: "-100px" }}
              >
                I&apos;m Narendran Velaga, a Full-Stack Developer and engineering student at Dayananda Sagar College of 
                Engineering. I design, build, test, and maintain end-to-end web applications using React, Node.js, 
                Express, and MongoDB.
              </motion.p>
              <motion.p 
                className="text-lg text-neutral-300 leading-relaxed font-light"
                initial="hidden" whileInView="visible" variants={textReveal} custom={0.3} viewport={{ once: true, margin: "-100px" }}
              >
                Alongside production internship experience, I&apos;m expanding my backend and infrastructure skills by 
                learning cloud platforms and DevOps practices, and I&apos;m open to opportunities where I can contribute 
                to impactful software products.
              </motion.p>
            </div>
            
            <motion.div 
              className="pt-8"
              initial="hidden" whileInView="visible" variants={fadeIn} custom={0.4} viewport={{ once: true, margin: "-100px" }}
            >
              <div>
                <div className="text-neutral-500 text-sm font-mono mb-4">Technologies</div>
                <div className="space-y-1 text-base md:text-lg">
                  <div className="group flex flex-col items-start text-left">
                    <div className="flex flex-wrap justify-start gap-1">
                      <div className="w-20 md:w-24 h-20 md:h-24 flex flex-col items-center justify-center gap-1">
                        <SiJavascript className="text-neutral-300 text-xl md:text-2xl mb-1" />
                        <span className="leading-6">JavaScript</span>
                      </div>
                      <div className="w-20 md:w-24 h-20 md:h-24 flex flex-col items-center justify-center gap-1">
                        <SiTypescript className="text-neutral-300 text-xl md:text-2xl mb-1" />
                        <span className="leading-6">TypeScript</span>
                      </div>
                      <div className="w-20 md:w-24 h-20 md:h-24 flex flex-col items-center justify-center gap-1">
                        <SiPython className="text-neutral-300 text-xl md:text-2xl mb-1" />
                        <span className="leading-6">Python</span>
                      </div>
                    </div>
                  </div>
                  <div className="group flex flex-col items-start text-left">
                    <div className="flex flex-wrap justify-start gap-1">
                      <div className="w-20 md:w-24 h-20 md:h-24 flex flex-col items-center justify-center gap-1">
                        <SiReact className="text-neutral-300 text-xl md:text-2xl mb-1" />
                        <span className="leading-6">React</span>
                      </div>
                      <div className="w-20 md:w-24 h-20 md:h-24 flex flex-col items-center justify-center gap-1">
                        <SiNodedotjs className="text-neutral-300 text-xl md:text-2xl mb-1" />
                        <span className="leading-6">Node.js</span>
                      </div>
                      <div className="w-20 md:w-24 h-20 md:h-24 flex flex-col items-center justify-center gap-1">
                        <SiExpress className="text-neutral-300 text-xl md:text-2xl mb-1" />
                        <span className="leading-6">Express</span>
                      </div>
                      <div className="w-20 md:w-24 h-20 md:h-24 flex flex-col items-center justify-center gap-1">
                        <SiTailwindcss className="text-neutral-300 text-xl md:text-2xl mb-1" />
                        <span className="leading-6">Tailwind</span>
                      </div>
                    </div>
                  </div>
                  <div className="group flex flex-col items-start text-left">
                    <div className="flex flex-wrap justify-start gap-1">
                      <div className="w-20 md:w-24 h-20 md:h-24 flex flex-col items-center justify-center gap-1">
                        <SiMongodb className="text-neutral-300 text-xl md:text-2xl mb-1" />
                        <span className="leading-6">MongoDB</span>
                      </div>
                      <div className="w-20 md:w-24 h-20 md:h-24 flex flex-col items-center justify-center gap-1">
                        <SiPostgresql className="text-neutral-300 text-xl md:text-2xl mb-1" />
                        <span className="leading-6">PostgreSQL</span>
                      </div>
                      <div className="w-20 md:w-24 h-20 md:h-24 flex flex-col items-center justify-center gap-1">
                        <SiSqlite className="text-neutral-300 text-xl md:text-2xl mb-1" />
                        <span className="leading-6">SQLite</span>
                      </div>
                    </div>
                  </div>
                  <div className="group flex flex-col items-start text-left">
                    <div className="flex flex-wrap justify-start gap-1">
                      <div className="w-20 md:w-24 h-20 md:h-24 flex flex-col items-center justify-center gap-1">
                        <SiAmazonwebservices className="text-neutral-300 text-xl md:text-2xl mb-1" />
                        <span className="leading-6">AWS</span>
                      </div>
                      <div className="w-20 md:w-24 h-20 md:h-24 flex flex-col items-center justify-center gap-1">
                        <SiDocker className="text-neutral-300 text-xl md:text-2xl mb-1" />
                        <span className="leading-6">Docker</span>
                      </div>
                      <div className="w-20 md:w-24 h-20 md:h-24 flex flex-col items-center justify-center gap-1">
                        <SiGit className="text-neutral-300 text-xl md:text-2xl mb-1" />
                        <span className="leading-6">Git</span>
                      </div>
                      <div className="w-20 md:w-24 h-20 md:h-24 flex flex-col items-center justify-center gap-1">
                        <SiPostman className="text-neutral-300 text-xl md:text-2xl mb-1" />
                        <span className="leading-6">Postman</span>
                      </div>
                      <div className="w-20 md:w-24 h-20 md:h-24 flex flex-col items-center justify-center gap-1">
                        <SiJira className="text-neutral-300 text-xl md:text-2xl mb-1" />
                        <span className="leading-6">Jira</span>
                      </div>
                    </div>
                  </div>
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
