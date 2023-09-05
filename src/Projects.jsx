import React, { useEffect, useState } from "react";
import axios from "axios";

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
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error.message}</div>; 
  }

  return (
    <div className="container-fluid">
      <table>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>App Link</th>
            <th>Repository Link</th>
          </tr>
        {Array.isArray(projectList) && projectList.length > 0 ? (
          projectList.map((project, index) => (
            <tr key={index}>
              <td>{project.name}</td>
              <td>{project.about}</td>
              <td>{project.application}</td>
              <td>{project.github}</td>
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
