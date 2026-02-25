import { useState } from "react";
import React, {useRef} from 'react';
import '../../components/courses/courseAdvisor.css';
import countryCode from "../../data/countryCode.json"
import CourseAdvisorPopup from './courseAdvisorPopup'
import close from '../../assets/images/close.svg'

function CourseAdvisor({ onClose, title, advisorVideo}) {
  // const videoRef = useRef(null);
  const dateRef = useRef(null);
  const timeRef = useRef(null);

  const [displayPopup, setDisplayPopup] = useState(false);


  const handleOpenTime = () => {
    timeRef.current.showPicker();
  };
  const date = new Date();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    location: "",
    course: title,
    countryCode: "",
    pastTraining: "",
    goals: "",
    referralSource: "",
    availableTime: "",
    contactMethod: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  if (submitSuccess) {
    setTimeout(() => {
     setDisplayPopup(true);
    }, 5000);
  }

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
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required.";
    if (!formData.location) newErrors.location = "Location is required.";
    if (!formData.availableTime.trim()) newErrors.availableTime = "Availability is required.";

    const phoneRegexByCountry = {
      "+1": /^[2-9]\d{2}[2-9]\d{2}\d{4}$/,
      "+44": /^[1-9]\d{9}$/,
      "+234": /^\d{10}$/
    };

    const phoneRegex = phoneRegexByCountry[formData.countryCode];
    if (phoneRegex && !phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = `Invalid phone number for ${formData.countryCode}.`;
    }

    if (!formData.pastTraining) newErrors.pastTraining = "Please select if you have past training.";
    if (!formData.goals) newErrors.goals = "Please select your goal for this course.";
    if (!formData.referralSource) newErrors.referralSource = "Please select how you heard about us.";
    if (!formData.contactMethod) newErrors.contactMethod = "Please select a preferred contact method.";

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
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      
      setSubmitSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
      setErrors(prev => ({ ...prev, submit: "Something went wrong. Please try again." }));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (

        <div onClick={onClose} className="main-container">
      <div onClick={(e) => e.stopPropagation()} className="forms-container">
           <div className="success-message">
        <div className="close-button" onClick={onClose}>
          <img src="./images/close.svg" alt="Close" />
        </div>

        <div class="video-container">
        <div class="success-message">
          <img src="./img/check_orange.svg" alt="Success Icon" />
          <h1 className="success-title">Submission successful!</h1>
          <h4 className="sub-heading">Our course advisor will be in touch with you shortly.</h4>
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

      {displayPopup && <CourseAdvisorPopup onClose={() => setDisplayPopup(false)} />}
    </div>
     
      </div>

    </div>
   
    )
  }

let videoSrc = advisorVideo;
let videoContainer = document.querySelector('.video-container');
console.log(videoSrc)
console.log(videoContainer)
// videoContainer.appendChild(videoSrc)

  return (
    <div onClick={onClose} className="main-container">
      <div onClick={(e) => e.stopPropagation()} className="forms-container">
        <div className="close-button" onClick={onClose}>
          <img src={close}alt="Close" />
        </div>
        <h1>Fill out the form to get a call from an educational advisor</h1>
        <p>Fill out the form to get a call from an educational advisor</p>
        <form onSubmit={handleSubmit}>
          {/* First and Last Name */}
          <div className="input-group">
            <div className="first-name">
              <label>First Name*</label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                style={{ borderColor: errors.firstName ? 'red' : '' }}
              />
              {errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>
            <div className="last-name">
              <label>Last Name*</label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                style={{ borderColor: errors.lastName ? 'red' : '' }}
              />
              {errors.lastName && <span className="error">{errors.lastName}</span>}
            </div>
          </div>

          {/* Email and Phone */}
          <div className="input-group">
            <div className="email">
              <label>Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                style={{ borderColor: errors.email ? 'red' : '' }}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="phone-container">
              <label>Country Code*</label>
              <div className="phone-group">
                <div className="countrycode">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                  >
                    {countryCode.countries.map((country, index) => (
                      <option key={index} value={country.code}>
                        {country.name} ({country.code})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="number">
                  <input
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    style={{ borderColor: errors.phoneNumber ? 'red' : '' }}
                  />
                </div>
              </div>
                  {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
            </div>
          </div>

          {/* Location */}
          <div className="form-location">
            <label>Location*</label>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              style={{ borderColor: errors.location ? 'red' : '' }}
            >
              <option value="">Select your location</option>
              <option value="Ikorodu Garage">Ikorodu Garage</option>
              <option value="Ikorodu Benson">Ikorodu Benson</option>
              <option value="Agric Ikorodu">Agric Ikorodu</option>
              <option value="Online">Online</option>
            </select>
            {errors.location && <span className="error">{errors.location}</span>}
          </div>
            <input type="hidden" name="course" value={formData.course} />
          {/* Past Training */}
          <label>Past Training*</label>
          <select
            name="pastTraining"
            value={formData.pastTraining}
            onChange={handleChange}
            style={{ borderColor: errors.pastTraining ? 'red' : '' }}
          >
            <option value="">Choose Yes Or No</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errors.pastTraining && <span className="error">{errors.pastTraining}</span>}

          {/* Goals */}
          <label>Your goal for this course*</label>
          <select
            name="goals"
            value={formData.goals}
            onChange={handleChange}
            style={{ borderColor: errors.goals ? 'red' : '' }}
          >
            <option value="">Your goal for this course</option>
            <option value="Finding Job">Finding Job</option>
            <option value="Freelancing">Freelancing</option>
            <option value="Career Change">Career Change</option>
          </select>
          {errors.goals && <span className="error">{errors.goals}</span>}

          {/* Referral */}
          <label>How did you hear about us?*</label>
          <select
            name="referralSource"
            value={formData.referralSource}
            onChange={handleChange}
            style={{ borderColor: errors.referralSource ? 'red' : '' }}
          >
            <option value="">Select an option</option>
            <option value="Facebook">Facebook</option>
            <option value="Instagram">Instagram</option>
            <option value="Tiktok">Tiktok</option>
            <option value="Youtube">YouTube</option>
          </select>
          {errors.referralSource && <span className="error">{errors.referralSource}</span>}
          <div className="availability-container ">
          <label>When are you available for a call?*</label>

            <div className="availability-time">
          {/* Availability */}
          
          <input
            type="datetime-local"
            name="availableTime" 
            ref={timeRef}

            value={formData.availableTime}
            onChange={handleChange}
            onClick={handleOpenTime}
            placeholder="When are you available for a call?"
            style={{ borderColor: errors.availableTime ? 'red' : '' }}
          /> 
          {errors.availableTime && <span className="error">{errors.availableTime}</span>}
            </div>
          </div>
          {/* Contact Method */}
          <label>Preferred Contact Method*</label>
          <select
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
            style={{ borderColor: errors.contactMethod ? 'red' : '' }}
          >
            <option value="">Choose contact method</option>
            <option value="Phone call">Phone Call</option>
            <option value="Zoom call">Zoom Call</option>
            <option value="WhatsApp call">WhatsApp Call</option>
          </select>
          {errors.contactMethod && <span className="error">{errors.contactMethod}</span>}

          {errors.submit && <span className="error">{errors.submit}</span>}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
        
      </div>
      
    </div>
    
  );
}

export default CourseAdvisor;
