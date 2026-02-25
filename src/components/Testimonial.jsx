import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';

// Local Assets
import studentImg from '../assets/images/student.png'; 
import flowerRight from '../assets/images/flower-right.png'; 
import flowerLeft from '../assets/images/flower-left.png'; 
import arrow from '../assets/images/arrow.png'; 
import spark from '../assets/images/spark.png'; 
import quoteRight from "../assets/images/Vector.svg";
import quoteLeft from "../assets/images/Vector2.svg";

// Custom Hook
import useFetch from './useFetch';

function Testimonial() {
  const { data: testimonials, isPending, isError } = useFetch(`https://api.digitalworldtech.academy/fetchtestimony.php`);

  const testimonialLength = testimonials?.length || 0;
  const testimonialCenter = Math.floor(testimonialLength / 2);

  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#212121] overflow-hidden border-t border-white/5">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F7941D] opacity-[0.02] blur-[150px] pointer-events-none"></div>

      {/* Decorative Background Elements */}
      <img src={flowerLeft} alt="" className="absolute top-20 left-0 w-32 md:w-48 opacity-20 pointer-events-none" />
      <img src={flowerRight} alt="" className="absolute bottom-20 right-0 w-32 md:w-48 opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 relative">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white inline-flex items-center gap-4 relative z-20"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Testimonials from <br className="md:hidden" />
            <span className="text-[#F7941D] relative ml-2 md:ml-0">
              Students
              <img src={spark} alt="Spark" className="absolute -top-5 -right-8 w-6 h-6 md:w-10 md:h-10 animate-pulse" />
            </span>
          </motion.h2>
        </div>

        {/* --- Content Area --- */}
        <div className="relative max-w-lg mx-auto">
          
          {/* Arrow pointing to the slider */}
          <motion.img 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            src={arrow} 
            alt="Arrow" 
            className="absolute -left-16 md:-left-32 top-10 w-16 md:w-24 drop-shadow-[0_0_10px_rgba(247,148,29,0.3)] opacity-70 hidden sm:block z-0" 
          />

          {/* Loading State Skeleton */}
          {isPending && (
            <div className="w-full aspect-[3/4] md:aspect-square bg-white/5 animate-pulse rounded-[2.5rem] border border-white/10 shadow-2xl"></div>
          )}

          {/* Error State */}
          {isError && (
            <div className="text-center py-20 bg-white/5 rounded-[2.5rem] border border-white/10">
              <p className="text-red-400 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                Failed to load testimonials.
              </p>
            </div>
          )}

          {/* Main Swiper Slider */}
          {!isPending && !isError && testimonials && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Swiper
                effect={'cards'}
                grabCursor={true}
                navigation={true}
                initialSlide={testimonialCenter}
                centeredSlides={true}
                modules={[EffectCards, Navigation]}
                className="w-full aspect-[3/4] md:aspect-square drop-shadow-2xl"
              >
                {testimonials.map((item) => (
                  <SwiperSlide key={item.id} className="rounded-[2.5rem] overflow-hidden">
                    {/* The individual Card UI */}
                    <div className="w-full h-full bg-[#2A2A2A] border border-white/10 p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
                      
                      {/* Subtle inner top gradient for depth */}
                      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#F7941D]/10 to-transparent pointer-events-none"></div>

                      <div className="relative z-10 flex flex-col h-full">
                        {/* Quote Marks & Text */}
                        <div className="flex-grow flex flex-col items-center text-center mt-4">
                          <img src={quoteLeft} alt="quote" className="w-8 h-8 opacity-50 mb-4" />
                          <p 
                            className="text-gray-300 text-base md:text-lg italic leading-relaxed line-clamp-6"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {item.comment}
                          </p>
                          <img src={quoteRight} alt="quote" className="w-8 h-8 opacity-50 mt-4" />
                        </div>

                        {/* Student Info Divider */}
                        <div className="w-full h-px bg-white/10 my-6"></div>

                        {/* Student Profile Row */}
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#F7941D] flex-shrink-0 bg-gray-800">
                            <img 
                              src={'https://admin.digitalworldtech.academy/uploads/testimonials/' + encodeURIComponent(item.image)} 
                              alt={item.name} 
                              className="w-full h-full object-cover"
                              onError={(e) => { e.target.src = studentImg; }} // Fallback image if broken
                            />
                          </div>
                          <div className="flex flex-col text-left">
                            <h4 
                              className="text-white font-bold text-lg" 
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {item.name}
                            </h4>
                            <p 
                              className="text-[#F7941D] text-sm font-medium" 
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {item.course}
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          )}

        </div>
      </div>

      {/* Global override for Swiper navigation arrows to match theme */}
      <style dangerouslySetInnerHTML={{__html: `
        .swiper-button-next, .swiper-button-prev {
          color: #F7941D !important;
          background: rgba(42, 42, 42, 0.8);
          width: 44px !important;
          height: 44px !important;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(4px);
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 18px !important;
          font-weight: bold;
        }
      `}} />

    </section>
  );
}

export default Testimonial;