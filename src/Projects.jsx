import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/Projects.css";

const Projects = () => {
  const [projectList, setProjectList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/get")
      .then((response) => {
        setProjectList(response.data.rMsg);
        console.log(response.data.rMsg);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container-fluid">
      <table>
        <tr>
          <th>Sl No</th>
          <th>Name</th>
          <th>Description</th>
          <th>App Link</th>
          <th>Repository Link</th>
        </tr>
        {Array.isArray(projectList) && projectList.length > 0 ? (
          projectList.map((project, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="projectName">{project.name}</td>
              <td className="projectDescription">{project.about}</td>
              <td>
                <a
                  href={project.application}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open App
                </a>
              </td>
              <td>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-square-github"></i>
                </a>
              </td>
            </tr>
          ))
        ) : (
          <div>No projects available.</div>
        )}
      </table>
    </div>
  );
};

export default Projects;
