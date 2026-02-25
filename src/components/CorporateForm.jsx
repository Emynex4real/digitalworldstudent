import React, { useState } from 'react';
import './CorporateForm.css';

const CorporateTrainingForm = ({onclose}) => {
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    address: '',
    contactPerson: '',
    email: '',
    phone: '',
    trainingCategories: [],
    otherCategory: '',
    trainingMode: '',
    preferredCallDate: '',
    callMethod: '',
    comments: '',
  });



  const trainingOptions = [
    'Data Analysis', 'Cybersecurity', 'Digital Marketing', 'Cloud Computing',
    'Business Analysis', 'Project Management', 'Web Development', 'UI/UX'
  ];

  const callMethods = ['Phone call', 'Whatsapp call', 'Zoom call'];
  const trainingModes = ['On-site', 'Online', 'Hybrid'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox' && name === 'trainingCategories') {
      setFormData((prev) => {
        const updated = checked
          ? [...prev.trainingCategories, value]
          : prev.trainingCategories.filter((item) => item !== value);
        return { ...prev, trainingCategories: updated };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    setShowModal(false);
  };

 

  return (

    <>
        <div  onClick={onclose} className="modal-overlay">
            <form className="form-card" onSubmit={handleSubmit}  onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={onclose}>×</button>
              <h2>Apply now</h2>
              <p>Fill out this form, and we will forward your information to our training team!</p>

              <div className="form-row">
                <div className="form-group floating-label">
                  <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder=" " required />
                  <label>Company Name</label>
                </div>
                <div className="form-group floating-label">
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder=" " required />
                  <label>Email <span className="required">*</span></label>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group floating-label">
                  <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder=" " required />
                  <label>Phone Number <span className="required">*</span></label>
                </div>
                <div className="form-group floating-label">
                  <input type="text" name="industry" value={formData.industry} onChange={handleChange} placeholder=" " />
                  <label>Industry</label>
                </div>
              </div>

              <div className="form-group floating-label">
                <textarea name="address" value={formData.address} onChange={handleChange} placeholder=" " />
                <label>Company Address</label>
              </div>

              <div className="form-group floating-label">
                <input name="contactPerson" value={formData.contactPerson} onChange={handleChange} placeholder=" " />
                <label>Contact Person</label>
              </div>

              <div className="form-group">
                <label>Training Category (Select one or more)</label>
                <div className="horizontal-options wrap-options">
                  {trainingOptions.map((option) => (
                    <label key={option} className={`option-pill ${formData.trainingCategories.includes(option) ? 'selected' : ''}`}>
                      <input type="checkbox" name="trainingCategories" value={option} checked={formData.trainingCategories.includes(option)} onChange={handleChange} hidden />
                      {option}
                    </label>
                  ))}
                </div>
                <div className="form-group floating-label">
                  <input type="text" name="otherCategory" value={formData.otherCategory} onChange={handleChange} placeholder=" " />
                  <label>Other (specify)</label>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Preferred Mode of Training</label>
                  <div className="horizontal-options">
                    {trainingModes.map((mode) => (
                      <label key={mode} className={`option-pill ${formData.trainingMode === mode ? 'selected' : ''}`}>
                        <input type="radio" name="trainingMode" value={mode} checked={formData.trainingMode === mode} onChange={handleChange} hidden />
                        {mode}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>Preferred Call Method</label>
                  <div className="horizontal-options">
                    {callMethods.map((method) => (
                      <label key={method} className={`option-pill ${formData.callMethod === method ? 'selected' : ''}`}>
                        <input type="radio" name="callMethod" value={method} checked={formData.callMethod === method} onChange={handleChange} hidden />
                        {method}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="form-group floating-label">
                <textarea name="comments" value={formData.comments} onChange={handleChange} placeholder=" " />
                <label>Training Objectives / Comments</label>
              </div>

              <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    </>
  );
};

export default CorporateTrainingForm;
