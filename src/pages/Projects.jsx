import { useEffect } from "react";
import "./styles/Projects.css";

const Projects = (projects) => {
  
  useEffect(() => {
    if(projects){
      document.getElementById("project-section").style.display = 'none';
    }else{
      document.getElementById("project-section").style.display = 'block';
    }
  }, [projects])
  return (
    <section id="project-section">
      Projects
    </section>
  );
};

export default Projects;
