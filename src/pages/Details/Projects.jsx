import { useEffect, useState } from "react";
import axios from "axios";
import "./style/Projects.css";

const Projects = () => {
  const API_URL =
    "https://zb2b1wi7ug.execute-api.ap-south-1.amazonaws.com/prod";
  const [projectList, setProjectList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setProjectList(response.data.message);
        console.log(response.data.message);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <>
      <div id="project-section">
        <div className="container-fluid">
          <div className="row table-start">
            {Array.isArray(projectList) && projectList.length > 0 ? (
              projectList.map((project, index) => (
                <div className="tables" key={index}>
                  <table>
                    <thead></thead>
                    <tbody>
                      <tr className="app_name">
                        <td>Name:</td>
                        <td>{project.name}</td>
                      </tr>
                      <tr className="app_desc">
                        <td>Description:</td>
                        <td>{project.about}</td>
                      </tr>
                      <tr className="app_link">
                        <td>Applink:</td>
                        <td>
                          {project.active ? (
                            <a
                              href={project.application}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {project.application}
                            </a>
                          ) : (
                            "The project is not active yet!"
                          )}
                        </td>
                      </tr>
                      <tr className="app_repo">
                        <td>Github:</td>
                        <td>
                          {project.github.split(",").map((link, index) => (
                            <a
                              style={{ margin: "5px" }}
                              key={index}
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i
                                className="fa-brands fa-square-github"
                                style={{ color: "black" }}
                              ></i>
                            </a>
                          ))}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <hr/>
                </div>
              ))
            ) : (
              <div>No projects available.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
