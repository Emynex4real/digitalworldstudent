import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import dwtaLogo from "../assets/images/Dwtamainlogo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  
  const toggleMenu = () => setMenuOpen(prev => !prev);
  
  // Close menu when clicking outside of the header area
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const handleHideMenu = () => setMenuOpen(false);

  return (
    <header 
      ref={navRef}
      // Added relative positioning so the mobile dropdown anchors correctly to this box
      className="relative bg-[#F7941D] mx-4 my-6 mb-0 lg:mx-16 lg:my-8 px-6 py-4 rounded-[2rem] flex items-center justify-between sticky top-4 lg:top-6 z-[999] shadow-[0_8px_30px_rgb(247,148,29,0.2)]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Logo Container */}
      <Link to={'/'} className="bg-white p-2.5 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex-shrink-0">
        <img src={dwtaLogo} alt="Digital World Tech Academy Logo" className="w-20 lg:w-28 h-auto object-contain" />
      </Link>

      {/* Mobile Hamburger Menu Icon */}
      <button 
        className="lg:hidden p-2 text-[#212121] focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle Navigation Menu"
      >
        <i className={`fa-solid fa-2xl transition-transform duration-300 ${menuOpen ? 'fa-xmark rotate-90' : 'fa-bars'}`}></i>
      </button>

      {/* Desktop & Mobile Navbar Navigation */}
      <Navbar handleHideMenu={handleHideMenu} menuOpen={menuOpen} />
    </header>
  );
}