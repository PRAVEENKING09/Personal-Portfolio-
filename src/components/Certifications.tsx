import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import certAI from '../assets/IBMDesign20250731-32-fk2tb.pdf';
import certComm from '../assets/IBMDesign20250731-31-xjwk04.pdf';
import certProblem from '../assets/IBMDesign20250731-32-vgu3ti.pdf';

const Certifications = () => {
  const certifications = [
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM SkillsBuild",
      date: "Jul 31, 2025",
      description: "Comprehensive training covering foundational concepts in AI, neural networks, machine learning algorithms, and ethical considerations.",
      pdf: certAI,
      verifyUrl: "https://www.credly.com/badges/293eb694-64d4-4c6a-a91f-27428aa75b76"
    },
    {
      title: "Communication and Personality Dynamics",
      issuer: "IBM SkillsBuild",
      date: "Jul 31, 2025",
      description: "Focuses on essential customer engagement skills, interpersonal communication, personality mapping, and dynamic professional relationship building.",
      pdf: certComm,
      verifyUrl: "https://www.credly.com/badges/0c178e3f-6c7d-4793-8be2-3ad0799563cc"
    },
    {
      title: "Problem Solving and Process Controls",
      issuer: "IBM SkillsBuild",
      date: "Jul 31, 2025",
      description: "Covers analytical frameworks for customer support problem solving, structured analysis, process evaluation models, and quality controls.",
      pdf: certProblem,
      verifyUrl: "https://www.credly.com/badges/40ae53d2-a45c-4b30-a8aa-fd01afacee99"
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-gray-900/30 relative border-t border-gray-800/50 backdrop-blur-[2px]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Courses</span></h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-800/50 border border-gray-700 p-8 rounded-2xl hover:border-cyan-500/50 transition-all backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <div className="text-cyan-400 mb-6">
                  <FiCheckCircle size={36} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-purple-400 font-semibold mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-sm mb-4">Issued: {cert.date}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{cert.description}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-800/60">
                <a 
                  href={cert.pdf} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 bg-gray-900 border border-gray-800 text-white text-xs font-semibold rounded-lg hover:border-cyan-500 transition-colors text-center flex-1"
                >
                  View PDF
                </a>
                <a 
                  href={cert.verifyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/10 transition-all text-center flex-1"
                >
                  Verify Badge
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
