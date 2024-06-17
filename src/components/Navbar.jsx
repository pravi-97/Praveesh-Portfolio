import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./styles/Navbar.css";
const Navbar = () => {
  const location = useLocation();

  // useEffect(() => {
  //   const handleDocumentClick = (event) => {
  //     const navbar = document.querySelector(".navbar-collapse");
  //     if (
  //       navbar.classList.contains("show") &&
  //       !event.target.closest(".navbar-collapse")
  //     ) {
  //       navbar.classList.remove("show");
  //     }
  //   };
  //   document.addEventListener("click", handleDocumentClick);

  //   return () => {
  //     document.removeEventListener("click", handleDocumentClick);
  //   };
  // }, []);
  
  const routes = [
    { path: "#", text: "Home" },
    { path: "#projects", text: "Projects" },
    { path: "#resume", text: "Resume" },
    // { path: "/blog", text: "Blog" },
    { path: "#about-section", text: "Contact" },
  ];

  return (
    <header id="navbar-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" id="navbar-name" to="/">
            <span className="navbar-tag">&lt;/</span><span className="navbar-name">Praveesh</span><span className="navbar-tag">&gt;</span>
          </Link>
                    {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {routes.map((route, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    className={`nav-link ${
                      location.pathname === route.path ? "active" : ""
                    }`}
                    to={route.path}
                  >
                    {route.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;