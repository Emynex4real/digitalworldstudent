import React, { useState } from "react";
import "./formpopup.css"; // You can define styles here or use Tailwind

const FormPopup = ({ title, courseBorchure, isOpen, onClose, advisorVideo }) => {
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
    else if (!/^\d{10,15}$/.test(formData.phone)) newErrors.phone = "Phone number must be 10 to 15 digits";
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

//   if (!isOpen) ;

  return (
    <div onClick={onClose} className="popup-overlay">
      <div onClick={(e) =>{e.stopPropagation()}} className="popup-form">
        <button className="popup-close" onClick={onClose}>×</button>

        {submitSuccess ? (
           <div class="video-container">
           <div class="success-message">
             <img className="success-img" src="./img/check_orange.svg" alt="Success Icon" />
             <h1 className="success-title">Submission successful!</h1>
             <h4 className="sub-heading">Our course outline would be sent to you shortly.</h4>
             <p class="subtext">Kindly go through the course videos as you wait.</p>
           </div>
   
           <div class="video-section">
             <h3>Course Introduction</h3>
             <p>Start your learning journey with this brief overview of what the course covers and how it will benefit you.</p>
             <div class="video-wrapper">
               {advisorVideo}
             </div>
           </div>
   
           <div class="video-section">
             <h3> Practical Session</h3>
             <p>Apply what you've learned with this hands-on session that walks you through real-world implementation.</p>
             <div class="video-wrapper">
               {advisorVideo}
             </div>
           </div>
         </div>
   
        ) : (
          <>

<h2>Want to join the <span>{title}</span> class?</h2>
            <p>Fill out this form to receive all the information:</p>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="">Full Name:</label>
              <input type="text" name="fullname" placeholder="Full name" value={formData.fullname}
                onChange={handleChange} className={errors.fullname ? "input-error" : ""} />
              {errors.fullname && <span className="error">{errors.fullname}</span>}
              </div>
              <div>
                <label htmlFor="">Phone Number:</label>
              <input type="tel" name="phone" placeholder="+234 9077019768" value={formData.phone}
                onChange={handleChange} className={errors.phone ? "input-error" : ""} />
              {errors.phone && <span className="error">{errors.phone}</span>}
              </div>

              <div>
                <label htmlFor="">Email:</label>
                <input type="email" name="email" placeholder="youremail@example.com" value={formData.email}
                  onChange={handleChange} className={errors.email ? "input-error" : ""} />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div>
                <label htmlFor="">Location:</label>                
              <select name="location" value={formData.location} onChange={handleChange}
                className={errors.location ? "input-error" : ""}>
                <option value="">Select Location</option>
                <option value="nigeria">Nigeria Online Hackerspace</option>
                <option value="physical">Physical Class</option>
              </select>
              {errors.location && <span className="error">{errors.location}</span>}
              </div>

              <div>
                <label htmlFor="">How :</label>
              <select name="progress" value={formData.progress} onChange={handleChange}
                className={errors.progress ? "input-error" : ""}>
                <option value="">Select Progress Level</option>
                <option value="beginner">Beginner: I need guidance</option>
                <option value="intermediate">Intermediate: I want to develop</option>
                <option value="advanced">Advanced: I need more experience</option>
              </select>
              {errors.progress && <span className="error">{errors.progress}</span>}
              </div>


              {errors.submit && <span className="error">{errors.submit}</span>}

              <button type="submit" className="btn-submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default FormPopup;
// This code defines a React component for a form popup that collects user information and submits it to an API. It includes validation, error handling, and a success message upon successful submission. The component is styled using CSS classes.
// The form includes fields for full name, email, phone number, location, and progress level. The component uses state to manage form data, errors, and submission status. It also includes a close button to hide the popup.
// The form is designed to be reusable and can be integrated into a larger application. The component is exported for use in other parts of the application.
// The code is structured to ensure a good user experience, with clear error messages and a responsive design. The form submission is handled asynchronously, and the component provides feedback to the user based on the submission result.