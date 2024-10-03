import { useEffect,useState } from "react";
import "./styles/Home.css";
import { Link } from "react-router-dom";
import About from './About'
import Contact from './Contact'
import Resume from "./Resume";
import Welcome from "./Welcome";

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
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <ul>
              <li><Link href="#" onClick={change=>doSomething(<Welcome/>)}>Home</Link></li>
              <li><Link href="#" onClick={change=>doSomething(<About/>)}>About</Link></li>
              <li><Link href="#" onClick={change=>doSomething(<Resume/>)}>Resume</Link></li>
              <li><Link href="#" onClick={change=>doSomething(<Contact/>)}>Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-10">
            {content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
