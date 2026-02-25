import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []); 

  return (
    <section className="relative w-full min-h-[80vh] flex items-center pt-0 pb-16 lg:pb-24 overflow-hidden bg-[#212121]">
      
      {/* --- Ambient Background Glow Effects --- */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#F7941D] rounded-full opacity-20 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#F7941D] rounded-full opacity-10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* --- Left Column: Content (Spans 7 columns on Desktop) --- */}
          <div data-aos="fade-right" className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
            
            {/* Modern Pill Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F7941D]/40 bg-[#F7941D]/10 backdrop-blur-md mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#F7941D] animate-pulse"></span>
              <span className="text-[#F7941D] text-xs sm:text-sm font-semibold tracking-widest uppercase">
                Dive into the exciting world of tech
              </span>
            </div>

            {/* Redesigned Typography Hierarchy */}
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span className="text-[#F7941D]">Empower</span> Your <br className="hidden md:block" />
              Future with <span className="text-[#F7941D] relative">
                Tech
                {/* The Spring Image anchored to the word 'Tech' */}
                <img 
                  src="/images/Group 1321314828 (1).png" 
                  alt="" 
                  className="absolute -top-7 -right-7 w-10 h-10 lg:w-14 lg:h-14 pointer-events-none hidden md:block" 
                />
              </span> <br className="hidden md:block" />
              <span className="text-[#F7941D]">Skills</span> That Matter
            </h1>

            {/* Refined Subtext */}
            <p 
              className="text-gray-400 text-base md:text-lg max-w-2xl font-light mb-8 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Join thousands of learners building careers in tech through flexible, expertly tailored online and offline classes.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link 
                to="/courses" 
                className="w-full sm:w-auto px-7 py-3.5 bg-[#F7941D] text-[#212121] text-sm font-bold rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(247,148,29,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:-translate-y-1 text-center flex items-center justify-center gap-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Explore Courses
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
              
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-7 py-3.5 bg-transparent border border-white/30 text-white text-sm font-semibold rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 text-center"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Enroll Now
              </Link>
            </div>

            {/* Social Proof / Trust Signal */}
            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
              <div className="flex -space-x-2">
                {/* Placeholder circles for student avatars */}
                <div className="w-9 h-9 rounded-full bg-gray-600 border-2 border-[#212121]"></div>
                <div className="w-9 h-9 rounded-full bg-gray-500 border-2 border-[#212121]"></div>
                <div className="w-9 h-9 rounded-full bg-[#F7941D] border-2 border-[#212121] flex items-center justify-center text-[11px] text-[#212121] font-bold">+5k</div>
              </div>
              <p className="text-xs text-gray-400 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                Trusted by 5,000+ Students
              </p>
            </div>

          </div>

          {/* --- Right Column: Image & Floating UI (Spans 5 columns on Desktop) --- */}
          <div data-aos="fade-left" className="lg:col-span-5 relative w-full max-w-lg mx-auto lg:mx-0 mt-10 lg:mt-0">
            
            {/* Image Container with subtle styling & NEW INTERNET IMAGE */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#212121]/50 backdrop-blur-sm z-10 p-2">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-t from-[#F7941D]/20 to-transparent">
                <img 
  src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
  alt="Student learning tech at digital world" 
  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 aspect-[4/4] object-center" 
/>
              </div>
            </div>

            {/* Floating Glassmorphism Card 1 (Top Left) */}
            <div className="absolute -left-5 top-10 lg:-left-10 lg:top-16 z-20 bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-xl shadow-xl hidden sm:flex items-center gap-2 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-9 h-9 rounded-full bg-[#F7941D] flex items-center justify-center text-white text-lg">
                ⭐
              </div>
              <div>
                <p className="text-white font-bold text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>4.9/5 Rating</p>
                <p className="text-gray-300 text-[10px]" style={{ fontFamily: "'Inter', sans-serif" }}>Student Reviews</p>
              </div>
            </div>

            {/* Floating Glassmorphism Card 2 (Bottom Right) */}
            <div className="absolute -right-5 bottom-10 lg:-right-8 lg:bottom-16 z-20 bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-xl shadow-xl hidden sm:flex items-center gap-2 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }}>
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-lg">
                🎓
              </div>
              <div>
                <p className="text-white font-bold text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>10+ Tech Courses</p>
                <p className="text-gray-300 text-[10px]" style={{ fontFamily: "'Inter', sans-serif" }}>Expert Mentors</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;