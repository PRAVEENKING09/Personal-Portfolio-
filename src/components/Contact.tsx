import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';

const WEB3FORMS_ACCESS_KEY = 'c58b0f18-56f6-4ce4-b7e8-41f88ccf8204';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill out all fields.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Form Error:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again or email me directly.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section ref={containerRef} id="contact" className="min-h-[85vh] py-24 relative overflow-hidden flex flex-col justify-center">
      {/* Background sheet — no backdrop-blur */}
      <div className="absolute inset-0 bg-gray-950/60 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-120px 0px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-sky-400">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            I'm currently looking for new opportunities and internships in AI/ML or web development. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Contact Info */}
          <motion.div
            className="w-full lg:w-1/3 flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-120px 0px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 flex-grow">
              {/* Email Card — no backdrop-blur */}
              <div
                onMouseMove={handleMouseMove}
                className="bg-gray-900/50 border border-gray-800/80 p-6 rounded-2xl flex items-center gap-5 transition-all duration-300 hover:border-orange-500/40 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] group relative overflow-hidden"
              >
                {/* Interactive Spotlight background glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
                  style={{
                    background: `radial-gradient(180px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(249, 115, 22, 0.12), transparent 80%)`
                  }}
                />

                <div className="relative z-10 p-4 bg-gray-950/80 border border-gray-850 rounded-xl text-orange-400 group-hover:scale-110 group-hover:border-orange-500/30 transition-all duration-300 shadow-md flex items-center justify-center shrink-0">
                  <FiMail size={24} />
                </div>
                <div className="relative z-10 min-w-0">
                  <h4 className="text-white font-semibold text-base mb-1">Email</h4>
                  <a href="mailto:praveenking09@gmail.com" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm md:text-base font-medium block truncate">
                    praveenking09@gmail.com
                  </a>
                </div>
              </div>

              {/* Location Card — no backdrop-blur */}
              <div
                onMouseMove={handleMouseMove}
                className="bg-gray-900/50 border border-gray-800/80 p-6 rounded-2xl flex items-center gap-5 transition-all duration-300 hover:border-sky-500/40 hover:shadow-[0_0_25px_rgba(14,165,233,0.15)] group relative overflow-hidden"
              >
                {/* Interactive Spotlight background glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
                  style={{
                    background: `radial-gradient(180px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(14, 165, 233, 0.12), transparent 80%)`
                  }}
                />

                <div className="relative z-10 p-4 bg-gray-950/80 border border-gray-850 rounded-xl text-sky-400 group-hover:scale-110 group-hover:border-sky-500/30 transition-all duration-300 shadow-md flex items-center justify-center shrink-0">
                  <FiMapPin size={24} />
                </div>
                <div className="relative z-10">
                  <h4 className="text-white font-semibold text-base mb-1">Location</h4>
                  <p className="text-gray-400 text-sm md:text-base font-medium">Ballari, Karnataka, India</p>
                </div>
              </div>

              {/* Social profiles container */}
              <div className="pt-8 border-t border-gray-900">
                <h4 className="text-white font-bold text-lg mb-4 tracking-wide">Social Profiles</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-900/50 border border-gray-800/80 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all duration-300 hover:-translate-y-1 shadow-sm"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-900/50 border border-gray-800/80 rounded-xl flex items-center justify-center text-gray-400 hover:text-sky-400 hover:border-sky-500/40 hover:shadow-[0_0_15px_rgba(14,165,233,0.15)] transition-all duration-300 hover:-translate-y-1 shadow-sm"
                  >
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
            viewport={{ once: false, margin: "-120px 0px" }}
            transition={{ duration: 0.6 }}
          >
            <form
              onMouseMove={handleMouseMove}
              onSubmit={handleSubmit}
              className="bg-gray-900/50 border border-gray-800/80 p-8 rounded-2xl shadow-xl relative overflow-hidden group/form flex flex-col h-full"
            >
              {/* Interactive Spotlight background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover/form:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
                style={{
                  background: `radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(249, 115, 22, 0.05), transparent 80%)`
                }}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-gray-400 text-sm font-semibold mb-2 ml-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-950/60 border border-gray-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500/50 focus:shadow-[0_0_15px_rgba(249,115,22,0.15)] transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 text-sm font-semibold mb-2 ml-1">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-950/60 border border-gray-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500/50 focus:shadow-[0_0_15px_rgba(249,115,22,0.15)] transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="mb-6 relative z-10">
                <label htmlFor="subject" className="block text-gray-400 text-sm font-semibold mb-2 ml-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-950/60 border border-gray-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-sky-500/50 focus:shadow-[0_0_15px_rgba(14,165,233,0.15)] transition-all duration-300"
                  placeholder="How can I help you?"
                />
              </div>
              <div className="mb-8 relative z-10 flex-grow">
                <label htmlFor="message" className="block text-gray-400 text-sm font-semibold mb-2 ml-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-gray-950/60 border border-gray-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-sky-500/50 focus:shadow-[0_0_15px_rgba(14,165,233,0.15)] transition-all duration-300 resize-none h-44"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3 relative z-10"
                >
                  <FiCheck className="text-green-400 flex-shrink-0" size={20} />
                  <p className="text-green-400 text-sm font-semibold">Message sent successfully! I'll get back to you soon.</p>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3 relative z-10"
                >
                  <FiAlertCircle className="text-red-400 flex-shrink-0" size={20} />
                  <p className="text-red-400 text-sm font-semibold">{errorMessage}</p>
                </motion.div>
              )}

              <div className="relative z-10">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-orange-500 to-sky-500 text-white font-bold rounded-xl shadow-lg hover:shadow-orange-500/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed group/btn"
                >
                  {status === 'sending' ? (
                    <>
                      <span>Sending...</span>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiSend className="transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
