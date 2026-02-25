import React from 'react'
import { useState } from 'react';
import './Corporate.css';
import CorporateTrainingForm from '../CorporateForm';

export default function CorporatePage() {
  const [displayPopup, setDisplayPopup] = useState(false);
  let scrollTop;

function disableScroll() {
  scrollTop = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollTop}px`;
  document.body.style.width = '100%';
}

function enableScroll() {
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, scrollTop);
}

function stopPorp(e) {
  e.stopPropagation()
}


  if (displayPopup) {
    disableScroll()
  } else {
    enableScroll();
  }

  function hidePopup() {
    setDisplayPopup(false)
  }

  return (
    <>
    <section className='corporate-page'>
    <div className="container-more-fluid">
      <div className='container-main'>
      <div className="container-more">
        <div className="banner-more">
          {/* <!-- HEADER SECTION  --> */}
          <div className="header">
            <div className="logo">
              <img src="images/corporate/dwlogo.png" alt="Digital World Tech Logo" />
            </div>
            <div className="header-cta-more">
              <button onClick={() => setDisplayPopup(true)}>Get a Quotation</button>
            </div>
          </div>

          {/* <!-- hero-more SECTION  --> */}
          <div className="hero-more">
            <div className="hero-more-text">
              <h1>Transform Your Team with Hands-On Tech Training”</h1>
              <p>
                Upskill your workforce in UI/UX, Data Analysis, Cybersecurity &
                more, online or onsite in Lagos and Worldwide
              </p>
              <ul>
                <li>Online & Onsite</li>
                <li>Expert-Led</li>
                <li>Certified</li>
              </ul>
              <button className='request-prop'>Request a Proposal</button>
            </div>
            
            <div className="hero-more-img">
              <img src="images/corporate/Group 1321314891.png" alt="" />
            </div>
          </div>
          <div className="spring-more">
            <img src="images/corporate/spring.png" alt="Spring" />
          </div>
        </div>
      </div>
      </div>

      {/* <!-- WHY CHOOSE US  --> */}
      <div className="about-us">
        <h1>Why Choose Us</h1>
        <h2>Why Over 10+ Organizations Trust DWTA”</h2>

        <div className="about-details">
          <div className="about-item">
            <div className="about-icon">
              <img src="images/corporate/about-icon1.png" alt="" />
            </div>
            <h2>5000+ Trained</h2>
          </div>
          <div className="about-item">
            <div className="about-icon">
              <img src="images/corporate/about-icon2.png" alt="" />
            </div>
            <h2>10+ Instructors</h2>
          </div>
          <div className="about-item">
            <div className="about-icon">
              <img src="images/corporate/about-icon3.png" alt="" />
            </div>
            <h2>Flexible Training Mode</h2>
          </div>
          <div className="about-item">
            <div className="about-icon">
              <img src="images/corporate/about-icon4.png" alt="" />
            </div>
            <h2>Tailored Curriculum</h2>
          </div>
          <div className="about-item">
            <div className="about-icon">
              <img src="images/corporate/about-icon5.png" alt="" />
            </div>
            <h2>Certification Included</h2>
          </div>
        </div>
      </div>

      {/* form */}
      { displayPopup && <CorporateTrainingForm onclose={() => hidePopup()}/>}

      {/* <!-- COURSES SECTION  --> */}
      <div className="our-courses">
        <h1>What We Teach</h1>
        <h3>Courses We Offer for Corporate Teams</h3>

        <div className="courses">
          <div className="course-item">
            <div className="course-img">
              <img src="images/corporate/Digital Marketing.png" alt="Digital Marketer" />
            </div>
            <div className="course-details">
              <h2>Digital Marketing</h2>
              <p>
                At Digital World Tech Academy, our Digital Marketing Corporate
                Training arm empowers businesses with the tools and strategies
                to thrive in today’s competitive online landscape. We provide
                practical, hands-on training tailored to your team’s
                needs—covering SEO, social media strategy, content marketing,
                email automation, paid advertising, analytics, and more. Whether
                you're looking to upskill your marketing department or build
                in-house expertise from the ground up, our expert-led sessions
                ensure your team can plan, execute, and optimize campaigns that
                drive real results. Let us transform your team into digital
                growth drivers.
              </p>
              <a href="#">Inquire Now</a>
            </div>
          </div>
          <div className="course-item">
            <div className="course-img">
              <img src="images/corporate/Data Analyst.png" alt="Digital Marketer" />
            </div>
            <div className="course-details">
              <h2>Data Analysis</h2>
              <p>
                In the age of big data, organizations that can extract insights
                from information make smarter decisions. Our Data Analysis
                Corporate Training empowers your team to make smarter, faster,
                and more confident business decisions using data. From Excel to
                Power BI, and SQL to Python, we provide hands-on training
                tailored to your industry needs. Participants will learn how to
                collect, clean, analyze, and visualize data to uncover insights
                that drive growth, efficiency, and innovation. Whether your goal
                is performance tracking, customer behavior analysis, or
                forecasting, we help you build an analytical team ready to
                deliver impact.
              </p>
              <a href="#">Inquire Now</a>
            </div>
          </div>
          <div className="course-item">
            <div className="course-img">
              <img src="images/corporate/Project Manager.png" alt="Digital Marketer" />
            </div>
            <div className="course-details">
              <h2>Project Management</h2>
              <p>
                Successful projects don’t happen by chance—they happen by
                design. Our Project Management Corporate Training focuses on
                practical frameworks (including Agile, Scrum, and PMP
                principles) that empower your team to plan, execute, and deliver
                projects on time and within budget. We build confident,
                result-oriented project leaders.
              </p>
              <a href="#">Inquire Now</a>
            </div>
          </div>
          <div className="course-item">
            <div className="course-img">
              <img src="images/corporate/UiUx Designer.png" alt="Digital Marketer" />
            </div>
            <div className="course-details">
              <h2>UI/UX Design</h2>
              <p>
                Exceptional user experience is no longer optional—it’s a
                business advantage. Our UI/UX Corporate Training helps your team
                master modern design tools, wireframing, prototyping, usability
                testing, and user research methodologies. We focus on building
                intuitive, engaging digital products that boost customer
                satisfaction and retention.
              </p>
              <a href="#">Inquire Now</a>
            </div>
          </div>
          <div className="course-item">
            <div className="course-img">
              <img
                src="images/corporate/Cyber Security Expert.png"
                alt="Digital Marketer"
              />
            </div>
            <div className="course-details">
              <h2>Cybersecurity</h2>
              <p>
                With cyber threats growing daily, securing your systems and data
                is critical. Our Cybersecurity Corporate Training empowers your
                IT and operations teams with essential knowledge in risk
                management, threat detection, network security, compliance, and
                incident response. Protect your business by building a
                cyber-aware workforce.
              </p>
              <a href="#">Inquire Now</a>
            </div>
          </div>
          <div className="course-item">
            <div className="course-img">
              <img src="images/corporate/Business Analysis.png" alt="Digital Marketer" />
            </div>
            <div className="course-details">
              <h2>Business Analysis</h2>
              <p>
                Strong business analysis bridges the gap between strategy and
                execution. Our Business Analysis Corporate Training teaches your
                team how to gather, analyze, and communicate business needs
                effectively. From requirements modeling to stakeholder
                management, we help your analysts deliver clear, value-driven
                solutions.
              </p>
              <a href="#">Inquire Now</a>
            </div>
          </div>
          <div className="course-item">
            <div className="course-img">
              <img
                src="images/corporate/frontend developer.jpg"
                alt="Frontend Developer"
              />
            </div>
            <div className="course-details">
              <h2>Frontend Development</h2>
              <p>
                Your company’s digital interface is the gateway to user
                engagement. Our Frontend Development Corporate Training empowers
                your team with the latest skills to design and build beautiful,
                fast, and user-friendly web applications using HTML5, CSS3,
                JavaScript, and modern frameworks like React and Vue.js. From
                creating responsive layouts to optimizing performance and
                accessibility, we prepare your team to deliver outstanding
                frontend experiences that captivate and convert.
              </p>
              <a href="#">Inquire Now</a>
            </div>
          </div>
          <div className="course-item">
            <div className="course-img">
              <img src="images/corporate/backend developer.jpg" alt="Backend Developer" />
            </div>
            <div className="course-details">
              <h2>Backend Development</h2>
              <p>
                The backbone of every powerful application is a robust backend.
                Our Backend Development Corporate Training equips your team with
                essential skills to build scalable, secure, and efficient
                server-side applications using technologies like Node.js,
                Python, Java, databases, and RESTful APIs. From managing data
                flows and authentication to optimizing performance and ensuring
                reliability, we prepare your team to create seamless backend
                solutions that power dynamic, high-performing applications
              </p>
              <a href="#">Inquire Now</a>
            </div>
          </div>
          <div className="course-item">
            <div className="course-img">
              <img src="images/corporate/Cloud Computing.jpg" alt="Cloud Computing" />
            </div>
            <div className="course-details">
              <h2>Cloud Computing</h2>
              <p>
                Unlock the power of the cloud to transform your business
                operations. Our Cloud Computing Corporate Training equips your
                team with the skills to design, deploy, and manage scalable,
                secure, and cost-effective cloud solutions using platforms like
                AWS, Azure, and Google Cloud. From infrastructure fundamentals
                to advanced cloud architecture and security best practices, we
                prepare your workforce to accelerate innovation, improve
                agility, and reduce IT costs—empowering your business to stay
                ahead in a rapidly evolving digital world.
              </p>
              <a href="#">Inquire Now</a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- AUDIENCE  --> */}
      <div className="audience">
        <h1>Audience</h1>
        <h3>Is This For Your Team?</h3>
        <h3>...We train professionals in different sectors.</h3>

        <div className="audience-details">
          <div className="audience-item">
            <h2>START-UPS</h2>
          </div>
          <div className="audience-item">
            <h2>Banks & Financial Institutions</h2>
          </div>
          <div className="audience-item">
            <h2>HR TEAMS</h2>
          </div>
          <div className="audience-item">
            <h2>NGOs</h2>
          </div>
          <div className="audience-item">
            <h2>Government Units</h2>
          </div>
          <div className="audience-item">
            <h2>Telecomms Companies</h2>
          </div>
          <div className="audience-item">
            <h2>Telecomms Companies</h2>
          </div>
          <div className="audience-item">
            <h2>Healthcare Providers</h2>
          </div>
          <div className="audience-item">
            <h2>Law Firms & ConsultS</h2>
          </div>
          <div className="audience-item">
            <h2>MEDIA AGENCIES</h2>
          </div>
          <div className="audience-item">
            <h2>Engineering Firms</h2>
          </div>
          <div className="audience-item">
            <h2>E-commerce Companies</h2>
          </div>
        </div>
      </div>

      {/* <!-- OUR PROCESS  --> */}
      <div className="process">
        <h1>How It Works</h1>
        <h3>
          A Simple Process to Empower Your Team with Tech Skills — from
          Consultation to Certification."
        </h3>

        <div className="process-details">
          <div className="process-item one">
            <div>        <h2>1.</h2>
            <h2>Request Proposal</h2></div>
          </div>
          <div className="process-item two">
            <h2>2.</h2>
            <h2>We Train Your Team</h2>
            </div>
          <div className="process-item">
            <h2>3.</h2>
            <h2>Certify & Report</h2>
          </div>
        </div>

        <div className="process-cta">
          <button>Get a Quotation</button>
        </div>
      </div>

      {/* READY TO TRAIN */}
      <div className="ready-to-train">
        <h1>Ready to Train Your Team in Digital Skills</h1>
        <p>
          Let’s build a custom training experience that delivers real results.
        </p>
        <button>Get a Custom Training Plan</button>
      </div>
    </div>
        </section>
    </>
  )
}
