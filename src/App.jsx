import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import Aboutpage from './components/pages/Aboutpage';
import Contactpage from './components/pages/Contactpage';
import StudentPortfolioPage from './components/pages/StudentPortfolioPage';
import Header from './components/Header';
import ScrollToTopButton from './components/scrollButton';
import BlogContentPage from './components/pages/Blogs';
import BlogDetails from './components/pages/BlogDetailsPage';
import CourseDetailPage from "./components/courses/CourseDetailPage";
import Coursepage from './components/pages/Coursepage';
import StudentLogin from './components/pages/studentLogin';
import ScrollMeToTop from './components/scrollMeToTop';
import TwoDotCursor from './components/TwoDotpoint';
import CorporatePage from './components/pages/CorporatePage';

function App() {
  const location = useLocation();

  const isCorporatePage = location.pathname === '/corporate';

  return (
    <>
      {isCorporatePage ? (
        // Show only the CorporatePage (fully isolated)
        <>
		<CorporatePage />
		<TwoDotCursor />
		<ScrollMeToTop />
		</>
      ) : (
        // Normal layout for all other pages
        <>
          <TwoDotCursor />
          <Header />
          <ScrollMeToTop />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/courses" element={<Coursepage />} />
            <Route path="/student-portfolio" element={<StudentPortfolioPage />} />
            <Route path="/contact" element={<Contactpage />} />
            <Route path="/blog" element={<BlogContentPage />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/course/:id" element={<CourseDetailPage />} />
            <Route path="/student/login" element={<StudentLogin />} />
            <Route path="/corporate" element={<CorporatePage />} />
          </Routes>

          <footer>
            <Footer />
            <ScrollToTopButton />
          </footer>
        </>
      )}
    </>
  );
}

export default App;
