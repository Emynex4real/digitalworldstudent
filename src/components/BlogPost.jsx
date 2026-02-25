import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import blogImg from "../assets/images/about-image.png";
import userImg from "../assets/images/User.svg";
import calenderImg from "../assets/images/Calender.svg";
import useFetch from "./useFetch";
import notFound from "../assets/images/Not found button.svg";

const BlogCards = () => {
  const { data: posts, isPending, isError } = useFetch(`https://api.digitalworldtech.academy/fetchposts.php`);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <section className="relative w-full py-16 lg:py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Loading Skeleton */}
        {isPending && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="w-full h-[450px] bg-[#2A2A2A] animate-pulse rounded-[2rem] border border-white/5"></div>
            ))}
          </div>
        )}

        {/* Error State */}
        {isError && (
          <div className='flex flex-col items-center justify-center py-20 bg-[#1A1A1A] rounded-[2rem] border border-white/5'>
            <img className='w-48 h-auto mb-6 opacity-50' src={notFound} alt="Error loading" />
            <p className='text-red-400 text-lg font-medium' style={{ fontFamily: "'Inter', sans-serif" }}>Unable to load articles at this time.</p>
          </div>
        )}

        {/* Empty State */}
        {!isPending && !isError && posts && posts.length === 0 && (
          <div className='flex flex-col items-center justify-center py-20 bg-[#1A1A1A] rounded-[2rem] border border-white/5'>
            <img className='w-48 h-auto mb-6 opacity-50' src={notFound} alt="No results" />
            <p className='text-gray-400 text-lg font-medium' style={{ fontFamily: "'Inter', sans-serif" }}>No blog posts found.</p>
          </div>
        )}

        {/* Data Grid */}
        {!isPending && !isError && posts && posts.length > 0 && (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10"
          >
            {posts.map((post) => (
              <motion.div key={post.id} variants={cardVariants} className="h-full">
                <Link 
                  to={`/blog/${post.id}`} 
                  className="group flex flex-col h-full bg-[#1A1A1A] border border-white/5 rounded-[2rem] overflow-hidden hover:bg-[#252525] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative"
                >
                  {/* Subtle Orange Hover Bar */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F7941D]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>

                  {/* Image Container */}
                  <div className="relative w-full h-56 overflow-hidden bg-gray-800">
                    <img 
                      src={`https://admin.digitalworldtech.academy/uploads/blogposts/${post.image}`} 
                      alt={post.title} 
                      onError={(e) => { e.target.src = blogImg; }} // Fallback image if broken
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    />
                    {/* Category Badge */}
                    <span className="absolute top-4 left-4 px-4 py-1.5 bg-[#212121]/80 backdrop-blur-md text-[#F7941D] text-xs font-bold uppercase tracking-wider rounded-full border border-white/10">
                      {post.category || "Article"}
                    </span>
                  </div>

                  {/* Content Container */}
                  <div className="p-8 flex flex-col flex-grow">
                    
                    {/* Meta Info (Author & Date) */}
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-400 text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <div className="flex items-center gap-2">
                        <img src={calenderImg} alt="Calendar" className="w-4 h-4 opacity-70" />
                        <span>{post.date || "Recent"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <img src={userImg} alt="User" className="w-4 h-4 opacity-70" />
                        <span>By {post.author || "Admin"}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-2xl font-bold text-white mb-4 group-hover:text-[#F7941D] transition-colors duration-300 leading-snug line-clamp-2"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {post.title}
                    </h3>

                    {/* Snippet (Replaced slice with line-clamp) */}
                    <p 
                      className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3 flex-grow"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {post.details}
                    </p>

                    {/* Editorial-style Read More */}
                    <div 
                      className="mt-auto flex items-center justify-between border-t border-white/10 pt-5" 
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      <div className="flex items-center gap-2 text-[#F7941D] font-bold text-sm uppercase tracking-wide group-hover:gap-4 transition-all duration-300">
                        <span>Read More</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                      </div>
                      
                      {/* Comments count */}
                      <span className="text-gray-500 text-sm flex items-center gap-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                        💬 {post.comments || 0}
                      </span>
                    </div>

                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BlogCards;