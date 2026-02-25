import React from 'react';
import Banner from "../Banner"; 
import AboutpageSection from "./AboutpageSection"; 
import WhySection from "./WhySection";
import CTASectionAbout from "../CallToActionAbout"; 
import BannerImg from '../../assets/images/aboutusbanner.jpg'

function Aboutpage() {
    return (
       <main id="aboutPageContainer" className="bg-[#212121] min-h-screen w-full overflow-hidden">
        <Banner startText="About" text="Us" BannerImage={BannerImg}/>
        <AboutpageSection />
        <WhySection />
        <CTASectionAbout />
       </main>
    );
}

export default Aboutpage;