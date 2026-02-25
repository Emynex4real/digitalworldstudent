import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FormPopup = ({ title, courseBorchure, onClose, advisorVideo }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    location: "",
    progress: "",
    course: title,
    brochure: courseBorchure,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullname.trim()) newErrors.fullname = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\+?\d{10,15}$/.test(formData.phone)) newErrors.phone = "Invalid phone number";
    if (!formData.location) newErrors.location = "Please select a location";
    if (!formData.progress) newErrors.progress = "Please select your progress level";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await fetch("https://api.digitalworldtech.academy/brochure.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (response.ok) setSubmitSuccess(true);
        else throw new Error("Failed to submit form");
      } catch (error) {
        setErrors({ submit: "There was an issue with the submission. Please try again later." });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  // Framer Motion Variants for the Modal
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 25 } },
    exit: { opacity: 0, scale: 0.9, y: 30, transition: { duration: 0.2 } }
  };

  // Wrap the entire component in AnimatePresence to allow exit animations
  return (
    <AnimatePresence>
      <motion.div 
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#212121]/80 backdrop-blur-md p-4 sm:p-6"
        onClick={onClose}
      >
        <motion.div 
          variants={modalVariants}
          className={`bg-[#1A1A1A] border border-white/10 rounded-[2rem] shadow-2xl relative overflow-hidden flex flex-col w-full max-h-[90vh] ${submitSuccess ? 'max-w-4xl' : 'max-w-2xl'}`}
          onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
        >
          
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 z-50 w-10 h-10 bg-white/5 hover:bg-red-500/80 text-white rounded-full flex items-center justify-center transition-colors duration-300 border border-white/10"
            onClick={onClose}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          {/* Scrollable Content Area */}
          <div className="overflow-y-auto p-8 md:p-12 custom-scrollbar">
            
            {submitSuccess ? (
              /* --- SUCCESS STATE (Videos) --- */
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center text-center w-full"
              >
                {/* Success Header */}
                <div className="w-20 h-20 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Submission Successful!</h2>
                <h4 className="text-[#F7941D] text-lg font-medium mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Your course outline will be sent to you shortly.</h4>
                <p className="text-gray-400 text-base mb-10" style={{ fontFamily: "'Inter', sans-serif" }}>Kindly go through the course preview videos as you wait.</p>
        
                {/* Videos Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full text-left">
                  
                  {/* Video 1 */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Course Introduction</h3>
                    <p className="text-gray-400 text-sm h-10" style={{ fontFamily: "'Inter', sans-serif" }}>Start your learning journey with this brief overview of what the course covers.</p>
                    <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-black">
                      {advisorVideo}
                    </div>
                  </div>
        
                  {/* Video 2 */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Practical Session</h3>
                    <p className="text-gray-400 text-sm h-10" style={{ fontFamily: "'Inter', sans-serif" }}>Apply what you've learned with this hands-on session covering real-world implementation.</p>
                    <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-black">
                      {advisorVideo}
                    </div>
                  </div>

                </div>
              </motion.div>
            ) : (
              /* --- FORM STATE --- */
              <div className="flex flex-col w-full">
                <div className="mb-10 text-center md:text-left pr-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        Want to join the <span className="text-[#F7941D]">{title}</span> class?
                    </h2>
                    <p className="text-gray-400 text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>Fill out this form to receive the brochure and exclusive video access.</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                    
                    {/* Row 1: Name & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>Full Name</label>
                            <input 
                                type="text" name="fullname" placeholder="John Doe" value={formData.fullname} onChange={handleChange} 
                                className={`w-full bg-[#2A2A2A] text-white placeholder-gray-500 border rounded-xl px-5 py-3.5 focus:outline-none transition-colors ${errors.fullname ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#F7941D]'}`}
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            />
                            {errors.fullname && <span className="text-red-400 text-xs mt-1">{errors.fullname}</span>}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>Phone Number</label>
                            <input 
                                type="tel" name="phone" placeholder="+234 9077019768" value={formData.phone} onChange={handleChange} 
                                className={`w-full bg-[#2A2A2A] text-white placeholder-gray-500 border rounded-xl px-5 py-3.5 focus:outline-none transition-colors ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#F7941D]'}`}
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            />
                            {errors.phone && <span className="text-red-400 text-xs mt-1">{errors.phone}</span>}
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>Email Address</label>
                        <input 
                            type="email" name="email" placeholder="youremail@example.com" value={formData.email} onChange={handleChange} 
                            className={`w-full bg-[#2A2A2A] text-white placeholder-gray-500 border rounded-xl px-5 py-3.5 focus:outline-none transition-colors ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#F7941D]'}`}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        />
                        {errors.email && <span className="text-red-400 text-xs mt-1">{errors.email}</span>}
                    </div>

                    {/* Row 2: Dropdowns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>Location</label>
                            <select 
                                name="location" value={formData.location} onChange={handleChange}
                                className={`w-full bg-[#2A2A2A] text-white border rounded-xl px-5 py-3.5 focus:outline-none transition-colors appearance-none cursor-pointer ${errors.location ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#F7941D]'}`}
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                <option value="" disabled className="text-gray-500">Select Location</option>
                                <option value="nigeria">Online (Global)</option>
                                <option value="physical">Physical Class (Ikorodu)</option>
                            </select>
                            {errors.location && <span className="text-red-400 text-xs mt-1">{errors.location}</span>}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>Experience Level</label>
                            <select 
                                name="progress" value={formData.progress} onChange={handleChange}
                                className={`w-full bg-[#2A2A2A] text-white border rounded-xl px-5 py-3.5 focus:outline-none transition-colors appearance-none cursor-pointer ${errors.progress ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#F7941D]'}`}
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                <option value="" disabled className="text-gray-500">Select Progress Level</option>
                                <option value="beginner">Beginner: I need guidance</option>
                                <option value="intermediate">Intermediate: I want to develop</option>
                                <option value="advanced">Advanced: I need more experience</option>
                            </select>
                            {errors.progress && <span className="text-red-400 text-xs mt-1">{errors.progress}</span>}
                        </div>
                    </div>

                    {errors.submit && <span className="text-red-400 text-sm font-medium mt-2 bg-red-500/10 p-3 rounded-lg border border-red-500/20">{errors.submit}</span>}

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
                                Submitting...
                            </span>
                        ) : "Get Access Now"}
                    </button>

                </form>
              </div>
            )}

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FormPopup;
// This code defines a React component for a form popup that collects user information and submits it to an API. It includes validation, error handling, and a success message upon successful submission. The component is styled using CSS classes.
// The form includes fields for full name, email, phone number, location, and progress level. The component uses state to manage form data, errors, and submission status. It also includes a close button to hide the popup.
// The form is designed to be reusable and can be integrated into a larger application. The component is exported for use in other parts of the application.
// The code is structured to ensure a good user experience, with clear error messages and a responsive design. The form submission is handled asynchronously, and the component provides feedback to the user based on the submission result.