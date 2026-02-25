import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import CourseCard from './courseCard';
import CourseBanner from './CourseBanner';
import LearningExperience from './learnexperience';
import TrainingLocations from './trainingLocations';
import OnlineTraining from './onlineTraining';
import ExpertTraining from './ExpertTraining';
import LearnWithUs from './whyLearn';
import Testimonials from './Testimonials';
import HiringCompanies from './HiringCompany';
import JobMarketSupport from './jobMarketSupport';
import CommunityGallery from './CommunityGallery';
import TrainingInfo from './TrainingInfo';
import WhatYouWillLearn from './WhatYouWillLearn';
import FAQMAIN from './FaqMain';
import Steps from './Steps';
import CourseAdvisor from './CourseAdvisor';
import Loader from './loader';
import useFetch from '../useFetch';
import FormPopup from './Formpopup';
import ScrollToTopButton from './scrollButton';
import FormCard from './signForm';

const CourseDetailPage = () => {
  const { id } = useParams();
  const { data: course, isPending, isError } = useFetch(`https://api.digitalworldtech.academy/courses.php/${id}`);
  const [advisorClick, setAdvisorClick] = useState(false);
  const [brochureClick, setBrochureClick] = useState(false);

  // Advisor Click Handler
  const handleAdvisor = () => {
    setAdvisorClick(true);
    document.body.style.overflow = "hidden";
  };
  
  const handleHideAdv = () => {
    setAdvisorClick(false);
    document.body.style.overflow = "auto";
  };

  // Brochure Click Handler
  const handleBrochure = () => {
    setBrochureClick(true);
    document.body.style.overflow = "hidden";
  };

  const handleHidebro = () => {
    setBrochureClick(false);
    document.body.style.overflow = "auto";
  };

  // Premium Loading State
  if (isPending) return (
    <div className="min-h-screen bg-[#212121] flex items-center justify-center">
        <Loader />
    </div>
  );

  // Premium Error State
  if (isError || !course) return (
    <div className="min-h-screen bg-[#212121] flex flex-col items-center justify-center p-4">
        <div className="bg-[#1A1A1A] border border-red-500/20 rounded-3xl p-10 max-w-lg text-center shadow-2xl">
            <h2 className="text-red-400 text-2xl font-bold mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Course Not Found</h2>
            <p className="text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>We couldn't load the details for this course. Please check your connection or return to the courses page.</p>
        </div>
    </div>
  );

  return (
    <main className="bg-[#212121] min-h-screen w-full overflow-hidden">
      
      <CourseCard 
        title={course.title} 
        description={course.description} 
        duration={course.duration} 
        schedule={course.schedule} 
        flexibility={course.flexibility} 
        format="Available in-person and online" 
        imageUrl={'https://admin.digitalworldtech.academy/uploads/cohort-courses/images/' + course.image} 
        advisor={handleAdvisor}
        handleBrochure={handleBrochure}
      />
      
      <CourseBanner 
        technologies={course.content?.map(item => ({
          name: item.title,
          logo: item.image
        })) || []} 
        title={course.banner_title} 
        description={course.banner_text}
      />
      
      <ExpertTraining title={course.course_name} />
      <LearningExperience advisorForm={handleAdvisor} />
      <TrainingLocations />
      <OnlineTraining title={course.course_name} advisor={handleAdvisor}/>
      <LearnWithUs title={course.course_name} />

      {course.testimonials && course.testimonials.length > 0 && (
        <div className="w-full relative z-10">
          {course.testimonials.map((testimonial, index) => (
            <Testimonials
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              image={'https://admin.digitalworldtech.academy/uploads/cohort-courses/images/' + testimonial.image}
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
        imageSrc={'https://admin.digitalworldtech.academy/uploads/cohort-courses/images/' + course.image}
        advisorForm={handleAdvisor}
      />
      
      {advisorClick && (
        <CourseAdvisor 
            onClose={handleHideAdv} 
            title={course.course_name} 
            advisorVideo={<iframe width="100%" height="100%" className="aspect-video rounded-2xl" src="https://www.youtube.com/embed/6sVEa7xPDzA?si=x7On_JM9jQ6PQlwK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>} 
        />
      )}
      
      <Steps timeline={course.timeline} />
      
      {/* Course Specific FAQ */}
      {course.faqs && course.faqs.length > 0 && (
        <FAQMAIN data={course.faqs}/>
      )}

      {brochureClick && (
        <FormPopup 
            title={course.course_name} 
            courseBorchure={course.brochure} 
            onClose={handleHidebro} 
            advisorVideo={<iframe width="100%" height="100%" className="aspect-video rounded-2xl" src="https://www.youtube.com/embed/6sVEa7xPDzA?si=x7On_JM9jQ6PQlwK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>} 
        />
      )}

      <ScrollToTopButton/>
    </main>
  );
}

export default CourseDetailPage;