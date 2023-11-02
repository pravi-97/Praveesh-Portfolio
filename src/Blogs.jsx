import "./styles/Blogs.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Blogs = () => {
  const [blogList, setBlogList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "Praveesh P | Blogs";
  }, []);
  useEffect(() => {
    axios
      .get("https://yavvlidt1i.execute-api.ap-south-1.amazonaws.com/prod/")
      .then((response) => {
        console.log(response)
        setBlogList(response.data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <section>
      <h1>Blogs</h1>
      <div className="container">
        {blogList.map((blog, index) => (
          <Link className="navbar-brand" key={index} to={`/blog/${blog.title}`}>
            <div className="row" key={index}>
              <div className="col-md-12">
                <div className="blog-content">
                  <div className="text-area">
                    <h2>{blog.title}</h2>
                    <p>{blog.smallHeading}</p>
                    <div className="created-at">
                      <strong>
                        {Date(blog.created_at).substring(4, 7)}/
                        {Date(blog.created_at).substring(8, 10)}/
                        {Date(blog.created_at).substring(11, 15)}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
