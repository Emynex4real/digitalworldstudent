import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const CourseCardsForCourse = () => {
  const { data: courses, isPending, isError } = useFetch(`https://api.digitalworldtech.academy/fetchcourses.php`);

  const toTitleCase = (str) =>
    str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());

  // Removed the truncateText function because we are using Tailwind's native `line-clamp-3`
  // which handles truncation dynamically based on screen size (much cleaner code!).

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <section className="relative w-full py-16 lg:py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Page Header */}
        <div className="mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Explore Our <span className="text-[#F7941D]">Curriculum</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                From beginner-friendly introductions to advanced technical deep-dives, find the perfect program to accelerate your career.
            </p>
        </div>

        {/* Loading Skeleton */}
        {isPending && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="w-full h-[480px] bg-[#2A2A2A] animate-pulse rounded-[2rem] border border-white/5"></div>
            ))}
          </div>
        )}

        {/* Error State */}
        {isError && (
          <div className="w-full p-12 text-center bg-[#2A2A2A] rounded-3xl border border-red-500/20">
            <p className="text-red-400 font-medium text-lg">Unable to load the curriculum at this time. Please check your connection.</p>
          </div>
        )}

        {/* Data Grid */}
        {!isPending && !isError && courses && (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10"
          >
            {courses.map((course) => {
              const course_content = course.content.map(topic => topic.title).join(", ");
              return (
                <motion.div key={course.id} variants={cardVariants} className="h-full">
                  <Link 
                    to={`/course/${course.course_slug}`}
                    className="group flex flex-col h-full bg-[#1A1A1A] border border-white/5 rounded-[2rem] overflow-hidden hover:bg-[#252525] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative"
                  >
                    {/* Bespoke accent border that appears on hover */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F7941D]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>

                    {/* Image Section */}
                    <div className="relative w-full h-52 overflow-hidden bg-[#111]">
                      <img 
                        src={`https://admin.digitalworldtech.academy/uploads/cohort-courses/images/${encodeURIComponent(course.image)}`} 
                        alt={course.course_name} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex flex-col flex-grow">
                      
                      {/* Premium Pill Tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        <span className="px-3 py-1 bg-[#F7941D]/10 text-[#F7941D] text-xs font-bold uppercase tracking-wider rounded-md border border-[#F7941D]/20">
                          {course.duration}
                        </span>
                        <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-bold uppercase tracking-wider rounded-md border border-white/10">
                          {course.certification}
                        </span>
                      </div>

                      <h3 
                        className="text-2xl font-bold text-white mb-3 group-hover:text-[#F7941D] transition-colors duration-300 leading-snug"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {course.course_name}
                      </h3>

                      <p 
                        className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3 flex-grow"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {toTitleCase(course_content)}
                      </p>

                      {/* Editorial-style link replacing the blocky button */}
                      <div 
                        className="mt-auto flex items-center gap-2 text-[#F7941D] font-semibold text-sm uppercase tracking-wide group-hover:gap-4 transition-all duration-300" 
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        <span>View Course Details</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                      </div>

                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CourseCardsForCourse;