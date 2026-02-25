import React, { useState } from "react";
import { motion } from "framer-motion";
import Banner from "../Banner"; 
import CTASectionContact from "../CallToActionContact";
import BannerImg from '../../assets/images/contactusbanner.jpg';

function Contactpage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [isPending, setIsPending] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        setErrors(prev => {
            const updatedErrors = { ...prev };
            delete updatedErrors[name];
            return updatedErrors;
        });
    };

    const validate = () => {
        const newError = {};
        const email = formData.email.trim();
        
        if (!formData.firstName.trim()) newError.firstName = "First Name is required";
        if (!formData.lastName.trim()) newError.lastName = "Last Name is required";
        
        if (!email) {
            newError.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { // Fixed regex bug here
            newError.email = "Invalid Email Address";
        }
        
        if (!formData.phoneNumber.trim()) {
            newError.phoneNumber = "Phone number is required";
        } else if (!/^\+?\d{10,15}$/.test(formData.phoneNumber)) { // Added optional '+' for country codes
            newError.phoneNumber = "Invalid phone number";
        }
        
        if (!formData.message.trim()) newError.message = "Message is required";
        
        return newError;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationError = validate();

        if (Object.keys(validationError).length === 0) {
            setIsPending(true);
            setSuccessMessage(''); 
            setMessageType('');
            
            try {
                const response = await fetch('https://api.digitalworldtech.academy/contact_form.php', {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    setFormData({ firstName: "", lastName: "", email: "", phoneNumber: "", message: "" });
                    setErrors({});
                    setSuccessMessage('Form Submitted Successfully! We will get back to you shortly.');
                    setMessageType('success');
                    setTimeout(() => setSuccessMessage(''), 5000); 
                } else {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Submission failed');
                } 
            } catch (error) {
                console.error(`Error: ${error}`);
                setSuccessMessage('Something went wrong. Please try again later.');
                setMessageType('error');
                setTimeout(() => setSuccessMessage(''), 5000);
            } finally {
                setIsPending(false);
            }
        } else {
            setErrors(validationError);
        } 
    };

    // Framer Motion Variants
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    return (
        <main id="contact-page" className="bg-[#212121] min-h-screen w-full overflow-hidden">
            <Banner startText="Contact" text="Us" BannerImage={BannerImg} />
            
            <section className="relative w-full py-20 lg:py-32 z-10">
                {/* Ambient Glow */}
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#F7941D] opacity-[0.03] blur-[150px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                        
                        {/* Left Side: Contact Info */}
                        <motion.div 
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="flex flex-col gap-8"
                        >
                            <div>
                                <motion.h3 
                                    variants={fadeUpVariants}
                                    className="text-4xl md:text-5xl font-bold text-white mb-6"
                                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                                >
                                    Get in <span className="text-[#F7941D]">Touch</span>
                                </motion.h3>
                                <motion.p variants={fadeUpVariants} className="text-gray-400 text-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Whether you have a question about our courses, pricing, or physical branches, our team is ready to answer all your questions.
                                </motion.p>
                            </div>

                            <div className="flex flex-col gap-6 mt-4">
                                {/* Email Card */}
                                <motion.div variants={fadeUpVariants} className="flex items-start gap-5 bg-[#1A1A1A] p-6 rounded-2xl border border-white/5 shadow-lg group hover:border-[#F7941D]/30 transition-colors">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F7941D]/10 transition-colors">
                                        <i className="fas fa-envelope text-xl text-[#F7941D]"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Email Us</h4>
                                        <a href="mailto:contactdigitalworldnow@gmail.com" className="text-gray-400 hover:text-[#F7941D] transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>contactdigitalworldnow@gmail.com</a>
                                    </div>
                                </motion.div>

                                {/* Phone Card */}
                                <motion.div variants={fadeUpVariants} className="flex items-start gap-5 bg-[#1A1A1A] p-6 rounded-2xl border border-white/5 shadow-lg group hover:border-[#F7941D]/30 transition-colors">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F7941D]/10 transition-colors">
                                        <i className="fas fa-phone text-xl text-[#F7941D]"></i>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h4 className="text-white font-bold mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Call Us</h4>
                                        <a href="tel:+2348120160899" className="text-gray-400 hover:text-[#F7941D] transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>+234-812-016-0899</a>
                                        <a href="tel:+2349164938620" className="text-gray-400 hover:text-[#F7941D] transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>+234-916-493-8620</a>
                                    </div>
                                </motion.div>

                                {/* Locations Card */}
                                <motion.div variants={fadeUpVariants} className="flex items-start gap-5 bg-[#1A1A1A] p-6 rounded-2xl border border-white/5 shadow-lg group hover:border-[#F7941D]/30 transition-colors">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F7941D]/10 transition-colors mt-1">
                                        <i className="fas fa-map-marker-alt text-xl text-[#F7941D]"></i>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h4 className="text-white font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Our Locations (Ikorodu, Lagos)</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                                            • 50 Lagos Road, beside Ecobank, Ikorodu 105102.<br/>
                                            • Agric Bus Stop, 27 Owutu-Isawo Rd, Owutu.<br/>
                                            • 64 Oba Ayangburen Road, beside GT Bank.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Right Side: Form */}
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
                            className="bg-[#2A2A2A]/40 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
                        >
                            {/* Form Header */}
                            <div className="mb-8">
                                <h3 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Send a Message</h3>
                                <p className="text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Fill out the form below and we'll get back to you within 24 hours.</p>
                            </div>

                            {/* Status Messages */}
                            {successMessage && (
                                <div className={`mb-6 p-4 rounded-xl text-sm font-semibold border ${messageType === 'success' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                                    {successMessage}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                                
                                {/* Row 1 */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col">
                                        <input 
                                            type="text" 
                                            name="firstName" 
                                            placeholder="First Name" 
                                            value={formData.firstName} 
                                            onChange={handleChange} 
                                            className={`w-full bg-[#1A1A1A] text-white placeholder-gray-500 border rounded-xl px-5 py-4 focus:outline-none transition-colors ${errors.firstName ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#F7941D]'}`}
                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                        />
                                        {errors.firstName && <span className="text-red-400 text-xs mt-2 ml-1" style={{ fontFamily: "'Inter', sans-serif" }}>{errors.firstName}</span>}
                                    </div>

                                    <div className="flex flex-col">
                                        <input 
                                            type="text" 
                                            name="lastName" 
                                            placeholder="Last Name" 
                                            value={formData.lastName} 
                                            onChange={handleChange} 
                                            className={`w-full bg-[#1A1A1A] text-white placeholder-gray-500 border rounded-xl px-5 py-4 focus:outline-none transition-colors ${errors.lastName ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#F7941D]'}`}
                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                        />
                                        {errors.lastName && <span className="text-red-400 text-xs mt-2 ml-1" style={{ fontFamily: "'Inter', sans-serif" }}>{errors.lastName}</span>}
                                    </div>
                                </div>

                                {/* Row 2 */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col">
                                        <input 
                                            type="email" 
                                            name="email" 
                                            placeholder="Email Address" 
                                            value={formData.email} 
                                            onChange={handleChange} 
                                            className={`w-full bg-[#1A1A1A] text-white placeholder-gray-500 border rounded-xl px-5 py-4 focus:outline-none transition-colors ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#F7941D]'}`}
                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                        />
                                        {errors.email && <span className="text-red-400 text-xs mt-2 ml-1" style={{ fontFamily: "'Inter', sans-serif" }}>{errors.email}</span>}
                                    </div>

                                    <div className="flex flex-col">
                                        <input 
                                            type="text" 
                                            name="phoneNumber" 
                                            placeholder="Phone Number" 
                                            value={formData.phoneNumber} 
                                            onChange={handleChange} 
                                            className={`w-full bg-[#1A1A1A] text-white placeholder-gray-500 border rounded-xl px-5 py-4 focus:outline-none transition-colors ${errors.phoneNumber ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#F7941D]'}`}
                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                        />
                                        {errors.phoneNumber && <span className="text-red-400 text-xs mt-2 ml-1" style={{ fontFamily: "'Inter', sans-serif" }}>{errors.phoneNumber}</span>}
                                    </div>
                                </div>

                                {/* Textarea */}
                                <div className="flex flex-col">
                                    <textarea 
                                        name="message" 
                                        placeholder="Write your message here..." 
                                        rows="5" 
                                        value={formData.message} 
                                        onChange={handleChange} 
                                        className={`w-full bg-[#1A1A1A] text-white placeholder-gray-500 border rounded-xl px-5 py-4 focus:outline-none transition-colors resize-none ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#F7941D]'}`}
                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                    ></textarea>
                                    {errors.message && <span className="text-red-400 text-xs mt-2 ml-1" style={{ fontFamily: "'Inter', sans-serif" }}>{errors.message}</span>}
                                </div>

                                {/* Submit Button */}
                                <button 
                                    type="submit" 
                                    disabled={isPending}
                                    className={`w-full py-5 rounded-full font-bold text-lg transition-all duration-300 mt-2 ${isPending ? 'bg-white/10 text-gray-400 cursor-not-allowed' : 'bg-[#F7941D] text-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] shadow-[0_0_20px_rgba(247,148,29,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1'}`}
                                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                                >
                                    {isPending ? (
                                        <span className="flex items-center justify-center gap-3">
                                            <svg className="animate-spin h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                            Submitting Form...
                                        </span>
                                    ) : "Send Message"}
                                </button>

                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
            
            <CTASectionContact />
        </main>
    );
}

export default Contactpage;