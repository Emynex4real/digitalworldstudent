import React from "react";
import { motion } from "framer-motion";
import laptop from "../../assets/images/laptop_mac.png";
import align from "../../assets/images/align.png";
import calender from "../../assets/images/calendar.png";
import timeAuto from "../../assets/images/time_auto.png";

const CourseCard = ({ title, description, duration, schedule, format, flexibility, imageUrl, advisor, handleBrochure }) => {
  
  // Framer Motion Variants
  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 30 },
    visible: { opacity: 1, scale: 1, x: 0, transition: { type: "spring", stiffness: 80, damping: 20, delay: 0.2 } }
  };

  return (
    <section className="relative w-full pt-28 pb-20 lg:pt-40 lg:pb-32 bg-[#212121] overflow-hidden">
      
      {/* Ambient Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#F7941D] opacity-10 blur-[120px] pointer-events-none rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#F7941D] opacity-[0.05] blur-[100px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* --- Left Column: Content (Spans 7 columns) --- */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col"
          >
            {/* Title */}
            <motion.h1 
              variants={textVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] mb-6 tracking-tight drop-shadow-sm"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {title}
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              variants={textVariants}
              className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {description}
            </motion.p>
            
            {/* Action Buttons */}
            <motion.div variants={textVariants} className="flex flex-col sm:flex-row items-center gap-5 mb-12">
              <button 
                onClick={handleBrochure} 
                className="w-full sm:w-auto px-8 py-4 bg-[#F7941D] text-[#1A1A1A] text-base font-bold rounded-full shadow-[0_0_20px_rgba(247,148,29,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:bg-white transition-all duration-300 hover:-translate-y-1"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Download the Brochure
              </button>
              <button 
                onClick={advisor} 
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white text-base font-bold rounded-full hover:bg-white/10 hover:border-white transition-all duration-300"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Contact an Advisor
              </button>
            </motion.div>

            {/* Course Details Grid (Replaces the old ul list) */}
            <motion.div variants={textVariants} className="grid grid-cols-2 gap-4 border-t border-white/10 pt-8">
              
              {/* Duration Card */}
              <div className="flex items-center gap-4 bg-[#1A1A1A] p-4 rounded-2xl border border-white/5 hover:border-[#F7941D]/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#F7941D]/10 flex items-center justify-center flex-shrink-0">
                  <img src={timeAuto} alt="Duration" className="w-5 h-5 object-contain opacity-80" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>Duration</p>
                  <p className="text-white text-sm sm:text-base font-semibold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{duration}</p>
                </div>
              </div>

              {/* Schedule Card */}
              <div className="flex items-center gap-4 bg-[#1A1A1A] p-4 rounded-2xl border border-white/5 hover:border-[#F7941D]/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#F7941D]/10 flex items-center justify-center flex-shrink-0">
                  <img src={calender} alt="Schedule" className="w-5 h-5 object-contain opacity-80" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>Schedule</p>
                  <p className="text-white text-sm sm:text-base font-semibold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{schedule}</p>
                </div>
              </div>

              {/* Format Card */}
              <div className="flex items-center gap-4 bg-[#1A1A1A] p-4 rounded-2xl border border-white/5 hover:border-[#F7941D]/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#F7941D]/10 flex items-center justify-center flex-shrink-0">
                  <img src={laptop} alt="Format" className="w-5 h-5 object-contain opacity-80" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>Format</p>
                  <p className="text-white text-sm sm:text-base font-semibold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{format}</p>
                </div>
              </div>

              {/* Flexibility Card */}
              <div className="flex items-center gap-4 bg-[#1A1A1A] p-4 rounded-2xl border border-white/5 hover:border-[#F7941D]/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#F7941D]/10 flex items-center justify-center flex-shrink-0">
                  <img src={align} alt="Flexibility" className="w-5 h-5 object-contain opacity-80" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>Flexible</p>
                  <p className="text-white text-sm sm:text-base font-semibold line-clamp-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{flexibility}</p>
                </div>
              </div>

            </motion.div>

          </motion.div>

          {/* --- Right Column: Image (Spans 5 columns) --- */}
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 relative w-full max-w-lg mx-auto lg:mx-0 mt-8 lg:mt-0"
          >
            {/* Offset decorative border */}
            <div className="absolute inset-0 border-2 border-[#F7941D]/30 rounded-[2.5rem] transform translate-x-4 translate-y-4 hidden sm:block"></div>
            
            {/* Image Container */}
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-[#1A1A1A] p-2 z-10">
              <div className="rounded-[2rem] overflow-hidden bg-gray-800 aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                <img 
                  src={imageUrl} 
                  alt={title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/600x800?text=Course+Image' }}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CourseCard;