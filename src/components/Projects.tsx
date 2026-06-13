import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "Academic Management System",
      description: "A comprehensive system developed during internship at Sanjay Gandhi Polytechnic to manage academic records, attendance, and performance tracking.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
      tags: ["React", "Node.js", "MySQL", "Tailwind CSS"],
      github: "#",
      demo: "#"
    },
    {
      title: "Machine Learning Classifier",
      description: "An ML project built using Python and Scikit-Learn to classify data points with high accuracy, demonstrating core data science principles.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=600",
      tags: ["Python", "Scikit-Learn", "Pandas", "Jupyter"],
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio built with React, Vite, Tailwind CSS, and Framer Motion to showcase skills and projects.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-950/30 relative backdrop-blur-[2px]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Projects</span></h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full"></div>
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
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden group hover:border-gray-700 transition-all hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs font-medium rounded-full border border-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4 border-t border-gray-800">
                  <a href={project.github} className="text-gray-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors">
                    <FiGithub size={18} /> Code
                  </a>
                  <a href={project.demo} className="text-gray-400 hover:text-cyan-400 flex items-center gap-2 text-sm font-medium transition-colors">
                    <FiExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
