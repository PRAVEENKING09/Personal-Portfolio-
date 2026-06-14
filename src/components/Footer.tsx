import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const closeModal = () => setModalType(null);

  return (
    <footer className="bg-gray-950 py-8 border-t border-gray-900 relative z-50">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xl font-bold text-white tracking-tighter">
          CH<span className="text-cyan-400">.</span>
        </div>
        
        <div className="text-gray-500 text-sm text-center md:text-left">
          &copy; {currentYear} CH Praveen Kumar. All rights reserved.
        </div>
        
        <div className="flex gap-6 text-sm font-medium">
          <button 
            onClick={() => setModalType('privacy')} 
            className="text-gray-500 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Privacy
          </button>
          <button 
            onClick={() => setModalType('terms')} 
            className="text-gray-500 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Terms
          </button>
        </div>
      </div>

      {/* Terms & Privacy Modal Overlay */}
      <AnimatePresence>
        {modalType && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-2xl bg-gray-900/90 border border-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl max-h-[85vh] flex flex-col overflow-hidden backdrop-blur-md"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 p-2 bg-gray-950 border border-gray-800 hover:border-cyan-500 text-gray-400 hover:text-white rounded-lg transition-all"
                aria-label="Close modal"
              >
                <FiX size={18} />
              </button>

              {/* Header */}
              <h3 className="text-2xl font-bold text-white mb-6 pr-8">
                {modalType === 'privacy' ? (
                  <>
                    Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Policy</span>
                  </>
                ) : (
                  <>
                    Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Service</span>
                  </>
                )}
              </h3>

              {/* Scrollable Content */}
              <div className="overflow-y-auto flex-1 pr-2 space-y-4 text-gray-300 text-sm leading-relaxed custom-scrollbar">
                {modalType === 'privacy' ? (
                  <>
                    <p className="text-gray-400">Last updated: June 14, 2026</p>
                    
                    <h4 className="text-white font-semibold text-base mt-4">1. Introduction</h4>
                    <p>
                      Welcome to my personal portfolio. I value your privacy and aim to be transparent about any data collected when you interact with this website.
                    </p>

                    <h4 className="text-white font-semibold text-base mt-4">2. Information I Collect</h4>
                    <p>
                      This website collects personal data only when you choose to fill out the contact form. This includes:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Your Name</li>
                      <li>Your Email Address</li>
                      <li>Subject and message contents</li>
                    </ul>

                    <h4 className="text-white font-semibold text-base mt-4">3. How I Use Your Information</h4>
                    <p>
                      The information you provide is used solely to respond to your inquiries, discuss potential internships or opportunities, and communicate with you directly.
                    </p>

                    <h4 className="text-white font-semibold text-base mt-4">4. Third-Party Services</h4>
                    <p>
                      Form submissions are securely processed through <strong>Web3Forms</strong>. Web3Forms is used as a secure backend pathway to deliver your messages straight to my personal inbox. They do not share or sell your details.
                    </p>

                    <h4 className="text-white font-semibold text-base mt-4">5. Security and Data Protection</h4>
                    <p>
                      I take reasonable measures to protect the communication sent through this website. However, please remember that no method of transmission over the Internet is 100% secure.
                    </p>

                    <h4 className="text-white font-semibold text-base mt-4">6. Contact Information</h4>
                    <p>
                      If you have any questions or concerns regarding this policy, feel free to reach out directly to:
                      <br />
                      <a href="mailto:www.praveenking09@gmail.com" className="text-cyan-400 hover:underline">www.praveenking09@gmail.com</a>
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-gray-400">Last updated: June 14, 2026</p>

                    <h4 className="text-white font-semibold text-base mt-4">1. Acceptance of Terms</h4>
                    <p>
                      By accessing this portfolio website, you are agreeing to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any local laws.
                    </p>

                    <h4 className="text-white font-semibold text-base mt-4">2. Use License</h4>
                    <p>
                      Permission is granted to view the materials (information or software) on this portfolio for personal, non-commercial transitory viewing only. Under this license you may not:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Modify or copy the materials.</li>
                      <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial).</li>
                      <li>Attempt to decompile or reverse engineer any code contained on this website.</li>
                    </ul>

                    <h4 className="text-white font-semibold text-base mt-4">3. Disclaimer</h4>
                    <p>
                      The materials on this website are provided on an 'as is' basis. I make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability or fitness for a particular purpose.
                    </p>

                    <h4 className="text-white font-semibold text-base mt-4">4. Limitations</h4>
                    <p>
                      In no event shall CH Praveen Kumar be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.
                    </p>

                    <h4 className="text-white font-semibold text-base mt-4">5. Revisions and Errata</h4>
                    <p>
                      The materials appearing on this website could include technical, typographical, or photographic errors. I do not warrant that any of the materials on its website are accurate, complete or current.
                    </p>

                    <h4 className="text-white font-semibold text-base mt-4">6. Governing Law</h4>
                    <p>
                      Any claim relating to this website shall be governed by the laws of Karnataka, India without regard to its conflict of law provisions.
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
