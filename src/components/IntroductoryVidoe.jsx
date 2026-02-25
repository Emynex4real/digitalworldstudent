import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroductoryVideo() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#212121] overflow-hidden border-t border-white/5">
      
      {/* Ambient Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#F7941D] opacity-[0.03] blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 lg:mb-12 gap-8 text-center md:text-left">
          
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white flex items-center justify-center md:justify-start gap-4 relative"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Introductory <span className="text-[#F7941D] relative">
              Video
              {/* Spark Icon */}
              <img src="./images/video left icon.png" alt="" className="absolute -top-3 -right-7 w-6 h-6 md:w-8 md:h-8 animate-pulse" />
            </span>
          </motion.h2>

          {/* Arrow Decoration */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden md:block"
          >
            <img src="./images/onside arrow.png" alt="Arrow" className="w-24 h-auto drop-shadow-[0_0_10px_rgba(247,148,29,0.3)] opacity-80" />
          </motion.div>
        </div>

        {/* Video Thumbnail Frame */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="relative w-full aspect-video rounded-[2rem] overflow-hidden cursor-pointer group shadow-2xl border border-white/10 bg-[#2A2A2A]"
          onClick={() => setOpen(true)}
        >
          {/* Main Thumbnail Image */}
          <img 
            src="./images/main-img.png" 
            alt="Video Thumbnail" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          
          {/* Dark Overlay for better play button contrast */}
          <div className="absolute inset-0 bg-[#212121]/40 group-hover:bg-[#212121]/20 transition-colors duration-500 backdrop-blur-[2px] group-hover:backdrop-blur-0"></div>

          {/* Glowing Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-28 md:h-28 bg-[#F7941D]/90 backdrop-blur-md rounded-full flex items-center justify-center pl-2 md:pl-3 shadow-[0_0_30px_rgba(247,148,29,0.5)] group-hover:scale-110 group-hover:bg-[#F7941D] transition-all duration-300">
              {/* Play Icon SVG */}
              <svg className="w-8 h-8 md:w-12 md:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </motion.div>

      </div>

      {/* --- Fullscreen Video Modal --- */}
      {/* AnimatePresence allows components to animate out when they are removed from the React tree */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#212121]/90 backdrop-blur-lg p-4 sm:p-8"
            onClick={() => setOpen(false)}
          >
            {/* Inner Popup Container */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
              onClick={(e) => e.stopPropagation()} // Prevent clicking the video from closing the modal
            >
              {/* Close Button */}
              <button 
                className="absolute top-4 right-4 z-50 w-10 h-10 bg-[#212121]/60 hover:bg-[#F7941D] text-white rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-md border border-white/20"
                onClick={() => setOpen(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* YouTube iFrame with autoplay added */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/JxF-Fh_o06A?si=B5SM-kvCXQ374vmA&autoplay=1"
                title="Digital World Tech Academy Intro Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}