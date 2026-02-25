import React, { useState } from "react";
import { motion } from "framer-motion";

function FormCard({ title, courseBorchure }) {
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
  const [isPending, setIsPending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      const updatedErrors = { ...prev };
      delete updatedErrors[name];
      return updatedErrors;
    });
  };

  const validate = () => {
    const newErrors = {};
    const email = formData.email.trim();

    if (!formData.fullname.trim()) newErrors.fullname = "Full name is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }
    
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.progress) newErrors.progress = "Progress status is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsPending(true);
    setSuccessMessage("");
    setMessageType("");

    try {
      const response = await fetch("https://api.digitalworldtech.academy/brochure.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          fullname: "",
          email: "",
          phone: "",
          location: "",
          progress: "",
          course: title,
          brochure: courseBorchure,
        });
        setErrors({});
        setSuccessMessage("Form submitted successfully! Check your email shortly.");
        setMessageType("success");
        setTimeout(() => setSuccessMessage(""), 5000);
      } else {
        const errorData = await response.json();
        setSuccessMessage(errorData?.message || "Submission failed. Please try again.");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccessMessage("Something went wrong. Please check your connection and try again.");
      setMessageType("error");
    } finally {
      setIsPending(false);
    }
  };

  // Framer Motion Variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
  };

  return (
    <section id="contact-page" className="relative w-full py-20 lg:py-32 bg-[#212121] border-t border-white/5 overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#F7941D] opacity-[0.03] blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Info & Benefits */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <motion.h3 
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Want to join the <span className="text-[#F7941D]">{title}</span> class?
            </motion.h3>
            
            <motion.p 
              variants={fadeUp}
              className="text-gray-400 text-lg leading-relaxed mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Fill out this form to receive all the information you need to make the right decision for your career:
            </motion.p>
            
            {/* Custom Styled List */}
            <motion.ul variants={staggerContainer} className="flex flex-col gap-5">
              {[
                "Receive complete program details & curriculum",
                "Discover our hands-on teaching methodology",
                "Move forward with your tech career journey"
              ].map((text, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#F7941D]/10 border border-[#F7941D]/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#F7941D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-gray-300 font-medium text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>{text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right Column: Form Container */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
            className="bg-[#1A1A1A] border border-white/5 p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative"
          >
            {/* Status Message */}
            {successMessage && (
              <div className={`mb-6 p-4 rounded-xl text-sm font-semibold border ${messageType === 'success' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                {successMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
              
              {/* Full Name */}
              <div className="flex flex-col">
                <input
                  type="text" name="fullname" placeholder="Full Name" value={formData.fullname} onChange={handleChange}
                  className={`w-full bg-[#2A2A2A] text-white placeholder-gray-500 border rounded-xl px-5 py-4 focus:outline-none transition-colors ${errors.fullname ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#F7941D]'}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
                {errors.fullname && <span className="text-red-400 text-xs mt-1 ml-1">{errors.fullname}</span>}
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <input
                    type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange}
                    className={`w-full bg-[#2A2A2A] text-white placeholder-gray-500 border rounded-xl px-5 py-4 focus:outline-none transition-colors ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#F7941D]'}`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                  {errors.email && <span className="text-red-400 text-xs mt-1 ml-1">{errors.email}</span>}
                </div>

                <div className="flex flex-col">
                  <input
                    type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange}
                    className={`w-full bg-[#2A2A2A] text-white placeholder-gray-500 border rounded-xl px-5 py-4 focus:outline-none transition-colors ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#F7941D]'}`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                  {errors.phone && <span className="text-red-400 text-xs mt-1 ml-1">{errors.phone}</span>}
                </div>
              </div>

              {/* Progress Select */}
              <div className="flex flex-col">
                <select
                  name="progress" value={formData.progress} onChange={handleChange}
                  className={`w-full bg-[#2A2A2A] text-white border rounded-xl px-5 py-4 focus:outline-none transition-colors appearance-none cursor-pointer ${errors.progress ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#F7941D]'}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <option value="" disabled className="text-gray-500">How far are you in your training project?*</option>
                  <option value="beginner">Beginner: I need guidance</option>
                  <option value="intermediate">Intermediate: I want to develop</option>
                  <option value="advanced">Advanced: I need more experience</option>
                </select>
                {errors.progress && <span className="text-red-400 text-xs mt-1 ml-1">{errors.progress}</span>}
              </div>

              {/* Location Select */}
              <div className="flex flex-col">
                <select
                  name="location" value={formData.location} onChange={handleChange}
                  className={`w-full bg-[#2A2A2A] text-white border rounded-xl px-5 py-4 focus:outline-none transition-colors appearance-none cursor-pointer ${errors.location ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#F7941D]'}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <option value="" disabled className="text-gray-500">Select Location</option>
                  <option value="nigeria">Online (Global)</option>
                  <option value="physical">Physical Class (Ikorodu)</option>
                </select>
                {errors.location && <span className="text-red-400 text-xs mt-1 ml-1">{errors.location}</span>}
              </div>

              {/* Submit Button */}
              <button 
                  type="submit" 
                  disabled={isPending}
                  className={`w-full py-4 mt-2 rounded-full font-bold text-lg transition-all duration-300 ${isPending ? 'bg-white/10 text-gray-400 cursor-not-allowed' : 'bg-[#F7941D] text-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] shadow-[0_0_20px_rgba(247,148,29,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1'}`}
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                  {isPending ? (
                      <span className="flex items-center justify-center gap-3">
                          <svg className="animate-spin h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                          Submitting...
                      </span>
                  ) : "Submit Request"}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default FormCard;