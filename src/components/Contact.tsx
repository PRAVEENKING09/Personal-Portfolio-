import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-950/30 relative backdrop-blur-[2px]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Touch</span></h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            I'm currently looking for new opportunities and internships in AI/ML or web development. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <motion.div 
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-gray-900 border border-gray-800 rounded-xl text-cyan-400">
                  <FiMail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Email</h4>
                  <a href="mailto:contact@example.com" className="text-gray-400 hover:text-cyan-400 transition-colors">contact@example.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-4 bg-gray-900 border border-gray-800 rounded-xl text-purple-400">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Location</h4>
                  <p className="text-gray-400">Ballari, Karnataka, India</p>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-gray-800">
                <h4 className="text-white font-semibold text-lg mb-4">Social Profiles</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-500 transition-all hover:-translate-y-1">
                    <FiGithub size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 transition-all hover:-translate-y-1">
                    <FiLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <form className="bg-gray-900 border border-gray-800 p-8 rounded-2xl" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 text-sm font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 text-sm font-medium mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-400 text-sm font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="How can I help you?"
                />
              </div>
              <div className="mb-8">
                <label htmlFor="message" className="block text-gray-400 text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
              >
                Send Message <FiSend />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
