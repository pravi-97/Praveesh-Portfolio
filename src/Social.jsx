import { useEffect } from "react";
import "./styles/Social.css";
const Social = () => {
  function moveSocial() {
    var socialLinks = document.getElementById("social-links");
    socialLinks.style.transform = "translate(-50%, -50%) translateX(-40%)";
  }
  const displaySocial = () => {
    if (window.innerWidth > 768) {
      var socialLinks = document.getElementById("social-links");
      socialLinks.style.transform = "translate(-50%, -50%) translateX(0%)";
      setTimeout(moveSocial, 6000);
      var social = document.getElementsByClassName("social");
      for (var i = 0; i < social.length; i++) {
        social[i].style.visibility = "visible";
      }
    }
  };

  useEffect(() => {
    setTimeout(displaySocial, 2000);
  }, []);

  const socials = [
    {
      cName: "fa-brands fa-linkedin",
      link: "https://www.linkedin.com/in/praveesh-p",
    },
    {
      cName: "fa-brands fa-square-facebook",
      link: "https://www.facebook.com/pravi894",
    },
    {
      cName: "fa-brands fa-square-x-twitter",
      link: "https://twitter.com/pravi894",
    },
    {
      cName: "fa-brands fa-square-instagram",
      link: "https://www.instagram.com/pravi894",
    },
    {
      cName: "fa-brands fa-square-github",
      link: "https://github.com/pravi-97",
    },
  ];
  return (
    <div>
      <section id="social-links">
        <div className="svg-btn text-center">
          <ul>
            {socials.map((social, index) => (
              <li className="social" key={index}>
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  <i className={social.cName}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Social;
