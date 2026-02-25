import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const CourseCards = () => {
  const { data: courses, isPending, isError } = useFetch(`https://api.digitalworldtech.academy/fetchcourses.php`);

  const toTitleCase = (str) =>
    str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  // --- Handle Loading State ---
  if (isPending) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((n) => (
          <div key={n} className="w-full h-[450px] bg-white/5 animate-pulse rounded-[2rem] border border-white/5"></div>
        ))}
      </div>
    );
  }

  // --- Handle Error State ---
  if (isError) {
    return (
      <div className="text-center py-10">
        <p className="text-red-400 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
          Failed to load courses. Please try refreshing the page.
        </p>
      </div>
    );
  }

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10"
    >
      {Array.isArray(courses) && courses.map((course) => {
        const course_content = course.content.map(topic => topic.title).join(", ");
        
        return (
          <motion.div key={course.id} variants={cardVariants} className="h-full">
            <Link 
              to={`/course/${course.course_slug}`}
              className="group block h-full bg-[#2A2A2A]/80 border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-md shadow-lg hover:shadow-[0_10px_40px_rgba(247,148,29,0.15)] hover:border-[#F7941D]/50 transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full h-56 overflow-hidden bg-gray-800">
                <img 
                  src={`https://admin.digitalworldtech.academy/uploads/cohort-courses/images/${encodeURIComponent(course.image)}`} 
                  alt={course.course_name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Subtle gradient overlay to blend image into the dark card */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A2A]/80 to-transparent"></div>
              </div>

              {/* Card Content Container */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                
                {/* Tags (Duration & Certification) */}
                <div className="flex flex-wrap gap-2 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <span className="px-3 py-1 bg-[#F7941D]/10 text-[#F7941D] text-xs font-bold rounded-full border border-[#F7941D]/30">
                    ⏱ {course.duration}
                  </span>
                  <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-semibold rounded-full border border-white/10">
                    🎓 {course.certification}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  className="text-2xl font-bold text-white mb-3 group-hover:text-[#F7941D] transition-colors duration-300"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {course.course_name}
                </h3>

                {/* Truncated Description using Tailwind's line-clamp instead of manual slicing */}
                <p 
                  className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {toTitleCase(course_content)}
                </p>

                {/* Divider */}
                <div className="w-full h-[1px] bg-white/10 mb-6"></div>

                {/* Button (Styled as a div since the whole card is a Link) */}
                <div 
                  className="w-full py-3.5 rounded-full border border-white/20 text-white font-semibold text-center group-hover:bg-[#F7941D] group-hover:border-[#F7941D] group-hover:text-[#212121] transition-all duration-300"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Inquire Now
                </div>

              </div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default CourseCards;