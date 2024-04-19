import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/Projects.css";
import Loader from "./Loader";

const API_URL = "https://zb2b1wi7ug.execute-api.ap-south-1.amazonaws.com/prod";
;const Projects = () => {
  const [projectList, setProjectList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    document.title = "Praveesh P | Projects";
  }, []);
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setProjectList(response.data.message);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Loader/>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container-fluid">
      <table>
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Name</th>
            <th>Description</th>
            <th>App Link</th>
            <th>Repository Link</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(projectList) && projectList.length > 0 ? (
            projectList.map((project, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{project.name}</td>
                <td className="projectDescription">{project.about}</td>
                <td>
                  {project.active ? (
                    <a
                      href={project.application}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open App
                    </a>
                  ) : (
                    "The project is not active yet!"
                  )}
                </td>
                <td>
                  {project.github.split(",").map((link, index) => (
                    <a style={{margin:"5px"}}
                      key={index} // Add a unique key for each link
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-square-github"></i>
                    </a>
                  ))}
                </td>
              </tr>
            ))
          ) : (
            <div>No projects available.</div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Projects;
