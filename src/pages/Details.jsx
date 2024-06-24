import Resume from "./Details/Resume";
import About from "./Details/About";
import Projects from "./Details/Projects";
import Skills from "./Details/Skills";
const Details = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            id="button-about"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            id="button-resume"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            id="button-projects"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
          <button
            id="button-skills"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={3}
            aria-label="Slide 4"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div><About/></div>
          </div>
          <div className="carousel-item">
            <div><Resume/></div>
          </div>
          <div className="carousel-item">
            <div><Projects/></div>
          </div>
          <div className="carousel-item">
            <div><Skills/></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
