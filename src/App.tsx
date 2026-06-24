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
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  const [activePdf, setActivePdf] = useState<string | null>(null);
  const [pdfTitle, setPdfTitle] = useState<string>('');

  const handleViewPdf = (pdfUrl: string, title: string) => {
    setActivePdf(pdfUrl);
    setPdfTitle(title);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
      <Background3D />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience onViewPdf={handleViewPdf} />
          <Certifications onViewPdf={handleViewPdf} />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* PDF Viewer Modal */}
      <AnimatePresence>
        {activePdf && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePdf(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-4xl bg-gray-900/90 border border-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl h-[85vh] flex flex-col overflow-hidden backdrop-blur-md"
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePdf(null)}
                className="absolute top-6 right-6 p-2 bg-gray-950 border border-gray-800 hover:border-orange-500 text-gray-400 hover:text-white rounded-lg transition-all cursor-pointer"
                aria-label="Close PDF Viewer"
              >
                <FiX size={18} />
              </button>

              {/* Header */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 pr-8 truncate">
                Viewing: <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-sky-400 font-bold">{pdfTitle}</span>
              </h3>

              {/* PDF Frame */}
              <div className="flex-1 w-full rounded-xl overflow-hidden bg-black/40 border border-gray-850 relative">
                <iframe
                  src={`${activePdf}#toolbar=0`}
                  className="w-full h-full border-0"
                  title={pdfTitle}
                />
              </div>

              {/* Footer info/fallback link */}
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
                <span>Use scroll inside the viewer to inspect pages.</span>
                <a
                  href={activePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 font-semibold underline flex items-center gap-1 cursor-pointer"
                >
                  Can't view? Open in a new tab
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
