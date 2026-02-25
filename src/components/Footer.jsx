import React from 'react';
import { Link } from 'react-router-dom';
import tiktok from '../assets/images/Tiktok.png';
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import twitter from '../assets/images/X.png';
import youtube from '../assets/images/youtube.svg';
import linklden from '../assets/images/linkedin.svg';
import DwtaLogo from "../assets/images/dwta logo.png";

export default function Footer() {
    const year = new Date().getFullYear();
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        // Used #1A1A1A (slightly darker than #212121) to give the footer a grounded, distinct "bottom" feel
        <footer className="bg-[#1A1A1A] text-white pt-20 pb-8 border-t border-white/10" style={{ fontFamily: "'Inter', sans-serif" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* 4-Column Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    
                    {/* Column 1: Logo & Socials */}
                    <div className="flex flex-col">
                        <img className="w-40 md:w-48 mb-6 bg-white p-2 rounded-xl" src={DwtaLogo} alt="Digital World Tech Academy Logo" />
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                            Follow us on our social media platforms to stay updated on the latest tech trends, student projects, and cohort intakes.
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-3">
                            {/* Social Icons mapped to reusable sleek glass circles */}
                            <a href="https://www.facebook.com/share/18qLhSNQsW/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F7941D] hover:-translate-y-1 transition-all duration-300">
                                <img src={facebook} alt="Facebook" className="w-5 h-5 object-contain" />
                            </a>
                            <a href="https://www.instagram.com/digitalworldtechacademy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F7941D] hover:-translate-y-1 transition-all duration-300">
                                <img src={instagram} alt="Instagram" className="w-5 h-5 object-contain" />
                            </a>
                            <a href="https://x.com/DigitalWorld_Ac" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F7941D] hover:-translate-y-1 transition-all duration-300">
                                <img src={twitter} alt="X (Twitter)" className="w-5 h-5 object-contain" />
                            </a>
                            <a href="https://www.tiktok.com/@digitalworldtechacademy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F7941D] hover:-translate-y-1 transition-all duration-300">
                                <img src={tiktok} alt="TikTok" className="w-5 h-5 object-contain" />
                            </a>
                            <a href="https://youtube.com/@digitalworldtraining" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F7941D] hover:-translate-y-1 transition-all duration-300">
                                <img src={youtube} alt="YouTube" className="w-5 h-5 object-contain" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F7941D] hover:-translate-y-1 transition-all duration-300">
                                <img src={linklden} alt="LinkedIn" className="w-5 h-5 object-contain" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Company Links */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-bold mb-6 text-white relative inline-block w-max">
                            Company
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#F7941D] rounded-full"></span>
                        </h3>
                        <ul className="flex flex-col gap-4">
                            <li><Link onClick={scrollToTop} to="/" className="text-gray-400 hover:text-[#F7941D] transition-colors duration-300 hover:translate-x-1 inline-block">Home</Link></li>
                            <li><Link onClick={scrollToTop} to="/about" className="text-gray-400 hover:text-[#F7941D] transition-colors duration-300 hover:translate-x-1 inline-block">About Us</Link></li>
                            <li><Link onClick={scrollToTop} to="/courses" className="text-gray-400 hover:text-[#F7941D] transition-colors duration-300 hover:translate-x-1 inline-block">Courses</Link></li>
                            <li><Link onClick={scrollToTop} to="/student-portfolio" className="text-gray-400 hover:text-[#F7941D] transition-colors duration-300 hover:translate-x-1 inline-block">Student Portfolio</Link></li>
                            <li><Link onClick={scrollToTop} to="/contact" className="text-gray-400 hover:text-[#F7941D] transition-colors duration-300 hover:translate-x-1 inline-block">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Student Links */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-bold mb-6 text-white relative inline-block w-max">
                            Student
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#F7941D] rounded-full"></span>
                        </h3>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <a href="https://students.digitalworldtech.academy/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F7941D] transition-colors duration-300 hover:translate-x-1 inline-block">
                                    Student Login
                                </a>
                            </li>
                            <li>
                                <Link onClick={scrollToTop} to="/blog" className="text-gray-400 hover:text-[#F7941D] transition-colors duration-300 hover:translate-x-1 inline-block">
                                    Digital World Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-bold mb-6 text-white relative inline-block w-max">
                            Contact Us
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#F7941D] rounded-full"></span>
                        </h3>
                        <ul className="flex flex-col gap-5">
                            <li className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                                <i className="fas fa-phone mt-1 text-[#F7941D]"></i> 
                                <a href="tel:+2348120160899" className="hover:text-[#F7941D] transition-colors duration-300">+234-812-016-0899</a>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                                <i className="fas fa-phone mt-1 text-[#F7941D]"></i>
                                <a href="tel:+2349164938620" className="hover:text-[#F7941D] transition-colors duration-300">+234-916-493-8620</a>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                                <i className="fas fa-phone mt-1 text-[#F7941D]"></i> 
                                <a href="tel:+23470468620" className="hover:text-[#F7941D] transition-colors duration-300">+234-704-6-8620</a>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-300 break-words">
                                <i className="fas fa-envelope mt-1 text-[#F7941D]"></i> 
                                <a href="mailto:contactdigitalworldnow@gmail.com" className="hover:text-[#F7941D] transition-colors duration-300">contactdigitalworldnow@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Copyright Area */}
                <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
                    <p>Digital World Tech Academy &copy; {year}. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Designed & Developed with precision.</p>
                </div>

            </div>
        </footer>
    );
}