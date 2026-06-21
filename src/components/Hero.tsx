import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowDown, FiDownload, FiMail, FiCpu } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { useProgrammaticScroll } from '../hooks/useProgrammaticScroll';
import praveenImage from '../assets/praveen.jpeg';
import resumePdf from '../assets/Praveen__Resume.pdf';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isProgrammatic = useProgrammaticScroll();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, -100]);

  const opacityVal = isProgrammatic ? 1 : opacity;
  const yVal = isProgrammatic ? 0 : y;

  return (
    <section ref={containerRef} id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent">
      {/* Background elements — reduced blur for performance */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div style={{ opacity: opacityVal, y: yVal }} className="container mx-auto px-6 md:px-12 z-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="w-full md:w-3/5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-orange-500 font-medium tracking-wide mb-2 text-xl md:text-2xl">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            CH Praveen Kumar
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-400 mb-6">
            Aspiring <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-sky-400">AI/ML Engineer</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 mx-auto md:mx-0">
            Diploma CSE Graduate currently pursuing B.E. in Artificial Intelligence & Machine Learning at Kishkinda University. Passionate about building intelligent systems and modern web applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="contact" smooth={true} duration={800}>
              <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-medium rounded-full shadow-lg hover:shadow-orange-500/25 transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
                <FiMail /> Contact Me
              </button>
            </Link>
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              download="Praveen_Kumar_Resume.pdf"
              className="px-8 py-3 bg-transparent border-2 border-gray-700 text-white font-medium rounded-full hover:border-orange-500 hover:text-orange-400 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <FiDownload /> Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-2/5 mt-16 md:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Futuristic Interactive Naruto Sealing Core (2D HTML/CSS for perfect scaling) */}
          <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px] lg:w-[480px] lg:h-[480px] flex items-center justify-center">

            {/* Outer rotating solid ring (Rasengan Blue) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-sky-500/30 border-t-sky-400 shadow-[0_0_15px_rgba(14,165,233,0.15)]"
            />

            {/* Middle rotating dashed ring (Kurama Orange) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-5 sm:inset-7 md:inset-9 lg:inset-10 rounded-full border-2 border-dashed border-orange-500/30"
            />

            {/* Glowing core background blur */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-sky-500 rounded-full blur-3xl opacity-15" />

            {/* Floating Center Profile Image with Glowing Border */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[190px] h-[190px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] lg:w-[320px] lg:h-[320px] bg-black rounded-full border-2 border-sky-500/40 shadow-[0_0_35px_rgba(14,165,233,0.25)] flex items-center justify-center overflow-hidden group z-10"
            >
              <div className="w-full h-full rounded-full overflow-hidden relative bg-black">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-orange-500/10 z-10 pointer-events-none" />
                <img
                  src={praveenImage}
                  alt="CH Praveen Kumar"
                  className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Floating mini nodes around */}
            {/* Pulsing dot node (Rasengan Blue) on the outer solid ring */}
            <motion.div
              animate={{ y: [-6, 6, -6], x: [3, -3, 3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-6 right-6 sm:top-10 sm:right-10 md:top-14 md:right-14 w-8 h-8 sm:w-10 sm:h-10 bg-sky-500/10 rounded-full border border-sky-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.3)] z-20"
            >
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-sky-400 rounded-full animate-ping" />
            </motion.div>

            {/* CPU chip node (Kurama Orange) on the middle dashed ring */}
            <motion.div
              animate={{ y: [6, -6, 6], x: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-6 left-6 sm:bottom-12 sm:left-12 md:bottom-20 md:left-16 w-11 h-11 sm:w-14 sm:h-14 bg-orange-500/10 rounded-full border border-orange-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.3)] z-20"
            >
              <FiCpu className="text-orange-400 text-2xl drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link to="about" smooth={true} duration={800} className="cursor-pointer text-gray-500 hover:text-orange-400 transition-colors animate-bounce block">
          <FiArrowDown size={24} />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
