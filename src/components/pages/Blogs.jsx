import React from "react";
import Banner from "../Banner";
import BannerImg from '../../assets/images/course-image.png';
import CTASectionBlog from "../CallToActionBlog";
import BlogCards from "../BlogPost";

const BlogContentPage = () => {
    return ( 
        <main className="bg-[#212121] min-h-screen w-full overflow-hidden">
            <Banner startText="Our" text="Blogs" BannerImage={BannerImg}/> 
            <BlogCards/>
            <CTASectionBlog/>
        </main>
    );
}

export default BlogContentPage;