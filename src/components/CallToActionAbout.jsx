import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import aboutSpring from '../assets/images/About-Spring.png'

function CTASectionAbout () {
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"}) 
    }

    const floatingVariants = {
        animate: { y: [0, -15, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } }
    };

    const floatingVariantsReverse = {
        animate: { y: [0, 15, 0], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } }
    };

    return (
        <section className="relative w-full py-20 lg:py-32 bg-[#212121] overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="relative w-full bg-gradient-to-br from-[#F7941D] to-[#FFB75E] rounded-[3rem] p-10 md:p-16 lg:p-24 text-center overflow-hidden shadow-[0_20px_50px_rgba(247,148,29,0.3)]"
                >
                    {/* Ambient Glows */}
                    <div className="absolute top-[-50%] left-[-10%] w-[300px] h-[300px] bg-white opacity-10 rounded-full blur-[80px] pointer-events-none"></div>
                    <div className="absolute bottom-[-50%] right-[-10%] w-[400px] h-[400px] bg-white opacity-10 rounded-full blur-[100px] pointer-events-none"></div>

                    {/* Doodles */}
                    <motion.div variants={floatingVariants} animate="animate" className="absolute top-8 left-8 md:top-12 md:left-16 w-16 md:w-24 opacity-80 pointer-events-none hidden sm:block">
                        <img src="/images/Group 1321314833.png" alt="" className="w-full h-auto object-contain" />
                    </motion.div>

                    <motion.div variants={floatingVariantsReverse} animate="animate" className="absolute bottom-8 right-8 md:bottom-12 md:right-16 w-16 md:w-24 opacity-80 pointer-events-none hidden sm:block">
                        <img src={aboutSpring} alt="" className="w-full h-auto object-contain" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-6 drop-shadow-sm"
                            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                            Learn It. <span className="text-[#212121]">Earn</span> It. Live It.
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-[#212121]/80 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Digital World Tech Academy gives you the tools to master in-demand skills — from learning to business strategy — and start making money confidently.
                        </motion.p>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link 
                                to="/courses" 
                                onClick={scrollToTop}
                                className="inline-block px-10 py-4 md:px-12 md:py-5 bg-[#212121] text-white text-base md:text-lg font-bold rounded-full shadow-xl hover:bg-gray-900 transition-colors duration-300"
                                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                            >
                                Explore Courses Now
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
                
            </div>
        </section>
    )
};

export default CTASectionAbout;