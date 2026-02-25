import React, { useState } from "react";
import Banner from "../Banner"; // Import the Banner component
import CTASectionContact from "../CallToActionContact";
import BannerImg from '../../assets/images/contactusbanner.jpg'


function Contactpage() {

    const [formData, setFormData] = useState({
        firstName: "",
        phoneNumber: "",
        lastName: "",
        email: "",
        message: ""
    })

    const [errors, setErorrs] =  useState({})
    const [isPending, setIsPending] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [MessageType, setMessageType] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prev => ({...prev, [name] : value}))

        setErorrs(prev => {
            const updatedErrors = { ...prev };
            delete updatedErrors[name];
            return updatedErrors;
        });
    }

    const validate = ()=> {

        const newError = {}
        const email = formData.email.trim();
        if (!formData.firstName.trim()) {newError.firstName = "First Name Is Required"} ;
        if (!formData.lastName.trim()) {newError.lastName = "Last Name Is Required"};
        if (!email) newError.email = "Email Is Required";
        else if(/!^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newError.email = "Invaild Email Address";
        if (!formData.phoneNumber.trim()) newError.phoneNumber = "Mobile number is required";
        else if (!/^\d{10,15}$/.test(formData.phoneNumber)) newError.phoneNumber = "Invalid mobile number";
        if (!formData.message.trim()) newError.message = "Message is required";
        return newError;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationError = validate();

        if (Object.keys(validationError).length === 0) {
            setIsPending(true);
            setSuccessMessage(''); // Clear old messages
            setMessageType();
            try {
                const response  = await fetch('https://api.digitalworldtech.academy/contact_form.php', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify(formData)

                });

                if (response.ok) {
                    setFormData({
                        firstName: "",
                        phoneNumber: "",
                        lastName: "",
                        email: "",
                        message: ""
                    });
                    setErorrs({});
                    setSuccessMessage('Form Submitted Successfully!')
                    setTimeout(() => setSuccessMessage(), 5000); // Auto-hide after 5s
                    setMessageType('');

                } else {
                    const errorData = await response.json();
                } 
            } catch (error){
                console.error(`Error: ${error}`)
                setSuccessMessage('Something went wrong. Please try again.');
                setMessageType('error-message');
                setTimeout(() => setSuccessMessage(), 5000);

            }finally {
                setIsPending(false);
              }
        } else {
            setErorrs(validationError);
        } 
    }

    return (
        <div id="contact-page">
            <Banner startText="Contact" text="Us" BannerImage={BannerImg} />
            <section className="contact-wrapper">
                <section className="contact-container">
                    <div className="contact-info">
                        <h3>Contact Info</h3>
                        <p><i className="fas fa-envelope"></i> contactdigitalworldnow@gmail.com</p>
                        <p><i className="fas fa-phone"></i> +234-812-016-0899</p>
                        <p><i className="fas fa-phone"></i> +234-916-493-8620</p>
                        <p><i className="fas fa-map-marker-alt"></i> 50 lagos road ikorodu,<br /> beside ecobank, ikorodu, Lagos 105102, Lagos.</p>
                        <p><i className="fas fa-map-marker-alt"></i> Agric Bus Stop, Ikorodu, 27 Owutu-Isawo Rd, Owutu<br /> Ikorodu, Ikorodu, Lagos 102222, Lagos.</p>
                        <p><i className="fas fa-map-marker-alt"></i> 64, Oba Ayangburen Road, beside GT Bank, Opposite Nipco filling station, <br /> Ikorodu, Lagos State, Nigeria..</p>
                    </div>

                    <div className="contact-form">
                           
                        <h3>
                        {successMessage && <p className={`success-message + ${MessageType}`}>{successMessage}</p>}
                        {isPending && <p className="success-message">Submitting Form...</p>}
                            Send a Message</h3>
                        
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                               <div>
                               <input className={errors.firstName ? "error-border" : ""} type="text" placeholder="First Name"  name="firstName"  value={formData.firstName}  onChange={handleChange} onKeyUp={handleChange}/>
                               {errors.firstName &&  <small>{errors.firstName}</small>}
                               </div>

                                <div>
                                <input type="text" className={errors.lastName ? "error-border" : ""} name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} onKeyUp={handleChange}  />
                                {errors.lastName &&  <small>{errors.lastName}</small>}
                                </div>
                            </div>
                            <div className="form-row">

                                <div>
                                <input type="email" className={errors.email ? "error-border" : ""} name="email"  placeholder="Email" value={formData.email} onChange={handleChange} onKeyUp={handleChange}  />
                                {errors.email &&  <small>{errors.email}</small>}
                                </div>
                               <div>
                               <input type="text" className={errors.phoneNumber ? "error-border" : ""} name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} onKeyUp={handleChange}  />
                               {errors.mobile &&  <small>{errors.phoneNumber}</small>}
                               </div>
                            </div>
                            <div className="form-row message">
                                <textarea className={errors.message ? "error-border" : ""} name="message" placeholder="Write Your Message Here." rows="4" value={formData.message} onChange={handleChange} onKeyUp={handleChange} ></textarea>
                                {errors.message &&  <small>{errors.message}</small>   }
                            </div>
                            <button type="submit">{isPending ? 'Submitting Form...' : "submit"}</button>
                        </form>
                    </div>
                </section>
            </section>
           <CTASectionContact/>
            
        </div>
    );
}

export default Contactpage;
