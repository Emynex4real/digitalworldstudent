import React, { useMemo, useState } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import useFetch from '../useFetch';
import notFound from "../../assets/images/Not found button.svg";

const StudentProjects = () => {
  const { data: portfolios = [], isPending, isError } = useFetch(`https://api.digitalworldtech.academy/fetchportfolio.php`);

  const [courseFilter, setCourseFilter] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');
  
  const clearFilter = () => {
    setCourseFilter('');
    setDepartmentFilter('');
    setSearchQuery('');
    setSortOrder('newest');
  };

  const filteredPortfolios = useMemo(() => {
    if (!Array.isArray(portfolios)) return [];

    let filtered = [...portfolios];

    if (courseFilter) filtered = filtered.filter(p => p.course_title === courseFilter);
    // if (departmentFilter) filtered = filtered.filter(p => p.department === departmentFilter);

    if (searchQuery) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    filtered.sort((a, b) => {
      const dateA = new Date(a.created_on);
      const dateB = new Date(b.created_on);
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    return filtered;
  }, [portfolios, courseFilter, searchQuery, departmentFilter, sortOrder]);

  const uniqueCourses = Array.isArray(portfolios)
    ? [...new Set(portfolios.map(p => p.course_title))]
    : [];

  return (
    <section className="relative w-full py-16 lg:py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Filters Dashboard --- */}
        <div className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-6 mb-12 shadow-lg">
          <div className="flex flex-col md:flex-row flex-wrap gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="w-full md:flex-1 relative">
              <input 
                value={searchQuery} 
                onChange={e => setSearchQuery(e.target.value)} 
                type="text" 
                placeholder="Search by Student Name..." 
                className="w-full bg-[#2A2A2A] text-white placeholder-gray-500 border border-white/10 rounded-xl px-5 py-3.5 focus:outline-none focus:border-[#F7941D] transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              <svg className="w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>

            {/* Dropdowns */}
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
              <select 
                value={courseFilter} 
                onChange={e => setCourseFilter(e.target.value)}
                className="bg-[#2A2A2A] text-gray-300 border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#F7941D] transition-colors appearance-none cursor-pointer pr-10 relative"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <option value="">All Courses</option>
                {uniqueCourses.map((course, index) => (
                  <option key={index} value={course}>{course}</option>
                ))}
              </select>

              <select 
                value={sortOrder} 
                onChange={e => setSortOrder(e.target.value)}
                className="bg-[#2A2A2A] text-gray-300 border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#F7941D] transition-colors appearance-none cursor-pointer pr-10"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>

              <button 
                onClick={clearFilter}
                className="px-6 py-3.5 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* --- Loading / Error States --- */}
        {isPending && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="w-full h-[300px] bg-[#1A1A1A] animate-pulse rounded-[2rem] border border-white/5"></div>
            ))}
          </div>
        )}

        {isError && (
          <div className="w-full p-12 text-center bg-[#1A1A1A] rounded-3xl border border-red-500/20">
            <p className="text-red-400 font-medium text-lg">Unable to load the portfolio at this time. Please try again.</p>
          </div>
        )}

        {/* --- Cards Grid --- */}
        {!isPending && !isError && (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredPortfolios.length === 0 && (courseFilter || departmentFilter || searchQuery) ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className='col-span-full flex flex-col items-center justify-center py-20 bg-[#1A1A1A] rounded-[2rem] border border-white/5'
                >
                  <img className='w-48 h-auto mb-6 opacity-50' src={notFound} alt="No results" />
                  <p className='text-gray-400 text-lg font-medium' style={{ fontFamily: "'Inter', sans-serif" }}>No projects found. Please adjust your filters.</p>
                </motion.div>
              ) : (
                filteredPortfolios.map((portfolio, index) => {
                  const date = new Date(portfolio.created_on);
                  const formatdate = date.toLocaleString('default', { month: 'short', year: "numeric" });

                  return (
                    <motion.div 
                      layout // This prop enables the magical sorting/filtering shuffling animation!
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="group flex flex-col bg-[#1A1A1A] border border-white/5 rounded-[2rem] overflow-hidden hover:bg-[#252525] hover:-translate-y-2 hover:border-[#F7941D]/30 transition-all duration-300 shadow-lg p-6"
                      key={portfolio.id || index}
                    >
                      {/* Top Meta Row */}
                      <div className='flex justify-between items-center mb-6 pb-4 border-b border-white/10'>
                        <span className="px-3 py-1 bg-[#F7941D]/10 text-[#F7941D] text-xs font-bold uppercase tracking-wider rounded-md">
                          {portfolio.specification || "Project"}
                        </span>
                        <span className="text-gray-500 text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {formatdate}
                        </span>
                      </div>

                      {/* Student Profile Row */}
                      <div className="flex items-center gap-5 mb-8">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#F7941D] transition-colors duration-300 bg-gray-800 flex-shrink-0">
                          <img 
                            src={"https://digitalworldtech.academy/assets/images/portfolio/" + portfolio.image} 
                            alt={portfolio.name} 
                            className="w-full h-full object-cover" 
                            onError={(e) => { e.target.src = 'https://via.placeholder.com/150' }}
                          />
                        </div>
                        <div className="flex flex-col">
                          <h2 
                            className="text-xl font-bold text-white group-hover:text-[#F7941D] transition-colors"
                            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                          >
                            {portfolio.name}
                          </h2>
                          <p className="text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {portfolio.course_title}
                          </p>
                        </div>
                      </div>

                      {/* View Project Button */}
                      <button 
                        onClick={() => { window.open(portfolio.project_link, '_blank') }}
                        className="mt-auto w-full py-3.5 rounded-xl border border-white/20 text-white font-semibold text-center group-hover:bg-[#F7941D] group-hover:border-[#F7941D] group-hover:text-[#212121] transition-all duration-300"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        View Project
                      </button>
                    </motion.div>
                  );
                })
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default StudentProjects;