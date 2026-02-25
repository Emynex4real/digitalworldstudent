import { Link, useLocation } from 'react-router-dom';

function Navbar({ handleHideMenu, menuOpen }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav 
      className={`
        ${menuOpen 
          ? 'flex flex-col absolute top-full mt-4 left-0 w-full bg-[#F7941D] p-6 rounded-3xl shadow-2xl z-50 origin-top animate-fade-in-down' 
          : 'hidden'
        } 
        lg:flex lg:static lg:w-auto lg:flex-row lg:bg-transparent lg:p-0 lg:shadow-none items-center gap-8 lg:gap-10
        transition-all duration-300
      `}
    >
      {/* Navigation Links */}
      <ul className="flex flex-col lg:flex-row items-center gap-5 lg:gap-6 w-full lg:w-auto">
        <li onClick={handleHideMenu}>
          <Link 
            to="/" 
            className={`text-[13px] font-bold tracking-wide transition-colors duration-200 ${
              currentPath === '/' ? 'text-white' : 'text-[#212121] hover:text-white'
            }`}
          >
            HOME
          </Link>
        </li>
        <li onClick={handleHideMenu}>
          <Link 
            to="/about" 
            className={`text-[13px] font-bold tracking-wide transition-colors duration-200 ${
              currentPath === '/about' ? 'text-white' : 'text-[#212121] hover:text-white'
            }`}
          >
            ABOUT US
          </Link>
        </li>
        <li onClick={handleHideMenu}>
          <Link 
            to="/courses" 
            className={`text-[13px] font-bold tracking-wide transition-colors duration-200 ${
              currentPath === '/courses' ? 'text-white' : 'text-[#212121] hover:text-white'
            }`}
          >
            COURSES
          </Link>
        </li>
        <li onClick={handleHideMenu}>
          <Link 
            to="/student-portfolio" 
            className={`text-[13px] font-bold tracking-wide transition-colors duration-200 ${
              currentPath === '/student-portfolio' ? 'text-white' : 'text-[#212121] hover:text-white'
            }`}
          >
            STUDENT PORTFOLIOS
          </Link>
        </li>
      </ul>

      {/* Call to Action Buttons */}
      <div className="flex flex-col lg:flex-row items-center gap-3 mt-6 lg:mt-0 w-full lg:w-auto">
        <Link 
          to="https://students.digitalworldtech.academy/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full lg:w-auto"
        >
          <button 
            className="w-full lg:w-auto px-6 py-2.5 border-2 border-white text-white text-xs font-bold rounded-full hover:bg-white hover:text-[#F7941D] transition-all duration-300"
          >
            Student Login
          </button>
        </Link>
        
        <Link 
          onClick={handleHideMenu} 
          to="/contact" 
          className="w-full lg:w-auto text-center px-6 py-2.5 bg-white text-[#212121] text-xs font-bold rounded-full hover:bg-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
        >
          Make an Enquiry
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;