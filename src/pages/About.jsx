import { useEffect, useState } from "react";
import Details from "./Details";
import praveesh from "../assets/images/praveesh.jpg";
import "./styles/About.css";

const About = () => {
  const [type, setType] = useState("about");
  function getDetails(topic) {
    setType(topic);
    if (topic == "about") {
      document.getElementById("button-about").click();
    }
    else if (topic == "resume") {
      document.getElementById("button-resume").click();
    }
    else if (topic == "projects") {
      document.getElementById("button-projects").click();
    }
    else if (topic == "skills") {
      document.getElementById("button-skills").click();
    }
    else document.getElementById("button-about").click();
  }
  return (
    <section id="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="flex-container" id="first-section">
              <div>
                <img
                  src={praveesh}
                  id="first-section-img"
                  alt="praveesh image"
                  srcSet=""
                />
              </div>
              <div id="first-section-text">
                Hello, I'm Praveesh. I am a full-stack developer with over three
                years of experience working on enterprise applications as a Java
                Developer at Infosys. In my free time, I have been learning
                React and AWS. Currently, I work as a Software Engineer at
                Incture Technologies.
              </div>
            </div>
            <div className="flex-container" id="second-section">
              <div id="cards-section">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6">
                      <div onClick={() => getDetails("about")} className="card">
                        <div className="card-body">
                          <div className="card-title">About</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        onClick={() => getDetails("resume")}
                        className="card"
                      >
                        <div className="card-body">
                          <div className="card-title">Resume</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        onClick={() => getDetails("projects")}
                        className="card"
                      >
                        <div className="card-body">
                          <div className="card-title">Projects</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        onClick={() => getDetails("skills")}
                        className="card"
                      >
                        <div className="card-body">
                          <div className="card-title">Skills</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6" id="details-section">
            <div id="details-section-actual">
              <Details type={type} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
