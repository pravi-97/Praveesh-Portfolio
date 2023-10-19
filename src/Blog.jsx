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
    axios
      .get("http://localhost:3000/get/"+id)
      .then((response) => {
        setBlog(response.data.message[0]);
        setLoading(false);
        bodyParts = (blog.body);
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
  return (
    <hello></hello>
  );
};

export default Blog;
