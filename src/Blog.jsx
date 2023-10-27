import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./styles/Blog.css";
const Blog = () => {
  const { id } = useParams();
  // console.log("id: ", id);
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let bodyParts = [];
  useEffect(() => {
    document.title = "Praveesh P | Blogs";
  }, []);
  useEffect(() => {
    const url =
      `https://cvv66er0kd.execute-api.ap-south-1.amazonaws.com/prod?title=${id}`;
      console.log("url: ",url)
    axios
      .get(url)
      .then((response) => {
        setBlog(response);
        setLoading(false);
        console.log(response);
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
  return <div>{blog.body}</div>;
};

export default Blog;
