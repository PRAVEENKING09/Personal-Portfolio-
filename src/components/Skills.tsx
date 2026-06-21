import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiGithub
} from 'react-icons/si';
import { FaJava, FaDatabase, FaBrain, FaProjectDiagram, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { useProgrammaticScroll } from '../hooks/useProgrammaticScroll';

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isProgrammatic = useProgrammaticScroll();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [40, 0, 0, -40]);

  const opacityVal = isProgrammatic ? 1 : opacity;
  const yVal = isProgrammatic ? 0 : y;
  const skillsData = [
    { name: 'Python', icon: <SiPython className="w-10 h-10 mb-3" />, color: 'text-blue-500', colorCode: '#3b82f6', glowCode: 'rgba(59, 130, 246, 0.35)' },
    { name: 'Java', icon: <FaJava className="w-10 h-10 mb-3" />, color: 'text-orange-500', colorCode: '#f97316', glowCode: 'rgba(249, 115, 22, 0.35)' },
    { name: 'JavaScript', icon: <SiJavascript className="w-10 h-10 mb-3" />, color: 'text-yellow-400', colorCode: '#facc15', glowCode: 'rgba(250, 204, 21, 0.35)' },
    { name: 'React', icon: <SiReact className="w-10 h-10 mb-3" />, color: 'text-cyan-400', colorCode: '#22d3ee', glowCode: 'rgba(34, 211, 238, 0.35)' },
    { name: 'HTML5', icon: <FaHtml5 className="w-10 h-10 mb-3" />, color: 'text-orange-600', colorCode: '#ea580c', glowCode: 'rgba(234, 88, 12, 0.35)' },
    { name: 'CSS3', icon: <FaCss3Alt className="w-10 h-10 mb-3" />, color: 'text-blue-600', colorCode: '#2563eb', glowCode: 'rgba(37, 99, 235, 0.35)' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-10 h-10 mb-3" />, color: 'text-teal-400', colorCode: '#2dd4bf', glowCode: 'rgba(45, 212, 191, 0.35)' },
    { name: 'SQL', icon: <FaDatabase className="w-10 h-10 mb-3" />, color: 'text-blue-400', colorCode: '#60a5fa', glowCode: 'rgba(96, 165, 250, 0.35)' },
    { name: 'Git', icon: <SiGit className="w-10 h-10 mb-3" />, color: 'text-orange-600', colorCode: '#ea580c', glowCode: 'rgba(234, 88, 12, 0.35)' },
    { name: 'GitHub', icon: <SiGithub className="w-10 h-10 mb-3" />, color: 'text-white', colorCode: '#ffffff', glowCode: 'rgba(255, 255, 255, 0.25)' },
    { name: 'Machine Learning', icon: <FaBrain className="w-10 h-10 mb-3" />, color: 'text-purple-500', colorCode: '#a855f7', glowCode: 'rgba(168, 85, 247, 0.35)' },
    { name: 'Data Structures', icon: <FaProjectDiagram className="w-10 h-10 mb-3" />, color: 'text-emerald-500', colorCode: '#10b981', glowCode: 'rgba(16, 185, 129, 0.35)' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section ref={containerRef} id="skills" className="py-24 relative">
      <motion.div style={{ opacity: opacityVal, y: yVal }} className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-120px 0px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-sky-400">Skills</span></h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            A visual overview of the tools, languages, and technologies I use to build robust applications and intelligent systems.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-120px 0px" }}
        >
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              style={{
                '--skill-color': skill.colorCode,
                '--skill-color-glow': skill.glowCode,
              } as React.CSSProperties}
              className="relative bg-gray-900/40 backdrop-blur-md border border-gray-800/80 rounded-2xl p-6 flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-300 shadow-lg group skill-card-shine"
            >
              {/* Inner radial glow on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${skill.colorCode} 0%, transparent 70%)`
                }}
              />

              {/* Shining sweep effect */}
              <div className="shine-effect" />

              <div className={`relative z-10 transition-colors duration-300 ${skill.color} opacity-80 group-hover:opacity-100`}>
                {skill.icon}
              </div>
              <h3 className="relative z-10 text-gray-300 font-medium text-sm md:text-base group-hover:text-white transition-colors duration-300">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
