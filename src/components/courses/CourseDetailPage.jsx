import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// import { SiReact } from 'simple-icons-react';
// import {siSimpleicons} from 'simple-icons';
// import './App.css'


import CourseCard from './courseCard'
import CourseBanner from './CourseBanner'
import LearningExperience from './learnexperience'
import TrainingLocations from './trainingLocations'
import OnlineTraining from './onlineTraining'
import ExpertTraining from './ExpertTraining'
import LearnWithUs from './whyLearn'
import Testimonials from './Testimonials'
import HiringCompanies from './HiringCompany'
import JobMarketSupport from './jobMarketSupport'
import CommunityGallery from './CommunityGallery'
// import FormCard from './signForm'
import TrainingInfo from './TrainingInfo'
import WhatYouWillLearn from './WhatYouWillLearn'
import FAQMAIN from './FaqMain'
// import Footer from './footer'
import Steps from './Steps'
import CourseAdvisor from './CourseAdvisor'
import Loader from './loader'

// Course Banner Object Images


import useFetch from '../useFetch'
import FormPopup from './Formpopup'
import ScrollToTopButton from './scrollButton'
import FormCard from './signForm'




const CourseDetailPage = () => {
  const { id } = useParams()
  const { data: course, isPending, isError } = useFetch(`https://api.digitalworldtech.academy/courses.php/${id}`)
  const [advisorClick, setAdvisorClick] = useState(false)
  const [brochureClick, setBrochureClick] = useState(false)
  

  // Advisor Click Handler
  const handleAdvisor = () => {
    setAdvisorClick(true)
    document.body.style.overflow = "hidden"
    console.log(advisorClick)
  }
  
  const handleHideAdv = () => {
    setAdvisorClick(false)
    document.body.style.overflow = "auto"
  }
  // Brochure Click Handler
  const handleBrochure = () => {
    setBrochureClick(true)
    document.body.style.overflow = "hidden"
    
  }

  const handleHidebro = () => {
    setBrochureClick(false)
    document.body.style.overflow = "auto"
  }

  if (isPending) return <Loader/>
  if (isError || !course) return <div className="error">Error loading course</div>

  return (
    <>

    <div className='page-container'>
      <CourseCard 
        title={course.title} 
        description={course.description} 
        duration={course.duration} 
        schedule={course.schedule} 
        flexibility={course.flexibility} 
        format="Available in-person and online" 
        imageUrl={'https://admin.digitalworldtech.academy/uploads/cohort-courses/images/'+course.image} 
        advisor={() =>{handleAdvisor()}}
        handleBrochure={() => {handleBrochure()}}
      />

      
      
      <CourseBanner 
        technologies={course.content.map(item => ({
          name: item.title,
          logo: item.image
        }))} 
        title={course.banner_title} 
        description={course.banner_text}
      />
      
      <ExpertTraining title={course.course_name} />
      <LearningExperience advisorForm={()=>{handleAdvisor()}} />
      <TrainingLocations />
      <OnlineTraining title={course.course_name} advisor={handleAdvisor}/>
      <LearnWithUs title={course.course_name} />

      {course.testimonials && course.testimonials.length > 0 && (
        <div className="testimonial-list">
          {course.testimonials.map((testimonial, index) => (
            <Testimonials
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              image={'https://admin.digitalworldtech.academy/uploads/cohort-courses/images/'+testimonial.image}
              videoUrl={testimonial.video_link}
            />
          ))}
        </div>
      )}
      
      <HiringCompanies />
      <JobMarketSupport />
      <CommunityGallery />
      
      <FormCard title={course.course_name} courseBorchure={course.brochure}/>
      
      <TrainingInfo 
        title={course.title} 
        description={course.description} 
        format="Online or in-person" 
        duration={course.duration} 
        schedule={course.schedule} 
        benefits={course.benefits} 
        buttonText="Contact an advisor"
        imageSrc={'https://admin.digitalworldtech.academy/uploads/cohort-courses/images/'+course.image}
        advisorForm={()=>{handleAdvisor()}}
      />
      
      {advisorClick && <CourseAdvisor onClose={handleHideAdv} title={course.course_name} advisorVideo={<iframe width="560" height="315" src="https://www.youtube.com/embed/6sVEa7xPDzA?si=x7On_JM9jQ6PQlwK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>} />}
      <Steps timeline={course.timeline}  />
      <ScrollToTopButton/>

      <FAQMAIN data={course.faqs}/>
      {brochureClick && <FormPopup title={course.course_name} courseBorchure={course.brochure} onClose={()=>{handleHidebro()}} advisorVideo={<iframe width="560" height="315" src="https://www.youtube.com/embed/6sVEa7xPDzA?si=x7On_JM9jQ6PQlwK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>} />}

    </div>
    </>

    
  )
}

export default CourseDetailPage;