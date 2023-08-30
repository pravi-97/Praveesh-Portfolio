import { useEffect } from "react";
import praveeshImage from "./images/praveesh.jpg"; // Adjust the path as needed
import "./App.css";

const Home = () => {
  const displayMain = () => {
    const colLeft = document.getElementById("col-left");
    const colRight = document.getElementById("col-right");
    const mainImg = document.getElementById("main-img");
    colLeft.style.transform = "translateX(0%)";
    colRight.style.transform = "translateX(0%)";
    mainImg.style.width = "60%";
    setTimeout(runIntro, 3500);
  };
  const runIntro = () => {
    var mainBody = document.getElementById("main-body");
    mainBody.style.transform = "translateY(0%)";
  };
  useEffect(() => {
    displayMain();
  }, []);
  return (
    <main id="main-content">
      <div className="container text-center">
        <div className="row" id="slides-c">
          <div
            className="col-md-6"
            id="col1"
            style={{ backgroundColor: "rgba(82, 60, 60, 0)" }}
          >
            <div id="col-left">
              <p id="main-heading">Hello There! I'm Praveesh.</p>
              <p id="main-body">
                I'm a developer with a delightful 2 years of experience working
                with Infosys. My main focus revolves around Java applications,
                but in my moments of leisure, I enjoy diving into the realms of
                React.
              </p>
            </div>
          </div>
          <div
            className="col-md-6"
            id="col2"
            style={{ backgroundColor: "rgba(0, 0, 255, 0)" }}
          >
            <div id="col-right">
              <img
                className="img-fluid"
                id="main-img"
                src={praveeshImage}
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
