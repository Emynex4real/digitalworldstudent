import React from "react";
import { motion } from "framer-motion";

const features = [
    {
      icon: "🚀",
      title: "Engaging & Interactive Learning",
      description: "Work on real-world projects, collaborate with peers, and enhance your skills through teamwork.",
    },
    {
      icon: "⚡",
      title: "Hands-on & Practical Courses",
      description: "Learn by doing with engaging exercises, real challenges, and interactive lessons that keep you motivated.",
    },
    {
      icon: "♟",
      title: "Immersive & Enriching Environment",
      description: "Join exclusive workshops, network with experts, and develop skills that set you apart in your career.",
    },
    {
      icon: "🔥",
      title: "Personalized & Flexible Learning",
      description: "Choose between live sessions and on-demand lessons, set your own pace, and optimize your learning experience.",
    },
];

const LearningExperience = ({ advisorForm }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
    };

    return (
      <section className="relative w-full py-20 lg:py-32 bg-[#212121] border-t border-white/5 overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F7941D] opacity-[0.03] blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            {/* Header */}
            <div className="mb-16">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-white mb-6"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                    Discover a <span className="text-[#F7941D]">Smarter Way</span> to Learn
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 text-lg max-w-2xl mx-auto"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                >
                    Unlock the full potential of modern education with our innovative, hands-on approach to tech training.
                </motion.p>
            </div>

            {/* Features Grid */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16"
            >
                {features.map((feature, index) => (
                    <motion.div 
                        key={index} 
                        variants={cardVariants}
                        whileHover={{ y: -10 }}
                        className="group bg-[#1A1A1A] border border-white/5 rounded-3xl p-8 flex flex-col items-center text-center hover:bg-[#252525] hover:border-[#F7941D]/30 transition-all duration-300 shadow-lg"
                    >
                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-3xl mb-6 group-hover:bg-[#F7941D]/10 group-hover:scale-110 transition-all duration-300 border border-white/10 group-hover:border-[#F7941D]/30 shadow-[0_0_15px_rgba(247,148,29,0)] group-hover:shadow-[0_0_20px_rgba(247,148,29,0.2)]">
                            {feature.icon}
                        </div>
                        <h3 
                            className="text-xl font-bold text-white mb-3 group-hover:text-[#F7941D] transition-colors duration-300"
                            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                            {feature.title}
                        </h3>
                        <p 
                            className="text-gray-400 text-sm leading-relaxed"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
            >
                <button 
                    onClick={advisorForm} 
                    className="inline-block px-10 py-4 bg-[#F7941D] text-[#1A1A1A] text-lg font-bold rounded-full shadow-[0_0_20px_rgba(247,148,29,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:bg-white transition-all duration-300 hover:-translate-y-1"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                    Contact Course Advisor
                </button>
            </motion.div>

        </div>
      </section>
    );
};

export default LearningExperience;