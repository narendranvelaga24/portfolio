import React, { useState, useEffect, useRef, useMemo } from 'react';

// Data
import { sectionsData } from './data/index.js';

// Components
import CustomCursor from './components/CustomCursor.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

// Sections
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import Experience from './components/sections/Experience.jsx';
import Works from './components/sections/Works.jsx';
import Contact from './components/sections/Contact.jsx';

const App = () => {
  // STATE MANAGEMENT
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  
  // REFS FOR SECTIONS
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const worksRef = useRef(null);
  const contactRef = useRef(null);

  // Memoize the sections array to prevent re-creation on every render
  const sections = useMemo(() => {
    const sectionRefs = {
      home: heroRef,
      about: aboutRef,
      experience: experienceRef,
      works: worksRef,
      contact: contactRef,
    };
    return sectionsData.map(s => ({...s, ref: sectionRefs[s.id]}));
  }, []);

  // EVENT HANDLERS
  const handleMouseEnter = () => setCursorVariant('hover');
  const handleMouseLeave = () => setCursorVariant('default');

  // EFFECTS
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit' }));
    };
    
    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });

    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolling(true);
      
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY + windowHeight / 3;
      
      sections.forEach((section) => {
        const element = section.ref.current;
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });

      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => setIsScrolling(false), 150);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timeInterval);
      clearTimeout(timer);
      clearTimeout(window.scrollTimeout);
    };
  }, [sections]);

  // SCROLL FUNCTION
  const smoothScrollTo = (ref, offset = 0) => {
    if (ref.current) {
        const targetPosition = ref.current.offsetTop + offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
  };

  const scrollToSection = (sectionId) => {
    const section = sections.find(s => s.id === sectionId);
    if (section) {
      // Use different offset for mobile vs desktop
      const isMobile = window.innerWidth < 768;
      const offset = sectionId === 'home' ? 0 : (isMobile ? -100 : -80);
      smoothScrollTo(section.ref, offset);
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen font-light overflow-x-hidden">
      <CustomCursor 
        mousePosition={mousePosition}
        cursorVariant={cursorVariant}
        isLoaded={isLoaded}
        isScrolling={isScrolling}
      />
      
      <Navbar 
        sections={sections}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        currentTime={currentTime}
        isLoaded={isLoaded}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollY={scrollY}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />

      <main>
        <Hero 
          ref={heroRef}
          scrollY={scrollY}
          mousePosition={mousePosition}
          isLoaded={isLoaded}
          scrollToSection={scrollToSection}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
        <About ref={aboutRef} />
        <Experience 
            ref={experienceRef} 
            handleMouseEnter={handleMouseEnter} 
            handleMouseLeave={handleMouseLeave}
        />
        <Works 
            ref={worksRef} 
            handleMouseEnter={handleMouseEnter} 
            handleMouseLeave={handleMouseLeave}
        />
        <Contact 
            ref={contactRef} 
            currentTime={currentTime}
            handleMouseEnter={handleMouseEnter} 
            handleMouseLeave={handleMouseLeave}
        />
      </main>

      <Footer />
    </div>
  );
};

export default App;
