import React from 'react';
import { motion } from 'framer-motion';
import spark from '../../assets/images/spark.png';
import arrow from '../../assets/images/arrow.png';
import { AccordionCourse } from "./AccordionCourse";

function FAQMAIN({ data }) {
  // Defensive check in case data is passed but is empty
  if (!data || data.length === 0) return null;

  return (
    <section className="relative w-full py-20 lg:py-32 bg-[#212121] overflow-hidden border-t border-white/5">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#F7941D] opacity-[0.03] blur-[150px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white inline-flex items-center gap-4 relative"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Frequently Asked <br className="md:hidden" />
            <span className="text-[#F7941D] relative ml-2 md:ml-0">
              Questions
              <img src={spark} alt="Spark" className="absolute -top-6 -right-10 w-8 h-8 md:w-12 md:h-12 animate-pulse" />
            </span>
          </motion.h2>
        </div>

        {/* Accordion Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative z-20"
        >
          {/* Your custom Accordion mapped to the specific course data */}
          <AccordionCourse items={data} />
        </motion.div>

        {/* Decorative Arrow */}
        <div className="mt-12 flex justify-center lg:justify-start pl-10">
            <motion.img 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                src={arrow} 
                alt="Arrow decoration" 
                className="w-16 h-16 md:w-24 md:h-24 drop-shadow-[0_0_10px_rgba(247,148,29,0.3)] opacity-70 transform rotate-12" 
            />
        </div>

      </div>
    </section>
  );
}

export default FAQMAIN;