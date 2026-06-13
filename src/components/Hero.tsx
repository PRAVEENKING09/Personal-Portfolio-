import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiMail, FiTerminal, FiCpu } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 z-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          className="w-full md:w-3/5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 font-medium tracking-wide mb-2 text-xl md:text-2xl">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            CH Praveen Kumar
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-400 mb-6">
            Aspiring <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">AI/ML Engineer</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 mx-auto md:mx-0">
            Diploma CSE Graduate currently pursuing B.E. in Artificial Intelligence & Machine Learning. Passionate about building intelligent systems and modern web applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="contact" smooth={true} duration={800}>
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
                <FiMail /> Contact Me
              </button>
            </Link>
            <a href="#" className="px-8 py-3 bg-transparent border-2 border-gray-700 text-white font-medium rounded-full hover:border-cyan-500 hover:text-cyan-400 transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
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
          {/* Futuristic Animated AI Core */}
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Outer rotating dashed ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30"
            />
            
            {/* Inner rotating solid ring with gradient */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-6 rounded-full border border-purple-500/30 border-t-purple-400"
            />

            {/* Glowing core background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-full blur-[80px] opacity-20 animate-pulse" />

            {/* Floating Glassmorphic Center Card */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-10 bg-gray-900/60 backdrop-blur-xl rounded-full border border-gray-700/50 shadow-[0_0_30px_rgba(34,211,238,0.15)] flex items-center justify-center overflow-hidden"
            >
              {/* Abstract dot pattern inside */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #22d3ee 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
              
              <div className="z-10 flex flex-col items-center">
                <FiTerminal className="text-4xl text-cyan-400 mb-3 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                <span className="text-gray-200 font-mono text-sm border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  import AI
                </span>
              </div>
            </motion.div>
            
            {/* Floating mini nodes around */}
            <motion.div
               animate={{ y: [-8, 8, -8], x: [4, -4, 4] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute top-10 right-6 md:right-10 w-10 h-10 bg-purple-500/10 backdrop-blur-md rounded-full border border-purple-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.3)] z-20"
            >
              <div className="w-2.5 h-2.5 bg-purple-400 rounded-full animate-ping" />
            </motion.div>

            <motion.div
               animate={{ y: [6, -6, 6], x: [-6, 6, -6] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
               className="absolute bottom-12 left-4 md:left-8 w-14 h-14 bg-cyan-500/10 backdrop-blur-md rounded-full border border-cyan-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.3)] z-20"
            >
              <FiCpu className="text-cyan-400 text-2xl drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link to="about" smooth={true} duration={800} className="cursor-pointer text-gray-500 hover:text-cyan-400 transition-colors animate-bounce block">
          <FiArrowDown size={24} />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
