import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiBriefcase, FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';
import { useProgrammaticScroll } from '../hooks/useProgrammaticScroll';
import internCert from '../assets/459CS23022.pdf';

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isProgrammatic = useProgrammaticScroll();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [40, 0, 0, -40]);

  const opacityVal = isProgrammatic ? 1 : opacity;
  const yVal = isProgrammatic ? 0 : y;

  const education = [
    {
      title: "B.E. in Artificial Intelligence & Machine Learning",
      institution: "Kishkinda University",
      period: "Present",
      description: "Focusing on advanced algorithms, neural networks, deep learning, and data science principles.",
      tags: ["Python", "Neural Networks", "Deep Learning", "Data Structures"],
      location: "Koppal, Karnataka"
    },
    {
      title: "Diploma in Computer Science & Engineering",
      institution: "Sanjay Gandhi Polytechnic, Ballari",
      period: "Graduated",
      description: "Built a strong foundation in core computer science subjects including programming, databases, and computer networks.",
      tags: ["Python", "Java", "DBMS", "OS", "Networking"],
      location: "Ballari, Karnataka",
      grade: "Distinction"
    }
  ];

  const experience = [
    {
      title: "Java Full Stack Intern",
      institution: "Techmiya Solutions India Pvt Ltd",
      period: "Jan 2026 - Apr 2026",
      description: "Served as a Java Full Stack Intern, contributing to software development solutions. Gained hands-on experience in the software development lifecycle, web applications, and database management.",
      tags: ["Java", "Spring Boot", "React", "SQL", "REST APIs"],
      location: "Bengaluru, Karnataka (Remote)",
      certificate: internCert
    }
  ];

  return (
    <section ref={containerRef} id="experience" className="py-24 relative">
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
            Journey & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-sky-400">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 relative">
          {/* Education Column */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-4 mb-10">
              <div className="relative p-3 bg-sky-500/10 border border-sky-500/30 rounded-xl text-sky-400 shadow-[0_0_15px_rgba(14,165,233,0.15)] overflow-hidden group">
                <FiAward size={24} className="relative z-10 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white tracking-wide">Education</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-0.5">Academic Journey</p>
              </div>
            </div>

            {/* Left timeline container */}
            <div className="relative border-l border-gray-800/80 ml-4 pl-8 space-y-12">
              {/* Highlight gradient overlay on the border */}
              <div className="absolute left-0 top-2 bottom-6 w-[1px] bg-gradient-to-b from-sky-500 via-sky-500/50 to-transparent" />

              {education.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-120px 0px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative group"
                >
                  {/* Pulsing Dot */}
                  <div className="absolute -left-[41px] top-1.5 z-10 flex items-center justify-center">
                    <span className="absolute inline-flex h-6 w-6 rounded-full bg-sky-400 opacity-20 animate-ping" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-sky-500 border-2 border-gray-950 shadow-[0_0_10px_rgba(14,165,233,0.8)]" />
                  </div>

                  {/* Card */}
                  <div className="bg-gray-900/40 backdrop-blur-md border border-gray-800/80 p-6 rounded-2xl transition-all duration-300 hover:border-sky-500/40 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] group relative overflow-hidden">
                    {/* Radial hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    {/* Diagonal sweep shine */}
                    <div className="shine-effect" />

                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/20">
                        <FiCalendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      {item.grade && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.05)]">
                          Grade: {item.grade}
                        </span>
                      )}
                    </div>

                    <h4 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors duration-300 mt-2">
                      {item.title}
                    </h4>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-400 font-medium text-sm mt-1.5 mb-4">
                      <span>{item.institution}</span>
                      <span className="text-gray-600 hidden xs:inline">•</span>
                      <span className="inline-flex items-center gap-1">
                        <FiMapPin className="w-3.5 h-3.5 text-sky-400/80" />
                        {item.location}
                      </span>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed mb-5">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-md bg-gray-950/60 text-gray-400 border border-gray-800/80 group-hover:border-sky-500/20 group-hover:text-sky-300 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-4 mb-10">
              <div className="relative p-3 bg-orange-500/10 border border-orange-500/30 rounded-xl text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.15)] overflow-hidden group">
                <FiBriefcase size={24} className="relative z-10 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white tracking-wide">Experience</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-0.5">Professional Career</p>
              </div>
            </div>

            {/* Right timeline container */}
            <div className="relative border-l border-gray-800/80 ml-4 pl-8 space-y-12">
              {/* Highlight gradient overlay on the border */}
              <div className="absolute left-0 top-2 bottom-6 w-[1px] bg-gradient-to-b from-orange-500 via-orange-500/50 to-transparent" />

              {experience.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-120px 0px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative group"
                >
                  {/* Pulsing Dot */}
                  <div className="absolute -left-[41px] top-1.5 z-10 flex items-center justify-center">
                    <span className="absolute inline-flex h-6 w-6 rounded-full bg-orange-400 opacity-20 animate-ping" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-500 border-2 border-gray-950 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
                  </div>

                  {/* Card */}
                  <div className="bg-gray-900/40 backdrop-blur-md border border-gray-800/80 p-6 rounded-2xl transition-all duration-300 hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] group relative overflow-hidden">
                    {/* Radial hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    {/* Diagonal sweep shine */}
                    <div className="shine-effect" />

                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-orange-500/10 text-orange-400 border border-orange-500/20">
                        <FiCalendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300 mt-2">
                      {item.title}
                    </h4>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-400 font-medium text-sm mt-1.5 mb-4">
                      <span>{item.institution}</span>
                      <span className="text-gray-600 hidden xs:inline">•</span>
                      <span className="inline-flex items-center gap-1">
                        <FiMapPin className="w-3.5 h-3.5 text-orange-400/80" />
                        {item.location}
                      </span>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed mb-5">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-md bg-gray-950/60 text-gray-400 border border-gray-800/80 group-hover:border-orange-500/20 group-hover:text-orange-300 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {item.certificate && (
                      <div className="pt-4 border-t border-gray-800/60">
                        <a
                          href={item.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-orange-400 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 hover:border-orange-500/50 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.05)] hover:shadow-[0_0_15px_rgba(249,115,22,0.15)] group/btn"
                        >
                          <span>View Certificate</span>
                          <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">&rarr;</span>
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
