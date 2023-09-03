import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Define an array of routes and their corresponding link text
  const routes = [
    { path: "/home", text: "Home" },
    { path: "/projects", text: "Projects" },
    { path: "/resume", text: "Resume" },
    { path: "/blog", text: "Blog" },
    { path: "/contact", text: "Contact" },
  ];

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            Praveesh
          </Link>
          <button
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
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
