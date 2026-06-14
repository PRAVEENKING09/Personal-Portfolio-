import { motion } from 'framer-motion';
import { FiMapPin, FiGlobe, FiBookOpen, FiCpu, FiCode, FiLayout, FiAward } from 'react-icons/fi';

const About = () => {
  const highlights = [
    {
      icon: <FiCode className="text-cyan-400" size={24} />,
      title: "Core CS Foundation",
      description: "Strong theoretical & practical concepts built during my Diploma in Computer Science.",
      glow: "group-hover:shadow-cyan-500/10"
    },
    {
      icon: <FiCpu className="text-purple-400" size={24} />,
      title: "AI & ML Specialization",
      description: "Deep diving into Neural Networks, Deep Learning, and predictive modeling during my B.E. studies.",
      glow: "group-hover:shadow-purple-500/10"
    },
    {
      icon: <FiLayout className="text-cyan-400" size={24} />,
      title: "Modern Web Dev",
      description: "Building responsive, highly-interactive frontend layouts using React, TailwindCSS, and Three.js.",
      glow: "group-hover:shadow-cyan-500/10"
    },
    {
      icon: <FiAward className="text-purple-400" size={24} />,
      title: "Problem Solver",
      description: "Constantly learning modern frameworks and looking forward to tackles in internships and placements.",
      glow: "group-hover:shadow-purple-500/10"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-950/20 relative backdrop-blur-[2px] overflow-hidden">
      {/* Decorative ambient glowing circles */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Journey Text Side */}
          <motion.div 
            className="w-full lg:w-5/12 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
              A bit about my <span className="text-cyan-400">journey</span>
            </h3>
            
            <p className="text-gray-400 leading-relaxed text-base">
              I am a dedicated Diploma CSE graduate currently advancing my education with a B.E. in Artificial Intelligence & Machine Learning at Kishkinda University. My academic and practical experiences have fueled my passion for creating intelligent systems and robust applications.
            </p>
            <p className="text-gray-400 leading-relaxed text-base">
              I thrive on solving complex problems, learning cutting-edge technologies, and building solutions that have a real-world impact. As I prepare for placements, I am eager to apply my strong foundation in computer science and specialized skills in AI/ML to professional challenges.
            </p>
            
            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-900">
              <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-900/40 transition-colors">
                <div className="p-3 bg-gray-900 border border-gray-800 rounded-xl text-cyan-400">
                  <FiMapPin size={18} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Location</h4>
                  <p className="text-gray-500 text-xs mt-0.5">Ballari, Karnataka, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-900/40 transition-colors">
                <div className="p-3 bg-gray-900 border border-gray-800 rounded-xl text-purple-400">
                  <FiGlobe size={18} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Languages</h4>
                  <p className="text-gray-500 text-xs mt-0.5">English, Telugu, Kannada</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-900/40 transition-colors sm:col-span-2">
                <div className="p-3 bg-gray-900 border border-gray-800 rounded-xl text-emerald-400">
                  <FiBookOpen size={18} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Current Status</h4>
                  <p className="text-gray-500 text-xs mt-0.5">Pursuing B.E. in AI & ML at Kishkinda University</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights Widget Grid */}
          <motion.div 
            className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`group bg-gray-900/40 border border-gray-800/80 hover:border-cyan-500/30 p-6 rounded-2xl flex flex-col justify-between transition-all shadow-lg backdrop-blur-sm ${item.glow}`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gray-950 border border-gray-800 flex items-center justify-center mb-5 group-hover:border-cyan-500/30 transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
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
