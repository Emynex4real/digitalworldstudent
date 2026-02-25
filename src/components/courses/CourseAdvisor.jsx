import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import countryCode from "../../data/countryCode.json";
import CourseAdvisorPopup from './courseAdvisorPopup';

function CourseAdvisor({ onClose, title, advisorVideo }) {
  const timeRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    location: "",
    course: title,
    countryCode: "+234", // Set a default to prevent empty states
    pastTraining: "",
    goals: "",
    referralSource: "",
    availableTime: "",
    contactMethod: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [displayPopup, setDisplayPopup] = useState(false);

  // FIXED: Properly handle the 5-second delay popup using useEffect to prevent infinite loops
  useEffect(() => {
    let timer;
    if (submitSuccess) {
      timer = setTimeout(() => {
        setDisplayPopup(true);
      }, 5000);
    }
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [submitSuccess]);

  const handleOpenTime = () => {
    if (timeRef.current && timeRef.current.showPicker) {
      timeRef.current.showPicker();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format.";
    
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required.";
    if (!formData.location) newErrors.location = "Location is required.";
    if (!formData.availableTime.trim()) newErrors.availableTime = "Availability is required.";

    // Improved Phone Validation with fallback
    const phoneRegexByCountry = {
      "+1": /^[2-9]\d{2}[2-9]\d{2}\d{4}$/,
      "+44": /^[1-9]\d{9}$/,
      "+234": /^\d{10,11}$/ // Nigerian numbers can be 10 or 11 digits depending on format
    };

    const phoneRegex = phoneRegexByCountry[formData.countryCode] || /^\d{7,15}$/; // Fallback for other countries
    if (formData.phoneNumber && !phoneRegex.test(formData.phoneNumber.replace(/\s+/g, ''))) {
      newErrors.phoneNumber = `Invalid phone number format.`;
    }

    if (!formData.pastTraining) newErrors.pastTraining = "Please select past training status.";
    if (!formData.goals) newErrors.goals = "Please select your goal.";
    if (!formData.referralSource) newErrors.referralSource = "Please select referral source.";
    if (!formData.contactMethod) newErrors.contactMethod = "Please select a contact method.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.digitalworldtech.academy/enquire.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("Failed to submit form");
      
      setSubmitSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
      setErrors(prev => ({ ...prev, submit: "Something went wrong. Please check your connection and try again." }));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Framer Motion Variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 25 } },
    exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } }
  };

  return (
    <AnimatePresence>
      <motion.div 
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose} 
        className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#212121]/80 backdrop-blur-md p-4 sm:p-6"
      >
        <motion.div 
          variants={modalVariants}
          onClick={(e) => e.stopPropagation()} 
          className="bg-[#1A1A1A] border border-white/10 rounded-[2rem] shadow-2xl relative overflow-hidden flex flex-col w-full max-w-4xl max-h-[90vh]"
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 z-50 w-10 h-10 bg-white/5 hover:bg-red-500/80 text-white rounded-full flex items-center justify-center transition-colors duration-300 border border-white/10"
            onClick={onClose}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          {/* Scrollable Content Area */}
          <div className="overflow-y-auto p-8 md:p-10 lg:p-12 custom-scrollbar">
            
            {submitSuccess ? (
              /* --- SUCCESS STATE --- */
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center text-center w-full">
                <div className="w-20 h-20 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Request Received!</h2>
                <h4 className="text-[#F7941D] text-lg font-medium mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Our course advisor will be in touch with you shortly.</h4>
                <p className="text-gray-400 text-base mb-10" style={{ fontFamily: "'Inter', sans-serif" }}>Kindly go through the course preview videos as you wait.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full text-left">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Course Introduction</h3>
                    <p className="text-gray-400 text-sm h-10" style={{ fontFamily: "'Inter', sans-serif" }}>Start your learning journey with this brief overview.</p>
                    <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-black">
                      {advisorVideo}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Practical Session</h3>
                    <p className="text-gray-400 text-sm h-10" style={{ fontFamily: "'Inter', sans-serif" }}>Apply what you've learned with this hands-on session.</p>
                    <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-black">
                      {advisorVideo}
                    </div>
                  </div>
                </div>

                {displayPopup && <CourseAdvisorPopup onClose={() => setDisplayPopup(false)} />}
              </motion.div>

            ) : (

              /* --- FORM STATE --- */
              <div className="flex flex-col w-full">
                <div className="mb-10 text-center md:text-left pr-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Speak with an <span className="text-[#F7941D]">Advisor</span>
                  </h2>
                  <p className="text-gray-400 text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Fill out the form below to schedule a personalized call with our educational advisors.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                  
                  {/* Row 1: Names */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>First Name*</label>
                      <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" className={`w-full bg-[#2A2A2A] text-white placeholder-gray-500 border rounded-xl px-5 py-3.5 focus:outline-none transition-colors ${errors.firstName ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#F7941D]'}`} />
                      {errors.firstName && <span className="text-red-400 text-xs mt-1">{errors.firstName}</span>}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>Last Name*</label>
                      <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" className={`w-full bg-[#2A2A2A] text-white placeholder-gray-500 border rounded-xl px-5 py-3.5 focus:outline-none transition-colors ${errors.lastName ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#F7941D]'}`} />
                      {errors.lastName && <span className="text-red-400 text-xs mt-1">{errors.lastName}</span>}
                    </div>
                  </div>

                  {/* Row 2: Email & Phone Combo */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>Email Address*</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="youremail@example.com" className={`w-full bg-[#2A2A2A] text-white placeholder-gray-500 border rounded-xl px-5 py-3.5 focus:outline-none transition-colors ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#F7941D]'}`} />
                      {errors.email && <span className="text-red-400 text-xs mt-1">{errors.email}</span>}
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>Phone Number*</label>
                      <div className="flex gap-3">
                        <select name="countryCode" value={formData.countryCode} onChange={handleChange} className="w-1/3 bg-[#2A2A2A] text-white border border-white/10 rounded-xl px-3 py-3.5 focus:outline-none focus:border-[#F7941D] transition-colors appearance-none text-center cursor-pointer">
                          {countryCode?.countries?.map((country, index) => (
                            <option key={index} value={country.code}>{country.code}</option>
                          ))}
                        </select>
                        <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" className={`w-2/3 bg-[#2A2A2A] text-white placeholder-gray-500 border rounded-xl px-5 py-3.5 focus:outline-none transition-colors ${errors.phoneNumber ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#F7941D]'}`} />
                      </div>
                      {errors.phoneNumber && <span className="text-red-400 text-xs mt-1">{errors.phoneNumber}</span>}
                    </div>
                  </div>

                  {/* Row 3: Location & Goal */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-300">Location*</label>
                      <select name="location" value={formData.location} onChange={handleChange} className={`w-full bg-[#2A2A2A] text-white border rounded-xl px-5 py-3.5 focus:outline-none transition-colors appearance-none cursor-pointer ${errors.location ? 'border-red-500' : 'border-white/10 focus:border-[#F7941D]'}`}>
                        <option value="" disabled>Select your location</option>
                        <option value="Ikorodu Garage">Ikorodu Garage</option>
                        <option value="Ikorodu Benson">Ikorodu Benson</option>
                        <option value="Agric Ikorodu">Agric Ikorodu</option>
                        <option value="Online">Online</option>
                      </select>
                      {errors.location && <span className="text-red-400 text-xs mt-1">{errors.location}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-300">Goal for this course*</label>
                      <select name="goals" value={formData.goals} onChange={handleChange} className={`w-full bg-[#2A2A2A] text-white border rounded-xl px-5 py-3.5 focus:outline-none transition-colors appearance-none cursor-pointer ${errors.goals ? 'border-red-500' : 'border-white/10 focus:border-[#F7941D]'}`}>
                        <option value="" disabled>Select your goal</option>
                        <option value="Finding Job">Finding Job</option>
                        <option value="Freelancing">Freelancing</option>
                        <option value="Career Change">Career Change</option>
                      </select>
                      {errors.goals && <span className="text-red-400 text-xs mt-1">{errors.goals}</span>}
                    </div>
                  </div>

                  {/* Row 4: Past Training & Referral */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-300">Past Training Experience*</label>
                      <select name="pastTraining" value={formData.pastTraining} onChange={handleChange} className={`w-full bg-[#2A2A2A] text-white border rounded-xl px-5 py-3.5 focus:outline-none transition-colors appearance-none cursor-pointer ${errors.pastTraining ? 'border-red-500' : 'border-white/10 focus:border-[#F7941D]'}`}>
                        <option value="" disabled>Select Yes or No</option>
                        <option value="Yes">Yes, I have past training</option>
                        <option value="No">No, I am a beginner</option>
                      </select>
                      {errors.pastTraining && <span className="text-red-400 text-xs mt-1">{errors.pastTraining}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-300">How did you hear about us?*</label>
                      <select name="referralSource" value={formData.referralSource} onChange={handleChange} className={`w-full bg-[#2A2A2A] text-white border rounded-xl px-5 py-3.5 focus:outline-none transition-colors appearance-none cursor-pointer ${errors.referralSource ? 'border-red-500' : 'border-white/10 focus:border-[#F7941D]'}`}>
                        <option value="" disabled>Select an option</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Tiktok">Tiktok</option>
                        <option value="Youtube">YouTube</option>
                        <option value="Referral">Friend/Referral</option>
                      </select>
                      {errors.referralSource && <span className="text-red-400 text-xs mt-1">{errors.referralSource}</span>}
                    </div>
                  </div>

                  {/* Row 5: Availability & Contact Method */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-300">Available Time for Call*</label>
                      <input 
                        type="datetime-local" name="availableTime" ref={timeRef} value={formData.availableTime} onChange={handleChange} onClick={handleOpenTime} 
                        className={`w-full bg-[#2A2A2A] text-white placeholder-gray-500 border rounded-xl px-5 py-3.5 focus:outline-none transition-colors cursor-pointer [color-scheme:dark] ${errors.availableTime ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#F7941D]'}`}
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      />
                      {errors.availableTime && <span className="text-red-400 text-xs mt-1">{errors.availableTime}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-300">Preferred Contact Method*</label>
                      <select name="contactMethod" value={formData.contactMethod} onChange={handleChange} className={`w-full bg-[#2A2A2A] text-white border rounded-xl px-5 py-3.5 focus:outline-none transition-colors appearance-none cursor-pointer ${errors.contactMethod ? 'border-red-500' : 'border-white/10 focus:border-[#F7941D]'}`}>
                        <option value="" disabled>Choose contact method</option>
                        <option value="Phone call">Phone Call</option>
                        <option value="Zoom call">Zoom Call</option>
                        <option value="WhatsApp call">WhatsApp Call</option>
                      </select>
                      {errors.contactMethod && <span className="text-red-400 text-xs mt-1">{errors.contactMethod}</span>}
                    </div>
                  </div>

                  {errors.submit && <div className="text-red-400 text-sm font-medium mt-2 bg-red-500/10 p-3 rounded-lg border border-red-500/20 text-center">{errors.submit}</div>}

                  {/* Submit Button */}
                  <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={`w-full py-4 mt-4 rounded-full font-bold text-lg transition-all duration-300 ${isSubmitting ? 'bg-white/10 text-gray-400 cursor-not-allowed' : 'bg-[#F7941D] text-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] shadow-[0_0_20px_rgba(247,148,29,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1'}`}
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                      {isSubmitting ? (
                          <span className="flex items-center justify-center gap-3">
                              <svg className="animate-spin h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                              Scheduling Call...
                          </span>
                      ) : "Schedule My Call"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default CourseAdvisor;