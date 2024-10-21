import "./styles/Welcome.css";
import praveesh from "../assets/images/praveesh.jpg";

const Welcome = () => {
  return (
    <section id="welcome-section">
      <div className="container-fluid welcome">
        <div className="row">
          <div className="col-md-6 welcome-sec-1">
            <div className="intro">
              <h1>
                Hi, I'm <span id="paint-it-red">Praveesh!</span>
              </h1>
              <p>| Full Stack Developer | AWS Certified Cloud Practitioner |</p>
              <a
                className="btn btn-primary home-button"
                href="https://praveesh-resume.s3.ap-south-1.amazonaws.com/Praveesh_Resume.docx"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                data-bs-title="Click to download Resume"
              >
                Resume{" "}
                <i
                  className="fa-solid fa-download"
                  style={{ color: "#ffffff" }}
                ></i>
              </a>
            </div>

            <div className="skills">
              <h2>My Skills</h2>
              <ul>
                <li>Java Development</li>
                <li>Web Development</li>
                <li>Cloud Solutions</li>
                <li>API Design</li>
                <li>React & Node.js</li>
              </ul>
            </div>

            <div className="featured-projects">
              <h2>Featured Projects</h2>
              <div className="project-card">
                <img src="project1-thumbnail.jpg" alt="Project 1" />
                <p>Project Title</p>
                <button
                  className="btn btn-primary home-button"
                  onClick={() => navigateTo("project-details")}
                >
                  View More
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 welcome-sec-2">
            <img
              id="praveesh-image"
              className="img-fluid"
              // src={praveesh}
              alt="Praveesh Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
