import { Link } from "react-router-dom";
import "./styles/Navbar.css";
const Navbar = () => {
  return (
    <header id="navbar-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" id="navbar-name" to="/">
            <span className="navbar-tag">&lt;</span>
            <span className="navbar-name">Praveesh</span>
            <span className="navbar-tag">/&gt;</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
