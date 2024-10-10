import { useEffect,useState } from "react";
import "./styles/Home.css";
import { Link } from "react-router-dom";
import About from './About'
import Contact from './Contact'
import Resume from "./Resume";
import Welcome from "./Welcome";
import Navbar from "../components/Navbar"

const Home = () => {
  const [content, setContent] = useState(<Welcome/>);
  function doSomething(cnt){
    if(content != null){
      setContent(null);
    }
    setContent(cnt);
  }
  return (
    <section id="home-section">
      {/* <Navbar/> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 home-left">
            <ul className="list-ul">
              <li><Link className="nav_links" href="#" onClick={change=>doSomething(<Welcome/>)}>Home</Link></li>
              <li><Link className="nav_links" href="#" onClick={change=>doSomething(<About/>)}>About</Link></li>
              <li><Link className="nav_links" href="#" onClick={change=>doSomething(<Resume/>)}>Resume</Link></li>
              <li><Link className="nav_links" href="#" onClick={change=>doSomething(<Contact/>)}>Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-9 home-right">
            {content}
          </div>
        </div>
        <div className="glow-line"></div>
      </div>
    </section>
  );
};

export default Home;
