import { useRef } from 'react';
import { motion } from 'framer-motion';
import certAI from '../assets/IBMDesign20250731-32-fk2tb.pdf';
import certComm from '../assets/IBMDesign20250731-31-xjwk04.pdf';
import certProblem from '../assets/IBMDesign20250731-32-vgu3ti.pdf';

interface CertificationsProps {
  onViewPdf: (pdfUrl: string, title: string) => void;
}

const Certifications = ({ onViewPdf }: CertificationsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const certifications = [
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM SkillsBuild",
      date: "Jul 31, 2025",
      description: "Comprehensive training covering foundational concepts in AI, neural networks, machine learning algorithms, and ethical considerations.",
      pdf: certAI,
      verifyUrl: "https://www.credly.com/badges/293eb694-64d4-4c6a-a91f-27428aa75b76",
      themeColor: "#0ea5e9",
      themeColorSecondary: "#0284c7",
      glowColor: "rgba(14, 165, 233, 0.12)",
      glowShadow: "rgba(14, 165, 233, 0.25)",
      badgeClass: "text-sky-400 border-sky-500/20 bg-sky-500/10 hover:bg-sky-500/20",
      accentIconClass: "text-sky-400"
    },
    {
      title: "Communication and Personality Dynamics",
      issuer: "IBM SkillsBuild",
      date: "Jul 31, 2025",
      description: "Focuses on essential customer engagement skills, interpersonal communication, personality mapping, and dynamic professional relationship building.",
      pdf: certComm,
      verifyUrl: "https://www.credly.com/badges/0c178e3f-6c7d-4793-8be2-3ad0799563cc",
      themeColor: "#f97316",
      themeColorSecondary: "#ea580c",
      glowColor: "rgba(249, 115, 22, 0.12)",
      glowShadow: "rgba(249, 115, 22, 0.25)",
      badgeClass: "text-orange-400 border-orange-500/20 bg-orange-500/10 hover:bg-orange-500/20",
      accentIconClass: "text-orange-400"
    },
    {
      title: "Problem Solving and Process Controls",
      issuer: "IBM SkillsBuild",
      date: "Jul 31, 2025",
      description: "Covers analytical frameworks for customer support problem solving, structured analysis, process evaluation models, and quality controls.",
      pdf: certProblem,
      verifyUrl: "https://www.credly.com/badges/40ae53d2-a45c-4b30-a8aa-fd01afacee99",
      themeColor: "#10b981",
      themeColorSecondary: "#059669",
      glowColor: "rgba(16, 185, 129, 0.12)",
      glowShadow: "rgba(16, 185, 129, 0.25)",
      badgeClass: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10 hover:bg-emerald-500/20",
      accentIconClass: "text-emerald-400"
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
    <section ref={containerRef} id="certifications" className="pt-12 pb-24 relative overflow-hidden">
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
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-sky-400">Courses</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-120px 0px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseMove={handleMouseMove}
              onClick={() => onViewPdf(cert.pdf, cert.title)}
              style={{
                '--card-glow-color': cert.themeColor,
                '--card-glow-shadow': cert.glowShadow,
              } as React.CSSProperties}
              className="bg-gray-900/50 border border-gray-800/80 p-8 rounded-2xl overflow-hidden group hover:border-[var(--card-glow-color)] transition-all duration-300 hover:shadow-[0_0_30px_var(--card-glow-shadow)] flex flex-col h-full relative cursor-pointer"
            >
              {/* Interactive Spotlight background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
                style={{
                  background: `radial-gradient(280px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), ${cert.glowColor}, transparent 80%)`
                }}
              />

              {/* Card Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Visual PDF Preview Thumbnail */}
                <div className="w-full h-44 rounded-xl overflow-hidden mb-5 border border-gray-800 bg-black/40 relative select-none">
                  <iframe
                    src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    className="w-full h-full border-0 pointer-events-none scale-105"
                    scrolling="no"
                  />
                  {/* Clicks catch overlay */}
                  <div className="absolute inset-0 z-10 bg-transparent" />
                </div>

                <div className="flex justify-between items-center mb-4">
                  {/* Glass date pill */}
                  <span className="text-[10px] font-bold tracking-wider uppercase text-gray-400 px-3 py-1 bg-gray-950/60 rounded-full border border-gray-850">
                    {cert.date}
                  </span>

                  <span className="text-xs text-sky-400 font-semibold tracking-wide">
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--card-glow-color)] transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {cert.description}
                </p>

                {/* Styled link buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-800/60 mt-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onViewPdf(cert.pdf, cert.title);
                    }}
                    className="flex-1 py-2.5 bg-gray-950/60 border text-gray-300 hover:text-white text-xs font-bold rounded-xl transition-all duration-300 text-center cursor-pointer hover:bg-gray-900"
                    style={{ 
                      borderColor: `${cert.themeColor}40`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = cert.themeColor;
                      e.currentTarget.style.boxShadow = `0 0 12px ${cert.glowShadow}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = `${cert.themeColor}40`;
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    View Certificate
                  </button>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 py-2.5 text-white text-xs font-bold rounded-xl transition-all duration-300 text-center shadow-md hover:scale-[1.02] active:scale-95"
                    style={{
                      background: `linear-gradient(135deg, ${cert.themeColor} 0%, ${cert.themeColorSecondary} 100%)`,
                      boxShadow: `0 4px 15px -3px ${cert.glowShadow}`
                    }}
                  >
                    Verify Badge
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

export default Certifications;
