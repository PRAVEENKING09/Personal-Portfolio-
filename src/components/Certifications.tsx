import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const Certifications = () => {
  const certifications = [
    {
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.AI / Coursera",
      instructor: "Andrew Ng",
      description: "Comprehensive specialization covering supervised/unsupervised learning, recommender systems, and reinforcement learning."
    },
    {
      title: "Deep Learning Fundamentals",
      issuer: "fast.ai",
      instructor: "Jeremy Howard",
      description: "Practical deep learning for coders, covering CNNs, RNNs, and deployment of models."
    },
    {
      title: "Python & Machine Learning",
      issuer: "Kaggle Learn",
      instructor: "Kaggle",
      description: "Completed micro-courses on Python, Pandas, Data Visualization, and Intro to Machine Learning."
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
              className="bg-gray-800/50 border border-gray-700 p-8 rounded-2xl hover:border-cyan-500/50 transition-colors backdrop-blur-sm"
            >
              <div className="text-cyan-400 mb-6">
                <FiCheckCircle size={36} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-purple-400 font-medium mb-1">{cert.issuer}</p>
              <p className="text-gray-500 text-sm mb-4">Instructor: {cert.instructor}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
