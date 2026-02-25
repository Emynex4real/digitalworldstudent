import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function CTASection() {
    // Entry animation for the main CTA banner
    const bannerVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 40 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 20 }
        }
    };

    // Continuous floating animation for the decorative doodles
    const floatingVariants = {
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const floatingVariantsReverse = {
        animate: {
            y: [0, 15, 0],
            transition: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section className="relative w-full py-20 lg:py-32 bg-[#212121] overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Main CTA Banner Container */}
                <motion.div 
                    variants={bannerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative w-full bg-gradient-to-br from-[#F7941D] to-[#FFB75E] rounded-[3rem] p-10 md:p-16 lg:p-24 text-center overflow-hidden shadow-[0_20px_50px_rgba(247,148,29,0.3)]"
                >
                    {/* Ambient Internal Background Patterns */}
                    <div className="absolute top-[-50%] left-[-10%] w-[300px] h-[300px] bg-white opacity-10 rounded-full blur-[80px] pointer-events-none"></div>
                    <div className="absolute bottom-[-50%] right-[-10%] w-[400px] h-[400px] bg-white opacity-10 rounded-full blur-[100px] pointer-events-none"></div>

                    {/* Decorative Doodle: Angle (Top Left) */}
                    <motion.div 
                        variants={floatingVariants}
                        animate="animate"
                        className="absolute top-8 left-8 md:top-12 md:left-16 w-16 h-16 md:w-24 md:h-24 opacity-80 pointer-events-none hidden sm:block"
                    >
                        <img src="/images/Group 1321314833.png" alt="" className="w-full h-full object-contain" />
                    </motion.div>

                    {/* Decorative Doodle: Spring (Bottom Right) */}
                    <motion.div 
                        variants={floatingVariantsReverse}
                        animate="animate"
                        className="absolute bottom-8 right-8 md:bottom-12 md:right-16 w-16 h-16 md:w-24 md:h-24 opacity-80 pointer-events-none hidden sm:block"
                    >
                        <img src="/images/Group 1321314829.png" alt="" className="w-full h-full object-contain" />
                    </motion.div>

                    {/* Content Wrapper */}
                    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                        
                        {/* Heading */}
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-6 drop-shadow-sm"
                            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                            Ready to Upgrade Your Skills and <br className="hidden md:block" />
                            {/* Translated your .change-black to Tailwind */}
                            <span className="text-[#212121]">Launch Your Tech Career?</span>
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-[#212121]/80 text-lg md:text-xl font-medium mb-10 max-w-xl mx-auto"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Don't wait — your tech journey starts now. Join our next cohort and turn your passion into a profession.
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {/* Converted the button into a functional React Router Link */}
                            <Link 
                                to="/contact" 
                                className="inline-block px-10 py-4 md:px-12 md:py-5 bg-[#212121] text-white text-base md:text-lg font-bold rounded-full shadow-xl hover:bg-gray-900 transition-colors duration-300"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                Make an Enquiry Now
                            </Link>
                        </motion.div>

                    </div>
                </motion.div>
                
            </div>
        </section>
    );
}

export default CTASection;