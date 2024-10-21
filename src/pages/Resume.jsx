import "./styles/Resume.css";
const Resume = () => {
  return (
    <section id="resume-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div id="professional-summary">
              <h2>Proffessional Summary</h2>
              <ul>
                <li>
                  3 years of experience in Web-based application development and
                  maintenance.
                </li>
                <li>
                  Experience in developing through all phases of the development
                  lifecycle such as Agile from initial technical designs,
                  implementation, and testing to production deployments and
                  support.
                </li>
                <li>Good understanding of core Java.</li>
                <li>
                  Excellent communication and interpersonal skills, technical
                  documentation, and reporting skills.
                </li>
              </ul>
            </div>
            <div id="employment-history">
                <h2>Employment History</h2>
                <div className="emp-history">
                  <p className="period">May 2024 - Present</p>
                  <p className="designation">Software Engineer</p>
                  <p className="company">Incture Technologies</p>
                  <p className="city">Mangaluru</p>
                </div>
                <hr />
                <div className="emp-history">
                  <p className="period">Jul 2023 - May 2024</p>
                  <p className="designation">Systems Engineer</p>
                  <p className="company">Infosys Limited</p>
                  <p className="city">Mangaluru</p>
                </div>
                <hr />
                <div className="emp-history">
                  <p className="period">May 2021 - Jul 2023</p>
                  <p className="designation">Systems Engineer</p>
                  <p className="company">Infosys Limited</p>
                  <p className="city">Mangaluru</p>
                </div>
              </div>
          </div>
          <div className="col-md-6">
            <div id="education-details">
              <h2>Education</h2>
              <div className="edu-history">
                <p className="period">2016 - 2020</p>
                <p className="specialiation">B.E. Mechanical Engineering</p>
                <p className="school-college">
                  Shree Devi Institute of Technology
                </p>
                <p className="city">Mangaluru</p>
              </div>
              <hr />
              <div className="edu-history">
                <p className="period">2014 - 2016</p>
                <p className="specialiation">Pre-University</p>
                <p className="school-college">
                  Sharada P.U. College, Mangalore
                </p>
                <p className="city">Mangaluru</p>
              </div>
              <hr />
              <div className="edu-history">
                <p className="period">2013 - 2014</p>
                <p className="specialiation">SSLC</p>
                <p className="school-college">Balmandir High School</p>
                <p className="city">Karwar</p>
              </div>
            </div>
            <div id="certification-details">
            <h2>Certification</h2>
            <div className="cert-history">
              <p className="cert-name">
                AWS Certified Cloud Practitioner - Amazon Web Services (AWS)
              </p>
              <p className="exp-date">Issued Aug 2022 - Expires Aug 2025</p>
            </div>
          </div>
          <div id="personal-details">
            <h2>Other Details</h2>
            <div className="per-prof">
              <table>
                <thead></thead>
                <tbody>
                  <tr>
                    <td>Date of Birth:</td>
                    <td>
                      2<sup>nd</sup> November 1997
                    </td>
                  </tr>
                  <tr>
                    <td>Nationality:</td>
                    <td>Indian</td>
                  </tr>
                  <tr>
                    <td>Languages Known:</td>
                    <td>English, Hindi, Malayalam, Kannada, Konkani </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          </div>
        </div>

        {/* <h1>Resume</h1> */}
        {/* 
          
          
          
           */}
      </div>
    </section>
  );
};

export default Resume;
