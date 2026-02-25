import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function AccordionItem({ title, children, isOpen, onClick }) {
  return (
    <div 
      className={`mb-5 rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen 
          ? 'bg-[#2A2A2A] border-[#F7941D]/40 shadow-[0_10px_30px_rgba(247,148,29,0.15)]' 
          : 'bg-[#1A1A1A] border-white/5 hover:border-white/20 hover:bg-[#252525]'
      }`}
    >
      <button 
        className="w-full flex justify-between items-center p-6 md:p-8 text-left focus:outline-none group" 
        onClick={onClick}
      >
        {/* Question Title */}
        <span 
          className={`text-lg md:text-xl font-bold pr-6 transition-colors duration-300 ${
            isOpen ? 'text-[#F7941D]' : 'text-white group-hover:text-gray-200'
          }`}
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {title}
        </span>
        
        {/* Custom Animated Chevron Icon */}
        <div 
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'bg-[#F7941D]/10 text-[#F7941D] rotate-180' : 'bg-white/5 text-gray-400 group-hover:bg-white/10 group-hover:text-white'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Framer Motion for smooth height calculation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div 
              className="px-6 pb-6 md:px-8 md:pb-8 pt-0 text-gray-300 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function AccordionCourse({ items }) {
  // Sets the first accordion item (index 0) to be open by default
  const [openIndex, setOpenIndex] = useState(0); 

  // Defensive check in case items array is undefined or empty
  if (!items || items.length === 0) return null;

  const toggleItem = (index) => {
    // If the clicked item is already open, close it (set to null). Otherwise, open it.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.question} // Mapped to the specific API data structure
          isOpen={openIndex === index}
          onClick={() => toggleItem(index)}
        >
          {item.answer} {/* Mapped to the specific API data structure */}
        </AccordionItem>
      ))}
    </div>
  );
}