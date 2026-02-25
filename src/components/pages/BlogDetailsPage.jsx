import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../useFetch";
import BannerBlogdes from "../BannerBlogDetails";
import "./BlogDetails.css";
import parse from "html-react-parser/lib/index";

import bannerImg from "../../assets/images/blog img.jpg"; // Import the banner image

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: blog, isPending, isError } = useFetch(`https://api.digitalworldtech.academy/post.php/${id}`);

  if (!blog && !isPending) {
    return <div>No blog post found.</div>;
  }

  return (
    <>
      {blog && (
        <BannerBlogdes
          BannerImage={bannerImg}
          startText={blog.title}
        />
      )}

      <div className="blog-details-container">
        {isPending && <div className="loading">Loading blog post...</div>}

        {isError && <div className="error">Error: {isError}</div>}

        {blog && (
          <article className="blog-details">
            <img src={"https://admin.digitalworldtech.academy/uploads/blogposts/" + blog.image} alt={blog.title} />
            <p className="blog-author">Written by: {blog.author}</p>
            <div className="blog-body">{parse(blog.details)}</div>
            <button onClick={() => navigate(-1)} className="back-button">
              ← Go Back
            </button>
          </article>
        )}
      </div>
    </>
  );
};

export default BlogDetails;
