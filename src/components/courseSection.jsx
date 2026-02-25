import React from 'react';
import { motion } from 'framer-motion';
import spark from '../assets/images/spark.png';
import arrow from '../assets/images/arrow.png'; 
import CourseCards from './Course';

function CourseSection() {
    return (
        <section className="relative w-full py-20 lg:py-32 bg-[#212121] overflow-hidden border-t border-white/5">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F7941D] opacity-[0.03] blur-[150px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-20 relative">
                    <motion.h2 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-bold text-white inline-flex items-center gap-4 relative"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                        Our <span className="text-[#F7941D] relative">
                            Courses
                            {/* Spark Decoration */}
                            <img src={spark} alt="Spark" className="absolute -top-6 -right-10 w-8 h-8 md:w-12 md:h-12 animate-pulse" />
                        </span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        Discover our most sought-after programs, carefully curated to build your tech career from the ground up.
                    </motion.p>
                </div>

                {/* Course Cards Component */}
                <CourseCards />

                {/* Decorative Arrow */}
                <div className="mt-12 flex justify-center lg:justify-end pr-10">
                    <motion.img 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        src={arrow} 
                        alt="Arrow" 
                        className="w-20 h-20 md:w-28 md:h-28 drop-shadow-[0_0_10px_rgba(247,148,29,0.3)] opacity-70" 
                    />
                </div>
            </div>
        </section>
    );
}

export default CourseSection;