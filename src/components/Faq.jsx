import React from 'react';
import { motion } from 'framer-motion';
import { Accordion } from './Accordion';
import spark from '../assets/images/spark.png';
import arrow from '../assets/images/arrow.png';

const faqItems = [
  {
    title: "What courses do you offer at Digital World Tech Academy?",
    content: "We offer a wide range of courses including Web Development, Data Science, UX Design, Cybersecurity, Mobile Development, and Cloud Computing."
  },
  {
    title: "Can I learn online or do I have to attend physically?",
    content: "You can choose to learn online from anywhere in the world or attend onsite classes at any of our three branches in Ikorodu — Agric, Benson, and Garage. The choice is yours!",
  },
  {
    title: "Do I need a tech background to enroll?",
    content: "Not at all! Most of our courses are beginner-friendly, and our instructors provide step-by-step guidance to help you build confidence and skill from the ground up."
  },
  {
    title: "How long do the courses take to complete?",
    content: "Most courses run between 4 to 12, Max 24 weeks, depending on the course and whether you choose a weekday or weekend schedule."
  },
  {
    title: "Do you offer job support after training?",
    content: "Yes, we provide career support, including CV polishing, portfolio reviews, mentorship, and guidance on internship or job placement opportunities."
  },
  {
    title: "How many students are in a class?",
    content: "We keep our class sizes small, typically 5 to 15 students per batch, to ensure everyone gets personal attention and mentorship."
  },
  {
    title: "How can I enroll and what are the requirements?",
    content: "You can enroll online via our website or walk into any of our Ikorodu branches. All you need is basic computer knowledge, commitment to learning, and access to a laptop for most courses."
  }
];

function FAQ() {
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
          <Accordion items={faqItems} />
        </motion.div>

        {/* Decorative Arrow */}
        <div className="mt-12 flex justify-center lg:justify-start pl-10">
            <motion.img 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                src={arrow} 
                alt="Arrow" 
                className="w-16 h-16 md:w-24 md:h-24 drop-shadow-[0_0_10px_rgba(247,148,29,0.3)] opacity-70 transform rotate-12" 
            />
        </div>

      </div>
    </section>
  );
}

export default FAQ;