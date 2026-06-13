import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
  ];

  const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl font-bold text-white tracking-tight"
        >
          CH Praveen<span className="text-cyan-400"> Kumar</span>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div 
          variants={navContainerVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex space-x-8"
        >
          {navLinks.map((link) => (
            <motion.div key={link.name} variants={navItemVariants}>
              <Link
                to={link.to}
                smooth={true}
                spy={true}
                offset={-100}
                duration={800}
                activeClass="!text-cyan-400 !border-cyan-400"
                className="text-gray-300 hover:text-cyan-400 cursor-pointer font-medium transition-all duration-300 pb-1 border-b-2 border-transparent"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
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
            className="md:hidden bg-gray-900/95 backdrop-blur-md shadow-xl"
          >
            <div className="flex flex-col space-y-4 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  spy={true}
                  offset={-100}
                  duration={800}
                  activeClass="!text-cyan-400 bg-gray-800/50 rounded-lg pl-4 border-l-4 !border-cyan-400"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-cyan-400 cursor-pointer text-lg font-medium transition-all duration-300 block py-2 border-l-4 border-transparent pl-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
