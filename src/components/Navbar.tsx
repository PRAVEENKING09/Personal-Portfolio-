import { Link, Events } from 'react-scroll';
import { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', to: 'hero', offset: 0 },
  { name: 'About', to: 'about', offset: -50 },
  { name: 'Skills', to: 'skills', offset: -50 },
  { name: 'Projects', to: 'projects', offset: -50 },
  { name: 'Experience', to: 'experience', offset: -50 },
  { name: 'Certificates', to: 'certifications', offset: -50 },
  { name: 'Contact', to: 'contact', offset: 0 },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [activeLink, setActiveLink] = useState<string>('Home');
  const [scrollPercent, setScrollPercent] = useState(0);
  const isProgrammatic = useRef(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setScrolled(scrollY > 50);

          // Calculate global scroll progress percentage
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
          setScrollPercent(pct);

          // Update active link only during manual scrolling
          if (!isProgrammatic.current) {
            const isAtBottom = window.innerHeight + scrollY >= document.documentElement.scrollHeight - 120;
            if (isAtBottom) {
              setActiveLink('Contact');
            } else {
              // Custom scroll spy logic
              let currentSection = 'Home';
              for (const link of navLinks) {
                const el = document.getElementById(link.to);
                if (el) {
                  const top = el.offsetTop;
                  if (scrollY >= top - 150) {
                    currentSection = link.name;
                  }
                }
              }
              setActiveLink(currentSection);
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    Events.scrollEvent.register('begin', () => {
      isProgrammatic.current = true;
      window.dispatchEvent(new CustomEvent('programmaticScroll', { detail: true }));
    });

    Events.scrollEvent.register('end', () => {
      setTimeout(() => {
        isProgrammatic.current = false;
        window.dispatchEvent(new CustomEvent('programmaticScroll', { detail: false }));
      }, 150);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled
        ? 'bg-gray-950/85 backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.4)] py-4'
        : 'bg-transparent py-6'
      }`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo / Title */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl font-black text-white tracking-tight cursor-pointer group"
          onClick={() => {
            isProgrammatic.current = true;
            setActiveLink('Home');
            const hero = document.getElementById('hero');
            if (hero) {
              hero.scrollIntoView({ behavior: 'smooth' });
              setTimeout(() => {
                isProgrammatic.current = false;
              }, 1000);
            }
          }}
        >
          CH Praveen<span className="text-orange-500 group-hover:text-sky-400 transition-colors duration-300"> Kumar</span>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          variants={navContainerVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex space-x-2"
        >
          {navLinks.map((link) => {
            const isHovered = hoveredLink === link.name;
            const isActive = activeLink === link.name;

            return (
              <motion.div
                key={link.name}
                variants={navItemVariants}
                className="relative py-1.5 px-3.5"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {/* Sliding Glass Pill background for Hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.span
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </AnimatePresence>

                {/* Sliding Active Gradient Line */}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-line"
                    className="absolute bottom-0 left-3.5 right-3.5 h-[3px] bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                    transition={{ type: "tween", ease: "easeOut", duration: 0.25 }}
                  />
                )}

                <Link
                  to={link.to}
                  smooth={true}
                  offset={link.offset}
                  duration={800}
                  onClick={() => {
                    isProgrammatic.current = true;
                    setActiveLink(link.name);
                  }}
                  className={`cursor-pointer font-semibold text-sm transition-colors duration-300 relative z-10 pb-0.5 ${isActive ? 'text-orange-500' : 'text-gray-300 hover:text-white'
                    }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-xl hover:bg-white/5 transition-all duration-300"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-950/98 border-b border-gray-900"
          >
            <div className="flex flex-col space-y-2 px-6 py-8">
              {navLinks.map((link) => {
                const isActive = activeLink === link.name;
                return (
                  <Link
                    key={link.name}
                    to={link.to}
                    smooth={true}
                    offset={link.offset}
                    duration={800}
                    onClick={() => {
                      isProgrammatic.current = true;
                      setActiveLink(link.name);
                      setIsOpen(false);
                    }}
                    className={`cursor-pointer text-lg font-semibold transition-all duration-300 block py-3 px-4 rounded-xl border border-transparent ${isActive
                        ? 'text-orange-500 bg-orange-500/10 border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.05)]'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Global Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2.5px] bg-gray-900/10 pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-orange-500 via-amber-500 to-sky-400 shadow-[0_0_8px_rgba(249,115,22,0.6)]"
          style={{ width: `${scrollPercent}%` }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
