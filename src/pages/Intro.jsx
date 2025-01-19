import { useEffect } from "react";
import "./styles/Intro.css";
const Intro = () => {
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
    let timeout1 = setTimeout(() => {
    }, 100 * (text1.length + text2.length)+100);
    timeouts.push(timeout1);

    let timeout = setTimeout(() => {
      blinkHide();
    }, 100 * (text1.length + text2.length) + 2000);
    timeouts.push(timeout);
    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, []);
  function blinkHide() {
    const blink = document.getElementById("blink_it");
    if(blink != null)
      blink.style.visibility = "hidden";
    setTimeout(() => {
      blinkShow();
    }, 300);
  }
  function blinkShow() {
    const blink = document.getElementById("blink_it");
    if(blink != null)
      blink.style.visibility = "visible";
    setTimeout(() => {
      blinkHide();
    }, 700);
  }
  return (
    <section id="intro-section">
      <div className="container" id="intro-container">
        <div className="row">
          <div className="col-md-12">
            <div id="main-content">
              <p id="main-heading">
                <span id="paint-it-white"></span>
                <span id="paint-it-red"></span>
                <span id="blink_it">_</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;