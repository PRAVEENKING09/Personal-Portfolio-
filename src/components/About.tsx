import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiGlobe, FiBookOpen, FiCpu, FiCode, FiLayout, FiAward } from 'react-icons/fi';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const highlights = [
    {
      icon: <FiCode className="text-orange-500 group-hover:text-orange-400 transition-colors" size={24} />,
      title: "Core CS Foundation",
      description: "Strong theoretical & practical concepts built during my Diploma in Computer Science.",
      colorCode: "#f97316",
      glowCode: "rgba(249, 115, 22, 0.35)"
    },
    {
      icon: <FiCpu className="text-sky-400 group-hover:text-sky-300 transition-colors" size={24} />,
      title: "AI & ML Specialization",
      description: "Deep diving into Neural Networks, Deep Learning, and predictive modeling during my B.E. studies.",
      colorCode: "#0ea5e9",
      glowCode: "rgba(14, 165, 233, 0.35)"
    },
    {
      icon: <FiLayout className="text-orange-500 group-hover:text-orange-400 transition-colors" size={24} />,
      title: "Modern Web Dev",
      description: "Building responsive, highly-interactive frontend layouts using React, TailwindCSS, and Three.js.",
      colorCode: "#f97316",
      glowCode: "rgba(249, 115, 22, 0.35)"
    },
    {
      icon: <FiAward className="text-sky-400 group-hover:text-sky-300 transition-colors" size={24} />,
      title: "Problem Solver",
      description: "Constantly learning modern frameworks and looking forward to tackles in internships and placements.",
      colorCode: "#0ea5e9",
      glowCode: "rgba(14, 165, 233, 0.35)"
    }
  ];

  return (
    <section ref={containerRef} id="about" className="pt-12 pb-24 relative overflow-hidden">
      {/* Background sheet — NO backdrop-blur for performance */}
      <div className="absolute inset-0 bg-gray-950/60 pointer-events-none" />

      {/* Decorative ambient circles — use blur-2xl instead of blur-3xl */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-orange-500/5 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-sky-500/5 rounded-full blur-2xl pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-120px 0px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-sky-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-sky-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Journey Text Side */}
          <motion.div
            className="w-full lg:w-5/12 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-120px 0px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
              A bit about my <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">journey</span>
            </h3>

            <p className="text-gray-400 leading-relaxed text-base">
              I am a dedicated <span className="text-white font-semibold">Diploma CSE graduate</span> currently advancing my education with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-sky-400 font-semibold">B.Tech in Artificial Intelligence & Machine Learning</span> at Kishkinda University, Ballari. My academic and practical experiences have fueled my passion for <span className="text-white font-semibold">creating intelligent systems and robust applications</span>.
            </p>
            <p className="text-gray-400 leading-relaxed text-base">
              I thrive on solving complex problems, learning cutting-edge technologies, and building solutions that have a <span className="text-sky-400 font-semibold">real-world impact</span>. As I prepare for placements, I am eager to apply my strong foundation in computer science and <span className="text-orange-500 font-semibold">specialized skills in AI/ML</span> to professional challenges.
            </p>

            {/* Quick Info Grid — removed backdrop-blur-md */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-gray-900">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-900/50 border border-gray-800/60 hover:border-orange-500/30 transition-all duration-300 group/item">
                <div className="p-3 bg-gray-950 border border-gray-850 rounded-xl text-orange-400 group-hover/item:scale-110 transition-transform duration-300 shadow-md">
                  <FiMapPin size={18} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Location</h4>
                  <p className="text-gray-400 text-xs mt-0.5">Ballari, Karnataka, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-900/50 border border-gray-800/60 hover:border-sky-500/30 transition-all duration-300 group/item">
                <div className="p-3 bg-gray-950 border border-gray-850 rounded-xl text-sky-400 group-hover/item:scale-110 transition-transform duration-300 shadow-md">
                  <FiGlobe size={18} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Languages</h4>
                  <p className="text-gray-400 text-xs mt-0.5">English, Telugu, Kannada</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-900/50 border border-gray-800/60 hover:border-emerald-500/30 transition-all duration-300 group/item sm:col-span-2">
                <div className="p-3 bg-gray-950 border border-gray-850 rounded-xl text-emerald-400 group-hover/item:scale-110 transition-transform duration-300 shadow-md">
                  <FiBookOpen size={18} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Current Status</h4>
                  <p className="text-gray-400 text-xs mt-0.5">Pursuing B.Tech in AI & ML at Kishkinda University, Ballari</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights Widget Grid */}
          <motion.div
            className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-120px 0px" }}
            transition={{ duration: 0.6 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  '--skill-color': item.colorCode,
                  '--skill-color-glow': item.glowCode,
                } as React.CSSProperties}
                className="group bg-gray-900/50 border border-gray-800/80 p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 shadow-lg relative overflow-hidden skill-card-shine"
              >
                {/* Radial hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${item.colorCode} 0%, transparent 70%)`
                  }}
                />

                {/* Shimmer sweep shine */}
                <div className="shine-effect" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gray-950 border border-gray-800/80 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-[var(--skill-color)] transition-all duration-300 shadow-sm">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-2 group-hover:text-[var(--skill-color)] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
