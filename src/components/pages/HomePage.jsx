import React from 'react';
import HeroSection from '../Hero';
import ProfileSection from '../CompanyProfile';
import About from '../About-us';
import CourseSection from '../courseSection';
import IntroductoryVideo from '../IntroductoryVidoe'; 
import CTASection from '../CallToAction';
import FAQ from '../Faq';
import Testimonial from '../Testimonial';

function HomePage() {
    return (
        <main 
            className="bg-[#212121] text-white min-h-screen w-full overflow-hidden" 
            style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#212121' }}
        >
            <HeroSection id="home-page" />
            
            <div className="flex flex-col gap-y-20 md:gap-y-2 py-20 md:py-32">
                <ProfileSection />
                <About />
                <CourseSection />
                <IntroductoryVideo />
                <CTASection />
                <FAQ />
                <Testimonial /> 
            </div>
        </main>
    );
}

export default HomePage;