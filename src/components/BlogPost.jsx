import React from "react";
import { Link } from "react-router-dom";
import "./BlogPosts.css";
import blogImg from "../assets/images/about-image.png";
import userImg from "../assets/images/User.svg";
import calenderImg from "../assets/images/Calender.svg";
import useFetch from "./useFetch";
import notFound from "../assets/images/Not found button.svg"

const BlogCards = () => {
  const { data: posts, isPending, isError } = useFetch(`https://api.digitalworldtech.academy/fetchposts.php`);

  return (
    <>
     {isError && <div className='not-found-container'>
                    <img className='not-found-img' src={notFound} alt="No results" />
                    <p className='not-Found-text'>No Blog Found</p>
                  </div>}
    <div className="blog-list">
      {isPending && <p className="loading">Loading...</p>}
     

      {posts && posts.map((post) => (
        <div key={post.id} className="blog-card">
          <div className="image-wrapper">
            <img src={"https://admin.digitalworldtech.academy/uploads/blogposts/"+post.image} alt={post.title} className="blog-image" />
            <span className="badge">{post.category}</span>
          </div>
          <div className="blog-body">
            <div className="firstRow">
              <p><img src={calenderImg} alt="" />2025-05-02</p>
              <p><img src={userImg} alt="" />By {post.author}</p>
            </div>
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-snippet">{post.details?.slice(0, 81)}</p>
            <div className="blog-footer">
              <span>🕒 {post.date}</span>
              <span>💬 {post.comments} Comments</span>
            </div>
            {/* Remove setActivePost if you're not using it */}
            <Link  to={'/blog/' + post.id} className="read-more" >
              {"Read More →"}
            </Link>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default BlogCards;
