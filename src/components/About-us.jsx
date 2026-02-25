import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/images/about-image.png'; 
import arrow from '../assets/images/arrow.png'; 
import spark from '../assets/images/spark.png'; 

function About() {
    // Framer Motion Variants for smooth scrolling animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 80, damping: 20 } }
    };

    const imageVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 80, damping: 20 } }
    };

    return (
        <section className="relative w-full py-16 lg:py-24 bg-[#212121] overflow-hidden">
            
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#F7941D] opacity-[0.03] blur-[150px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16 relative">
                    <motion.h2 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white inline-flex items-center gap-4 relative"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                        About <span className="text-[#F7941D] relative">
                            Us
                            {/* Spark Decoration positioned relative to the word "Us" */}
                            <img src={spark} alt="Spark" className="absolute -top-5 -right-8 w-6 h-6 md:w-10 md:h-10 animate-pulse" />
                        </span>
                    </motion.h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    
                    {/* Left Column: Image with Premium Styling */}
                    <motion.div 
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative w-full max-w-lg mx-auto lg:mx-0"
                    >
                        {/* Orange offset border effect */}
                        <div className="absolute inset-0 border-2 border-[#F7941D]/30 rounded-3xl transform translate-x-4 translate-y-4"></div>
                        
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm p-2 z-10">
                            <img 
                                src={aboutImage} 
                                alt="Digital World Tech Academy Campus" 
                                className="w-full h-auto object-cover rounded-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        
                        {/* Arrow Decoration */}
                        <img 
                            src={arrow} 
                            alt="Arrow pointing to content" 
                            className="absolute -bottom-10 -right-10 w-20 h-20 md:w-28 md:h-28 z-20 hidden lg:block drop-shadow-[0_0_10px_rgba(247,148,29,0.5)]" 
                        />
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col gap-6"
                    >
                        <motion.h3 
                            variants={textVariants}
                            className="text-2xl md:text-3xl font-bold text-white leading-tight"
                            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                            Empowering the Next Generation of Tech Talent <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7941D] to-[#FFC371]">
                                Online and Onsite in Ikorodu
                            </span>
                        </motion.h3>

                        <motion.p variants={textVariants} className="text-gray-300 text-base leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Digital World Tech Academy is a fast-growing technology training institute committed to helping individuals
                            launch and grow successful careers in the digital space. Founded in the heart of Ikorodu, Lagos, we proudly
                            serve our community through a hybrid learning model, combining flexible online programs with offline,
                            in-person classes for hands-on impact.
                        </motion.p>

                        <motion.p variants={textVariants} className="text-gray-300 text-base leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                            With physical branches strategically located across Ikorodu, we ensure that premium tech education is accessible, practical, and affordable for everyone—from students and jobseekers to business owners and aspiring developers.
                        </motion.p>

                        {/* Visual Location Badges instead of plain text */}
                        <motion.div variants={textVariants} className="flex flex-wrap items-center gap-4 mt-2 mb-4">
                            <span className="px-5 py-2 rounded-full border border-[#F7941D]/50 bg-[#F7941D]/10 text-[#F7941D] font-bold text-sm tracking-wide shadow-[0_0_15px_rgba(247,148,29,0.15)]">📍 Agric Branch</span>
                            <span className="px-5 py-2 rounded-full border border-[#F7941D]/50 bg-[#F7941D]/10 text-[#F7941D] font-bold text-sm tracking-wide shadow-[0_0_15px_rgba(247,148,29,0.15)]">📍 Benson Branch</span>
                            <span className="px-5 py-2 rounded-full border border-[#F7941D]/50 bg-[#F7941D]/10 text-[#F7941D] font-bold text-sm tracking-wide shadow-[0_0_15px_rgba(247,148,29,0.15)]">📍 Garage Branch</span>
                        </motion.div>

                        <motion.p variants={textVariants} className="text-gray-400 text-sm leading-relaxed border-l-4 border-[#F7941D] pl-6 mt-2 italic" style={{ fontFamily: "'Inter', sans-serif" }}>
                            "At Digital World Tech Academy, we believe that location or background should never limit opportunity. Whether
                            you're learning from home or walking into one of our centers, you're stepping into a future built
                            on knowledge, innovation, and digital excellence."
                        </motion.p>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;