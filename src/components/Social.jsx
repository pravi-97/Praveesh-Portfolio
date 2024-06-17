import "./styles/Social.css";
const Social = () => {
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