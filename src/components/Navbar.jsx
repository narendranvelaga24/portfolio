import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from './icons';

const Navbar = ({ sections, activeSection, scrollToSection, currentTime, isLoaded, isMenuOpen, setIsMenuOpen, scrollY, handleMouseEnter, handleMouseLeave }) => {



  return (
    <motion.nav
      className={`fixed top-0 w-full z-40 backdrop-blur-xl ${scrollY > 50 ? 'bg-neutral-950/80 border-b border-neutral-800/50' : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: isLoaded ? 0 : -100 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          <motion.button
            onClick={() => scrollToSection('home')}
            className="text-sm font-normal"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            animate={{ letterSpacing: '0.025em', color: '#E5E7EB' }} // 0.025em is "tracking-wide"
            whileHover={{ letterSpacing: '0.1em', color: '#A3A3A3' }} // text-neutral-400
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            Narendran Velaga
          </motion.button>

          <div className="hidden md:flex items-center space-x-8 text-sm">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`relative px-4 py-2 transition-colors duration-500 ease-out ${activeSection === section.id
                    ? 'text-neutral-100'
                    : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.05 }}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.div
                    className="absolute inset-0 bg-neutral-800/30 rounded-full -z-10"
                    layoutId="active-nav-item-bg"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                {activeSection === section.id && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-neutral-100 rounded-full"
                    layoutId="active-nav-item-dot"
                  />
                )}
              </motion.button>
            ))}
          </div>

          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-neutral-800/30 rounded-full transition-colors duration-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover={{ rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={isMenuOpen ? 'x' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          <div className="hidden md:block text-sm font-mono text-neutral-400 tabular-nums">
            {currentTime}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            className="md:hidden overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-8 py-6 bg-neutral-900/90 backdrop-blur-xl border-t border-neutral-800/50">
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setTimeout(() => {
                      const sectionElement = document.getElementById(section.id);
                      if (sectionElement) {
                        const targetPosition = sectionElement.offsetTop - 100;
                        window.scrollTo({
                          top: targetPosition,
                          behavior: 'smooth'
                        });
                      }
                    }, 50);
                  }}
                  className={`block w-full text-left py-3 transition-colors duration-300 ${activeSection === section.id ? 'text-neutral-100' : 'text-neutral-400'
                    }`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {section.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
