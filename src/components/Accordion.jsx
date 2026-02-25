import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function AccordionItem({ title, children, isOpen, onClick }) {
  return (
    <div 
      className={`mb-4 rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen 
          ? 'bg-[#2A2A2A] border-[#F7941D]/40 shadow-[0_10px_30px_rgba(247,148,29,0.1)]' 
          : 'bg-[#2A2A2A]/40 border-white/10 hover:border-white/20 hover:bg-[#2A2A2A]/60'
      }`}
    >
      <button 
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none" 
        onClick={onClick}
      >
        <span 
          className={`text-lg md:text-xl font-semibold pr-4 transition-colors duration-300 ${
            isOpen ? 'text-[#F7941D]' : 'text-white'
          }`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {title}
        </span>
        
        {/* Custom Chevron Icon built with Tailwind and SVG */}
        <div 
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'bg-[#F7941D]/10 text-[#F7941D] rotate-180' : 'bg-white/5 text-gray-400'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Framer Motion handling the smooth height transition */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div 
              className="px-6 pb-6 text-gray-300 text-base md:text-lg leading-relaxed"
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

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0); // Set to 0 to have the first item open by default!

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onClick={() => toggleItem(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}