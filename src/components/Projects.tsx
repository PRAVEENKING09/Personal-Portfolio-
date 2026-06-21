import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useProgrammaticScroll } from '../hooks/useProgrammaticScroll';

const Projects = () => {
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

  const projects = [
    {
      title: "Academic Management System",
      description: "A comprehensive system developed during internship at Sanjay Gandhi Polytechnic to manage academic records, attendance, and performance tracking.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
      tags: ["React", "Node.js", "MySQL", "Tailwind CSS"],
      category: "Web Application",
      themeColor: "#0ea5e9",
      themeColorSecondary: "#0284c7",
      glowColor: "rgba(14, 165, 233, 0.12)",
      glowShadow: "rgba(14, 165, 233, 0.25)",
      github: "#",
      demo: "#"
    },
    {
      title: "Machine Learning Classifier",
      description: "An ML project built using Python and Scikit-Learn to classify data points with high accuracy, demonstrating core data science principles.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=600",
      tags: ["Python", "Scikit-Learn", "Pandas", "Jupyter"],
      category: "Data Science",
      themeColor: "#f97316",
      themeColorSecondary: "#ea580c",
      glowColor: "rgba(249, 115, 22, 0.12)",
      glowShadow: "rgba(249, 115, 22, 0.25)",
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio built with React, Vite, Tailwind CSS, and Framer Motion to showcase skills and projects.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "Frontend Web",
      themeColor: "#06b6d4",
      themeColorSecondary: "#0891b2",
      glowColor: "rgba(6, 182, 212, 0.12)",
      glowShadow: "rgba(6, 182, 212, 0.25)",
      github: "#",
      demo: "#"
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section ref={containerRef} id="projects" className="py-24 relative overflow-hidden">
      {/* Background glassmorphic sheet overlaying canvas plexus particles */}
      <div className="absolute inset-0 bg-gray-950/45 backdrop-blur-[6px] pointer-events-none" />

      <motion.div style={{ opacity: opacityVal, y: yVal }} className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-120px 0px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-sky-400">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work spanning web development and machine learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-120px 0px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseMove={handleMouseMove}
              style={{
                '--card-glow-color': project.themeColor,
                '--card-glow-shadow': project.glowShadow,
              } as React.CSSProperties}
              className="bg-gray-900/40 backdrop-blur-md border border-gray-800/80 rounded-2xl overflow-hidden group hover:border-[var(--card-glow-color)] transition-all duration-300 hover:shadow-[0_0_30px_var(--card-glow-shadow)] flex flex-col h-full relative"
            >
              {/* Interactive Spotlight background glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
                style={{
                  background: `radial-gradient(280px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), ${project.glowColor}, transparent 80%)`
                }}
              />

              {/* Image Section */}
              <div className="relative h-48 overflow-hidden z-10">
                {/* Category Pill Tag */}
                <div className="absolute top-4 right-4 z-20 px-3 py-1 text-[10px] font-bold tracking-wider uppercase text-white bg-gray-950/75 backdrop-blur-md rounded-full border border-gray-800/80 shadow-md">
                  {project.category}
                </div>

                <div className="absolute inset-0 bg-gray-900/30 group-hover:bg-gray-900/10 transition-colors z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--card-glow-color)] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx} 
                      className="px-2.5 py-1 bg-gray-950/60 text-gray-400 text-xs font-semibold rounded-lg border border-gray-850 group-hover:border-[var(--card-glow-color)]/20 group-hover:text-white transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons/Links Section */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-800/60 mt-auto">
                  <a 
                    href={project.github} 
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold text-gray-400 bg-gray-950/50 hover:bg-gray-950 border border-gray-800 hover:border-gray-700 rounded-xl transition-all duration-300 shadow-sm text-center"
                  >
                    <FiGithub size={14} /> <span>Code</span>
                  </a>
                  <a 
                    href={project.demo} 
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold text-white transition-all duration-300 rounded-xl text-center shadow-md hover:scale-[1.02] active:scale-95"
                    style={{
                      background: `linear-gradient(135deg, ${project.themeColor} 0%, ${project.themeColorSecondary} 100%)`,
                      boxShadow: `0 4px 15px -3px ${project.glowShadow}`
                    }}
                  >
                    <FiExternalLink size={14} /> <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
