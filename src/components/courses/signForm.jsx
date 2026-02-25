import React, { useState } from "react";
import "../../components/courses/signForm.css"

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
  const [messageType, setMessageType] = useState("");

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
    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Invalid email address";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10,15}$/.test(formData.phone)) newErrors.phone = "Invalid phone number";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.progress.trim()) newErrors.progress = "Progress status is required";

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
        setSuccessMessage("Form submitted successfully!");
        setMessageType("success-message");
        setTimeout(() => setSuccessMessage(""), 5000);
      } else {
        const errorData = await response.json();
        setSuccessMessage(errorData?.message || "Submission failed.");
        setMessageType("error-message");
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccessMessage("Something went wrong. Please try again.");
      setMessageType("error-message");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div id="contact-page">
      <section className="contact-wrapper">
        <section className="contact-containers">
          <div className="contact-infos">
            <h3>
              Want to join the <span>{title}</span> class?
            </h3>
            <p className="description">Fill out this form to receive all the information:</p>
            <ul>
              <li>✅ Receive program details</li>
              <li>✅ Discover our methodology</li>
              <li>✅ Move forward with your learning project</li>
            </ul>
          </div>

          <div className="contact-forms">
          <h3>
            {successMessage && <p className={`success-message ${messageType}`}>{successMessage}</p>}
            {isPending && <p className="success-message">Submitting Form...</p>} <p>Fill out this form to receive all the information:</p></h3>

            <form onSubmit={handleSubmit}>
              <div className="form-rows">
                <input
                  className={errors.fullname ? "error-border" : ""}
                  type="text"
                  name="fullname"
                  placeholder="Full Name"
                  value={formData.fullname}
                  onChange={handleChange}
                />
                {errors.fullname && <small>{errors.fullname}</small>}
              </div>


              <div className="form-rows">
                <input
                  className={errors.phone ? "error-border" : ""}
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <small>{errors.phone}</small>}
              </div>

              <div className="form-rows">
                <input
                  className={errors.email ? "error-border" : ""}
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <small>{errors.email}</small>}
              </div>


              <div className="form-rows">
                <select
                  name="progress"
                  value={formData.progress}
                  onChange={handleChange}
                  className={errors.progress ? "error-border" : ""}
                >
                  <option value="" disabled selected>How far are you in your training project?*</option>
                  <option value="beginner">Beginner: I need guidance</option>
                  <option value="intermediate">Intermediate: I want to develop</option>
                  <option value="advanced">Advanced: I need more experience</option>
                </select>
                {errors.progress && <small>{errors.progress}</small>}
              </div>

              <div className="form-rows">
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className={errors.location ? "error-border" : ""}
                >
                  <option value="" disabled selected aria-disabled="true">Select Location</option>
                  <option value="nigeria">Nigeria Online Hackerspace</option>
                  <option value="physical">Physical Class</option>
                </select>
                {errors.location && <small>{errors.location}</small>}
              </div>

              <button type="submit" disabled={isPending}>
                {isPending ? "Submitting Form..." : "Submit"}
              </button>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
}

export default FormCard;
