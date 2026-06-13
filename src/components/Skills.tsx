import { motion } from 'framer-motion';
import { 
  SiPython, 
  SiJavascript, 
  SiReact, 
  SiTailwindcss, 
  SiGit, 
  SiGithub 
} from 'react-icons/si';
import { FaJava, FaDatabase, FaBrain, FaProjectDiagram, FaHtml5, FaCss3Alt } from 'react-icons/fa';

const Skills = () => {
  const skillsData = [
    { name: 'Python', icon: <SiPython className="w-10 h-10 mb-3" />, color: 'text-blue-500', border: 'hover:border-blue-500/50 hover:shadow-blue-500/20' },
    { name: 'Java', icon: <FaJava className="w-10 h-10 mb-3" />, color: 'text-orange-500', border: 'hover:border-orange-500/50 hover:shadow-orange-500/20' },
    { name: 'JavaScript', icon: <SiJavascript className="w-10 h-10 mb-3" />, color: 'text-yellow-400', border: 'hover:border-yellow-400/50 hover:shadow-yellow-400/20' },
    { name: 'React', icon: <SiReact className="w-10 h-10 mb-3" />, color: 'text-cyan-400', border: 'hover:border-cyan-400/50 hover:shadow-cyan-400/20' },
    { name: 'HTML5', icon: <FaHtml5 className="w-10 h-10 mb-3" />, color: 'text-orange-600', border: 'hover:border-orange-600/50 hover:shadow-orange-600/20' },
    { name: 'CSS3', icon: <FaCss3Alt className="w-10 h-10 mb-3" />, color: 'text-blue-600', border: 'hover:border-blue-600/50 hover:shadow-blue-600/20' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-10 h-10 mb-3" />, color: 'text-teal-400', border: 'hover:border-teal-400/50 hover:shadow-teal-400/20' },
    { name: 'SQL', icon: <FaDatabase className="w-10 h-10 mb-3" />, color: 'text-blue-400', border: 'hover:border-blue-400/50 hover:shadow-blue-400/20' },
    { name: 'Git', icon: <SiGit className="w-10 h-10 mb-3" />, color: 'text-orange-600', border: 'hover:border-orange-600/50 hover:shadow-orange-600/20' },
    { name: 'GitHub', icon: <SiGithub className="w-10 h-10 mb-3" />, color: 'text-white', border: 'hover:border-white/50 hover:shadow-white/20' },
    { name: 'Machine Learning', icon: <FaBrain className="w-10 h-10 mb-3" />, color: 'text-purple-500', border: 'hover:border-purple-500/50 hover:shadow-purple-500/20' },
    { name: 'Data Structures', icon: <FaProjectDiagram className="w-10 h-10 mb-3" />, color: 'text-emerald-500', border: 'hover:border-emerald-500/50 hover:shadow-emerald-500/20' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 bg-gray-950/30 relative backdrop-blur-[2px]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Skills</span></h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            A visual overview of the tools, languages, and technologies I use to build robust applications and intelligent systems.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
        >
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`relative bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-300 shadow-lg ${skill.border} group`}
            >
              {/* Shining Animation Effect */}
              <motion.div
                className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
                animate={{ x: ['-150%', '150%'] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2.5 + Math.random(), // slight randomness so they don't shine exactly together
                  ease: "linear",
                  repeatDelay: 1 + Math.random() * 2
                }}
              />
              
              <div className={`relative z-10 transition-colors duration-300 ${skill.color} opacity-80 group-hover:opacity-100`}>
                {skill.icon}
              </div>
              <h3 className="relative z-10 text-gray-300 font-medium text-sm md:text-base group-hover:text-white transition-colors duration-300">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
