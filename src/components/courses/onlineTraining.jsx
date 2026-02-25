import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import onlineImg from "../../assets/images/ChatGPT Image.jpg";

const OnlineTraining = ({ title, advisor }) => {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <section className="relative w-full py-20 lg:py-32 bg-[#212121] border-t border-white/5 overflow-hidden text-center">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#F7941D] opacity-[0.03] blur-[150px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Learn <span className="text-[#F7941D]">{title}</span> <br className="hidden md:block" /> from anywhere in the world
        </motion.h2>
        
        <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mb-12"
            style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Join our immersive online training program and master front-end and back-end technologies from the comfort of your home.
        </motion.p>

        {/* Video Thumbnail Frame */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.3 }}
            className="relative w-full max-w-4xl aspect-video rounded-[2rem] overflow-hidden cursor-pointer group shadow-2xl border border-white/10 bg-[#1A1A1A] mb-12"
            onClick={toggleVideo}
        >
          <img
            src={onlineImg}
            alt="Online Training Session"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#212121]/50 group-hover:bg-[#212121]/30 transition-colors duration-500 backdrop-blur-[2px] group-hover:backdrop-blur-0"></div>

          {/* Glowing Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#F7941D]/90 backdrop-blur-md rounded-full flex items-center justify-center pl-2 shadow-[0_0_30px_rgba(247,148,29,0.5)] group-hover:scale-110 group-hover:bg-[#F7941D] transition-all duration-300">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-[#1A1A1A]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Features Pill Badges */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <span className="px-5 py-2.5 bg-[#1A1A1A] border border-white/10 text-gray-300 font-semibold rounded-full shadow-sm" style={{ fontFamily: "'Inter', sans-serif" }}>🎓 Expert Mentors</span>
          <span className="px-5 py-2.5 bg-[#1A1A1A] border border-white/10 text-gray-300 font-semibold rounded-full shadow-sm" style={{ fontFamily: "'Inter', sans-serif" }}>⏰ Flexible Learning</span>
          <span className="px-5 py-2.5 bg-[#1A1A1A] border border-white/10 text-gray-300 font-semibold rounded-full shadow-sm" style={{ fontFamily: "'Inter', sans-serif" }}>📹 Lifetime Access to Recordings</span>
        </motion.div>

        {/* CTA Button */}
        <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            onClick={advisor} 
            className="px-10 py-4 bg-transparent border border-[#F7941D] text-[#F7941D] hover:bg-[#F7941D] hover:text-[#1A1A1A] text-lg font-bold rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(247,148,29,0.1)] hover:shadow-[0_0_25px_rgba(247,148,29,0.4)]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
            Contact Course Advisor
        </motion.button>

      </div>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#212121]/90 backdrop-blur-lg p-4 sm:p-8"
            onClick={toggleVideo}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
              onClick={(e) => e.stopPropagation()} 
            >
              <button 
                className="absolute top-4 right-4 z-50 w-10 h-10 bg-[#212121]/60 hover:bg-[#F7941D] text-white rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-md border border-white/20"
                onClick={toggleVideo}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/JxF-Fh_o06A?si=B5SM-kvCXQ374vmA&autoplay=1"
                title="Online Training Video"
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
};

export default OnlineTraining;