import "./style/Projects.css";
const Projects = () => {
  return (
    <>
      <div id="project-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 projects">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4" style={{backgroundColor:"red"}}>Name:</div>
                  <div className="col-md-8" style={{backgroundColor:"blue"}}>Others:</div>
                </div>
              </div>
            </div>
            <div className="col-md-12 projects">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4" style={{backgroundColor:"red"}}>Name:</div>
                  <div className="col-md-8" style={{backgroundColor:"blue"}}>Others:</div>
                </div>
              </div>
            </div>
            <div className="col-md-12 projects">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4" style={{backgroundColor:"red"}}>Name:</div>
                  <div className="col-md-8" style={{backgroundColor:"blue"}}>Others:</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
