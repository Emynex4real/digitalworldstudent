import React from "react";
import { motion } from "framer-motion";

const Steps = ({ timeline }) => {
    // Defensive check: If there's no timeline data, don't render an empty section
    if (!timeline || timeline.length === 0) return null;

    // Framer Motion Variants for smooth staggered entry
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
    };

    return (
        <section className="relative w-full py-20 lg:py-32 bg-[#212121] border-t border-white/5 overflow-hidden">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#F7941D] opacity-[0.03] blur-[150px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Header */}
                <div className="text-center mb-16 lg:mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                        Learn from <span className="text-[#F7941D]">Industry Leaders</span> in Tech
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        Our mentors are experienced professionals, passionate about helping you build a successful career through this step-by-step curriculum.
                    </motion.p>
                </div>

                {/* Timeline Container */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative border-l-2 border-white/10 ml-4 md:ml-8"
                >
                    {timeline.map((item, index) => (
                        <motion.div 
                            key={item.id || index} 
                            variants={cardVariants}
                            className="relative pl-8 md:pl-12 mb-12 last:mb-0 group"
                        >
                            {/* Glowing Timeline Node & Checkmark */}
                            <div className="absolute -left-[17px] top-6 w-8 h-8 rounded-full bg-[#1A1A1A] border-2 border-[#F7941D] flex items-center justify-center shadow-[0_0_15px_rgba(247,148,29,0.4)] group-hover:bg-[#F7941D] group-hover:scale-110 transition-all duration-300">
                                {/* SVG Checkmark (Replaces the check.png) */}
                                <svg className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>

                            {/* Content Card */}
                            <div className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-[#252525] hover:border-[#F7941D]/30 transition-all duration-300 shadow-lg hover:-translate-y-1">
                                
                                {/* Meta Row: Duration Pill */}
                                {item.duration && (
                                    <div className="mb-4">
                                        <span 
                                            className="inline-block px-3 py-1 bg-[#F7941D]/10 text-[#F7941D] text-xs font-bold uppercase tracking-wider rounded-md border border-[#F7941D]/20"
                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                        >
                                            {item.duration}
                                        </span>
                                    </div>
                                )}

                                {/* Title */}
                                <h3 
                                    className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#F7941D] transition-colors duration-300"
                                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                                >
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p 
                                    className="text-gray-400 text-base leading-relaxed"
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                    {item.description}
                                </p>
                                
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Steps;