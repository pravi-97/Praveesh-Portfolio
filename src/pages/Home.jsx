import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles/Home.css";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";
import Welcome from "./Welcome";
import Intro from "./Intro.jsx";
import Social from "../components/Social.jsx";

const Home = () => {
  const [content, setContent] = useState(<Welcome />);
  const [showFullScreen, setShowFullScreen] = useState(false);
  const [isIntro, setIsIntro] = useState(true);
  const [exitComplete, setExitComplete] = useState(false);
  const [contentKey, setContentKey] = useState(0);
  const socialRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsIntro(false);
    }, 6000);
  }, []);

  function handleExitComplete() {
    setExitComplete(true);
  }

  function displayFullScreenPage(component) {
    setShowFullScreen(true);
    setTimeout(() => {
      setContentKey((prevKey) => prevKey + 1);
      setContent(component);
      socialRef.current.style.opacity = 0;
    }, 300);
  }

  function goBack() {
    setShowFullScreen(false);
    setTimeout(() => {
      setContentKey((prevKey) => prevKey + 1);
      setContent(<Welcome />);
      socialRef.current.style.opacity = 1;
    }, 300);
  }

  const mainContentTransition = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50, transition: { duration: 2 } },
  };

  const introTransition = {
    initial: { opacity: 1, scale: 1 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 2 } },
  };

  return (
    <section id="home-section">
      <AnimatePresence onExitComplete={handleExitComplete}>
        {isIntro && (
          <motion.div
            key="intro"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={introTransition}
            // style={{ width: "100%", height: "100vh" }}
          >
            <Intro />
          </motion.div>
        )}
      </AnimatePresence>

      {exitComplete && (
        <AnimatePresence>
          <motion.div
            key="main-content"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={mainContentTransition}
            transition={{ duration: 0.5 }}
            // style={{ width: "100%", height: "100vh" }}
          >
            <div className="container-fluid">
              <div className="row">
                <motion.div
                  className="home-left col-md-3"
                  animate={{ x: showFullScreen ? "-100%" : "0%" }}
                  initial={{ x: "0%" }}
                  transition={{ duration: 1 }}
                  // style={{
                  //   width: "30%",
                  //   position: "absolute",
                  //   left: 0,
                  //   top: 0,
                  //   bottom: 0,
                  // }}
                >
                  <ul className="list-ul">
                    <li>
                      <Link className="nav_links home-active" href="#">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="nav_links"
                        href="#"
                        onClick={() => displayFullScreenPage(<About />)}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="nav_links"
                        href="#"
                        onClick={() => displayFullScreenPage(<Resume />)}
                      >
                        Resume
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="nav_links"
                        href="#"
                        onClick={() => displayFullScreenPage(<Contact />)}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </motion.div>
                <Social socialRef={socialRef} />
                <motion.div
                  className="home-right col-md-9"
                  animate={{
                    width: showFullScreen ? "100%" : "85%",
                    x: showFullScreen ? "0%" : "15%",
                  }}
                  initial={{ width: "85%", x: "15%" }}
                  transition={{ duration: 1 }}
                  style={{ position: "absolute", right: 0, top: 0, bottom: 0 }}
                >
                  <AnimatePresence>
                    <motion.div
                      key={contentKey}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{
                        opacity: 0,
                        x: -100,
                        transition: { duration: 0.5 },
                      }}
                      transition={{ duration: 1 }}
                      style={{
                        position: "absolute",
                        top: 0,
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      {content}
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
            <i
              className="fa-regular fa-circle-xmark go-back-button"
              type="button"
              onClick={() => goBack()}
              style={{
                color: "#000000",
                opacity: showFullScreen ? "1" : "0",
                pointerEvents: showFullScreen ? "auto" : "none",
              }}
            ></i>
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
};

export default Home;
