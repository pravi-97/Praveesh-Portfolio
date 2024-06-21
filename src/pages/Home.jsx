import { useEffect } from "react";
import "./styles/Home.css";
const Home = () => {
  useEffect(() => {
    const text1 = "Hello There! I'm ".split("");
    document.getElementById("paint-it-white").textContent = "";
    let timeouts = [];
    for (let i = 0; i < text1.length; i++) {
      let timeout = setTimeout(() => {
        let val = document.getElementById("paint-it-white").textContent;
        document.getElementById("paint-it-white").textContent = val + text1[i];
      }, 100 * i);
      timeouts.push(timeout);
    }

    const text2 = "Praveesh.".split("");
    document.getElementById("paint-it-red").textContent = "";
    for (let i = 0; i < text2.length; i++) {
      let timeout = setTimeout(() => {
        let val = document.getElementById("paint-it-red").textContent;
        document.getElementById("paint-it-red").textContent = val + text2[i];
      }, 100 * i + 100 * text1.length);
      timeouts.push(timeout);
    }
    let timeout = setTimeout(() => {
      document.getElementById("navbar-header").style.opacity = "1";
      document.getElementById("social-links").style.transform = "translate(-50%, -50%)";
      document.getElementById("main-heading-2").style.visibility = "visible";
      document.getElementById("main-heading-2").style.opacity = "1";
      document.getElementById("about-section").style.display = "block";
      document.getElementById("contact-section").style.display = "block";
      blinkHide();
    }, 100 * (text1.length + text2.length) + 2000);
    timeouts.push(timeout);
    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, []);
function blinkHide(){
  const blink = document.getElementById("blink_it");
  blink.style.visibility = "hidden";
  setTimeout(() => {
    blinkShow();
  }, 300);
}
function blinkShow(){
  const blink = document.getElementById("blink_it");
  blink.style.visibility = "visible";
  setTimeout(() => {
    blinkHide();
  }, 700);
}
  return (
    <section id="home-section">
      <div className="container" id="home-container">
        <div className="row">
          <div className="col-md-12">
            <div id="main-content">
              <p id="main-heading">
                <span id="paint-it-white"></span>
                <span id="paint-it-red"></span>
                <span id="blink_it">_</span>
              </p>
              <div id="main-heading-2">
                <p id="main-role">| FULL STACK DEVELOPER |</p>
                <a
                  className="btn btn-primary home-button"
                  href="https://praveesh-resume.s3.ap-south-1.amazonaws.com/Praveesh_Resume.docx"
                  type="button"
                >
                  Resume{" "}
                  <i
                    className="fa-solid fa-download"
                    style={{ color: "#ffffff" }}
                  ></i>
                </a>
                <a
                  className="btn btn-primary home-button"
                  href="#about-section"
                  type="button"
                >
                  About
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
