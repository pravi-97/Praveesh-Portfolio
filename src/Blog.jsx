import { useParams, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./styles/Blog.css";
const Blog = () => {
  const navigate = useNavigate();
  const refreshPage = () => {
    window.location.reload();
  };

  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    document.title = "Praveesh P | Blogs";
  }, []);
  useEffect(() => {
    const url =
      "https://cvv66er0kd.execute-api.ap-south-1.amazonaws.com/prod?title=" +
      id;
    axios
      .get(url)
      .then((response) => {
        setBlog(response.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error);
        console.error(errorMessage)
        setError(true);
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
  if (error){
    return (
      <div>
        <h1>An error Occurred</h1>
        <button type="button" onClick={refreshPage}>
          <span>Reload</span>
        </button>
      </div>
    );
  }
    return (
      <div>
        <div className="goback" type="button" onClick={() => navigate(-1)}>
          <span>
            <i className="fa-solid fa-circle-arrow-left"></i>
          </span>
        </div>
        <div className="container">
          <div className="row">
            <h1 className="title_heading">{blog.title}</h1>
            {blog.body.split("repellendus").map((para, index) => (
              <p className="title-body" key={index}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Blog;
