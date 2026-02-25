import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutSpring from "../assets/images/About-sect.png";

function CTASectionCourse() {
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    return (
        <section className="relative w-full py-20 lg:py-32 bg-[#212121]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full bg-[#1A1A1A] border border-white/5 rounded-[2.5rem] p-8 md:p-16 lg:p-20 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl"
                >
                    {/* Subtle offset background glow */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#F7941D]/10 to-transparent rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>

                    {/* Content Block */}
                    <div className="relative z-10 lg:w-3/5 text-center lg:text-left">
                        <h2 
                            className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
                            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                            <span className="text-gray-500">Your Skills.</span> <br />
                            Your Hustle. <br />
                            <span className="text-[#F7941D] relative inline-block mt-2">
                                Your Time To Shine.
                                {/* Floating doodle anchored to the text */}
                                <img src={aboutSpring} alt="" className="absolute -top-8 -right-10 md:-right-16 w-12 md:w-16 h-auto opacity-80 animate-bounce" style={{ animationDuration: '3s' }} />
                            </span>
                        </h2>
                        
                        <p 
                            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mb-10 mx-auto lg:mx-0"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Join thousands of Nigerians learning creative and digital skills like skincare, content creation, candle making, and more — and turning them into thriving businesses.
                        </p>

                        <div className="flex items-center justify-center lg:justify-start">
                            <Link 
                                to="/contact" 
                                onClick={scrollToTop}
                                className="px-8 py-4 bg-[#F7941D] text-[#1A1A1A] text-base md:text-lg font-bold rounded-full hover:bg-white hover:text-[#1A1A1A] transition-all duration-300 shadow-[0_0_20px_rgba(247,148,29,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1"
                                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                            >
                                Make an Enquiry Now
                            </Link>
                        </div>
                    </div>

                    {/* Right-side image */}
                    <div className="hidden lg:flex w-2/5 justify-end relative z-10">
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <img 
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                alt="Students learning tech skills" 
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                </motion.div>

            </div>
        </section>
    );
}

export default CTASectionCourse;