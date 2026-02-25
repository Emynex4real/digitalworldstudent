import React from "react";
import Banner from "../Banner";
import BannerImg from '../../assets/images/course-image.png'
import CTASectionBlog from "../CallToActionBlog";
// import BlogSection from "../BlogSection";
import BlogCards from "../BlogPost";



const BlogContentPage = () => {
    return ( 
    <>
    <Banner startText="Our" text="Blogs" BannerImage={BannerImg}/> 
    <BlogCards/>
    <CTASectionBlog/>
</>
      
     );
}
 
export default BlogContentPage;