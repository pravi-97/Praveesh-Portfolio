import "./styles/Home.css"
const Home = () => {
  return (
      <section id="home-section">
        <div className="container" id="home-container">
        <div className="row">
          <div className="col-md-12">
          <div id="main-content">
            <p id="main-heading">Hello There! I&#39;m <span className="paint-it-red">Praveesh.</span></p>
            <p id="main-role">| FULL STACK DEVELOPER |</p>
            <a className="btn btn-primary home-button" href="https://praveesh-resume.s3.ap-south-1.amazonaws.com/Praveesh_Resume.docx" type="button">Resume <i className="fa-solid fa-download" style={{color: "#ffffff"}}></i></a>
            <a className="btn btn-primary home-button" href="#about-section" type="button">About</a>
          </div>
          </div>
        </div>
      </div>
      </section>
  );
};

export default Home;