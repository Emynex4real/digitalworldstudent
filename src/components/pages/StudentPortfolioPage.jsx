import React from "react";
import CTASectionPortfolio from "../CallToActionPortfolio";
import studentImage from '../../assets/images/StudentPortFolio.png';
import Banner from "../Banner";
import StudentProjects from "./StudentPortfolio.jsx";

const StudentPortfolioPage = () => {
    return ( 
        <main id="student-portfolio-page" className="bg-[#212121] min-h-screen w-full overflow-hidden">
            <Banner startText="Student" text="Portfolio" BannerImage={studentImage}/>
            <StudentProjects/>
            <CTASectionPortfolio/>
        </main>
     );
}
 
export default StudentPortfolioPage;