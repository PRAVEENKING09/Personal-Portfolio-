import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { useProgrammaticScroll } from '../hooks/useProgrammaticScroll';
import certAI from '../assets/IBMDesign20250731-32-fk2tb.pdf';
import certComm from '../assets/IBMDesign20250731-31-xjwk04.pdf';
import certProblem from '../assets/IBMDesign20250731-32-vgu3ti.pdf';

const Certifications = () => {
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
    <section ref={containerRef} id="certifications" className="py-24 relative overflow-hidden">
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
              style={{
                '--card-glow-color': cert.themeColor,
                '--card-glow-shadow': cert.glowShadow,
              } as React.CSSProperties}
              className="bg-gray-900/40 backdrop-blur-md border border-gray-800/80 p-8 rounded-2xl overflow-hidden group hover:border-[var(--card-glow-color)] transition-all duration-300 hover:shadow-[0_0_30px_var(--card-glow-shadow)] flex flex-col h-full relative"
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
                <div className="flex justify-between items-start mb-6">
                  {/* Glowing Checkmark container with micro-rotation */}
                  <div className={`relative w-14 h-14 rounded-2xl border flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-md ${cert.badgeClass}`}>
                    <FiCheckCircle size={26} className={`relative z-10 transition-transform duration-700 group-hover:rotate-[360deg] ${cert.accentIconClass}`} />
                  </div>

                  {/* Glass date pill */}
                  <span className="text-[10px] font-bold tracking-wider uppercase text-gray-400 px-3 py-1 bg-gray-950/60 rounded-full border border-gray-850">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--card-glow-color)] transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-sky-400 font-semibold mb-4 text-sm tracking-wide">
                  {cert.issuer}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  {cert.description}
                </p>

                {/* Styled link buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-800/60 mt-auto">
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-950/50 border border-gray-805 text-gray-300 text-xs font-bold rounded-xl hover:bg-gray-950 hover:text-white hover:border-gray-700 transition-all duration-300 text-center flex-1 shadow-sm"
                  >
                    View PDF
                  </a>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-white text-xs font-bold rounded-xl transition-all duration-300 text-center flex-1 shadow-md hover:scale-[1.02] active:scale-95"
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
      </motion.div>
    </section>
  );
};

export default Certifications;
