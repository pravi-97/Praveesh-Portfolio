import Resume from "./Details/Resume";
const Details = ({ type }) => {
  console.log(type);
//   if (type == "about") {
//     return <>About</>;
//   } else if (type == "resume") {
//     return (
//       <>
//         <Resume />
//       </>
//     );
//   } else
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
              <div>About</div>
            </div>
            <div className="carousel-item">
              <div>Resume</div>
            </div>
            <div className="carousel-item">
              <div>Projects</div>
            </div>
            <div className="carousel-item">
                <div>Skills</div>
            </div>
          </div>
          {/* <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button> */}
        </div>
      </>
    );
};

export default Details;
