// src/About.jsx (or WhySection.jsx)
import React from 'react';
import { motion } from 'framer-motion';
import arrow from '../../assets/images/arrow.png'; 
import spark from '../../assets/images/spark.png'; 
import onsiteIcon from '../../assets/images/onsite.png'; 
import onlineIcon from '../../assets/images/online.png'; 
import tutorsIcon from '../../assets/images/tutors.png'; 
import internshipIcon from '../../assets/images/internship.png'; 
import certificationIcon from '../../assets/images/certification.png'; 
import pricingIcon from '../../assets/images/pricing.png'; 

function WhySection() {
    const features = [
        { icon: onsiteIcon, title: "Onsite Learning" },
        { icon: onlineIcon, title: "Online Learning" },
        { icon: tutorsIcon, title: "Qualified Tutors" },
        { icon: internshipIcon, title: "Internship Opportunities" },
        { icon: certificationIcon, title: "Certification" },
        { icon: pricingIcon, title: "Affordable Pricing" }
    ];

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
        <section className="relative w-full py-20 lg:py-28 bg-[#212121] overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Section Header */}
                <div className="text-center mb-16 relative">
                    <motion.h2 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white inline-flex items-center gap-4 relative"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                        Why Choose <span className="text-[#F7941D] relative">
                            DWTA
                            <img src={spark} alt="Spark" className="absolute -top-6 -right-10 w-8 md:w-12 h-auto animate-pulse" />
                        </span>
                    </motion.h2>
                </div>
                
                {/* Feature Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index} 
                            variants={cardVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="flex flex-col items-center text-center p-8 rounded-[2rem] bg-[#2A2A2A]/80 border border-white/10 backdrop-blur-md shadow-lg hover:border-[#F7941D]/50 hover:shadow-[0_10px_30px_rgba(247,148,29,0.15)] transition-all duration-300 group"
                        >
                            {/* Icon Wrapper */}
                            <div className="w-16 h-16 md:w-20 md:h-20 mb-6 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-[#F7941D]/10 group-hover:border-[#F7941D]/30 transition-colors duration-300">
                                <img src={feature.icon} alt={feature.title} className="w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            
                            <p 
                                className="text-lg md:text-xl font-bold text-white group-hover:text-[#F7941D] transition-colors duration-300"
                                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                            >
                                {feature.title}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-16 flex justify-center lg:justify-end pr-8">
                    <img src={arrow} alt="Arrow" className="w-16 md:w-20 drop-shadow-[0_0_10px_rgba(247,148,29,0.3)] opacity-70 transform rotate-12" />
                </div>
            </div>
        </section>
    );
}

export default WhySection;