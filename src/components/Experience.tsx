import { motion } from 'framer-motion';
import { FiBriefcase, FiAward } from 'react-icons/fi';
import internCert from '../assets/459CS23022.pdf';

const Experience = () => {
  const education = [
    {
      title: "B.E. in Artificial Intelligence & Machine Learning",
      institution: "Kishkinda University",
      period: "Present",
      description: "Focusing on advanced algorithms, neural networks, deep learning, and data science principles.",
    },
    {
      title: "Diploma in Computer Science & Engineering",
      institution: "Sanjay Gandhi Polytechnic, Ballari",
      period: "Graduated",
      description: "Built a strong foundation in core computer science subjects including programming, databases, and computer networks.",
    }
  ];

  const experience = [
    {
      title: "Java Full Stack Intern",
      institution: "Techmiya Solutions India Pvt Ltd",
      period: "Jan 2026 - Apr 2026",
      description: "Served as a Java Full Stack Intern, contributing to software development solutions. Gained hands-on experience in the software development lifecycle, web applications, and database management.",
      certificate: internCert
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gray-900/30 relative backdrop-blur-[2px]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Journey & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Experience</span></h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Education Timeline */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gray-800 rounded-lg text-purple-400">
                <FiAward size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:to-transparent">
              {education.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-gray-900 bg-purple-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow absolute left-0 md:left-1/2 -translate-x-1/2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] pl-4 md:pl-0 md:group-odd:pr-8 md:group-even:pl-8">
                    <div className="bg-gray-800/80 border border-gray-700 p-6 rounded-2xl hover:border-purple-500/50 transition-colors shadow-lg">
                      <span className="text-purple-400 font-semibold text-sm tracking-wide uppercase">{item.period}</span>
                      <h4 className="text-xl font-bold text-white mt-2">{item.title}</h4>
                      <p className="text-gray-400 font-medium mt-1 mb-3">{item.institution}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gray-800 rounded-lg text-cyan-400">
                <FiBriefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:to-transparent">
              {experience.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-gray-900 bg-cyan-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow absolute left-0 md:left-1/2 -translate-x-1/2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] pl-4 md:pl-0 md:group-odd:pr-8 md:group-even:pl-8">
                    <div className="bg-gray-800/80 border border-gray-700 p-6 rounded-2xl hover:border-cyan-500/50 transition-colors shadow-lg">
                      <span className="text-cyan-400 font-semibold text-sm tracking-wide uppercase">{item.period}</span>
                      <h4 className="text-xl font-bold text-white mt-2">{item.title}</h4>
                      <p className="text-gray-400 font-medium mt-1 mb-3">{item.institution}</p>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.description}</p>
                      {item.certificate && (
                        <a 
                          href={item.certificate} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          View Certificate &rarr;
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
