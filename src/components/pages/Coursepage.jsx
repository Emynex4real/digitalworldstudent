import React from 'react';
import Banner from "../Banner"; 
import CTASectionCourse from "../CallToActionCourse";
import CourseCardsForCourse from "../CourseForCoursePage";
import BannerImg from '../../assets/images/couresbannerimg.jpg';

function Coursepage() {
    return (
       <main className="bg-[#212121] min-h-screen w-full overflow-hidden">
        <Banner startText="Our" text="Courses" BannerImage={BannerImg}/>
        <CourseCardsForCourse />
        <CTASectionCourse />
       </main>
    );
}

export default Coursepage;