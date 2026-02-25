// src/pages/Team.js (or Banner.jsx)
import React from 'react';
import { motion } from 'framer-motion';
import spark from '../assets/images/white spark.png'; 

const Banner = ({ startText, text, BannerImage }) => {
  return (
    <section className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
            src={BannerImage} 
            alt={`${startText} ${text}`} 
            className="w-full h-full object-cover object-center" 
        />
        {/* Darkens the image for text readability */}
        <div className="absolute inset-0 bg-[#212121]/70 mix-blend-multiply"></div>
        {/* Seamless gradient fade into the page background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#212121] via-[#212121]/40 to-transparent"></div>
      </div>

      {/* Animated Content */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-4 mt-10"
      >
        <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white flex items-center justify-center gap-3 drop-shadow-lg"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          <span className="text-[#F7941D]">{startText}</span> {text}
          <img src={spark} alt="Spark" className="w-10 md:w-14 h-auto animate-pulse" />
        </h1>
      </motion.div>

    </section>
  );
};

export default Banner;