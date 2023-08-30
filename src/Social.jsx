import { useEffect } from "react";
const Social = () => {
  const displaySocial = () => {
    var socialLinks = document.getElementById("social-links");
    socialLinks.style.transform = "translate(-50%, -50%) translateX(0%)";

    var social = document.getElementsByClassName("social");
    for (var i = 0; i < social.length; i++) {
      social[i].style.visibility = "visible";
    }
  };

  useEffect(() => {
    setTimeout(displaySocial, 2000);
  }, []);
  return (
    <div>
      <section id="social-links">
        <div className="svg-btn text-center">
          <ul>
            <li className="social">
              <a
                href="https://www.linkedin.com/in/praveesh-p"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin icon-large"></i>
              </a>
            </li>
            <li className="social">
              <a
                href="https://www.facebook.com/pravi894"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li className="social">
              <a
                href="https://twitter.com/pravi894"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-square-x-twitter"></i>
              </a>
            </li>
            <li className="social">
              <a
                href="https://www.instagram.com/pravi894"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-square-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Social;
