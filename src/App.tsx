import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import type { ReactNode } from 'react';

const SectionWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  useEffect(() => {
    // Prevent browser from restoring previous scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
      <Background3D />
      
      {/* Content wrapper with relative positioning and z-index to sit above the 3D canvas */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <SectionWrapper><About /></SectionWrapper>
          <SectionWrapper><Skills /></SectionWrapper>
          <SectionWrapper><Projects /></SectionWrapper>
          <SectionWrapper><Experience /></SectionWrapper>
          <SectionWrapper><Certifications /></SectionWrapper>
          <SectionWrapper><Contact /></SectionWrapper>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
