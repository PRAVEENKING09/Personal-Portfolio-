import { motion } from 'framer-motion';
import { FiMapPin, FiGlobe, FiBookOpen } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-900/30 relative backdrop-blur-[2px]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Me</span></h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">A bit about my journey</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              I am a dedicated Diploma CSE graduate currently advancing my education with a B.E. in Artificial Intelligence & Machine Learning. My academic and practical experiences have fueled my passion for creating intelligent systems and robust applications.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              I thrive on solving complex problems, learning cutting-edge technologies, and building solutions that have a real-world impact. As I prepare for placements, I am eager to apply my strong foundation in computer science and specialized skills in AI/ML to professional challenges.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 bg-gray-800 rounded-lg text-cyan-400">
                  <FiMapPin />
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-gray-500 text-sm">Ballari, Karnataka, India</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 bg-gray-800 rounded-lg text-purple-400">
                  <FiGlobe />
                </div>
                <div>
                  <h4 className="text-white font-medium">Languages</h4>
                  <p className="text-gray-500 text-sm">English, Telugu, Kannada</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:col-span-2">
                <div className="mt-1 p-2 bg-gray-800 rounded-lg text-green-400">
                  <FiBookOpen />
                </div>
                <div>
                  <h4 className="text-white font-medium">Current Status</h4>
                  <p className="text-gray-500 text-sm">Pursuing Engineering in AI & ML</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 shadow-xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-6">Quick Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                  <span className="text-gray-300">Strong foundation in Computer Science</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  <span className="text-gray-300">Specializing in AI and Machine Learning</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                  <span className="text-gray-300">Experience with modern web frameworks (React)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  <span className="text-gray-300">Actively building projects and learning</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                  <span className="text-gray-300">Ready for full-time opportunities and internships</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
