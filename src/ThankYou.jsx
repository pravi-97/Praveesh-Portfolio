import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles/Thankyou.css";
const ThankYou = () => {
  const navigate = useNavigate();

  function returnHome() {
    navigate("/home");
  }
  useEffect(() => {
    document.title = "Praveesh P | Thankyou";
  }, []);
  useEffect(() => {
    const timeoutId = setTimeout(returnHome, 10000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div id="thank-you">
      <h1>Thank You</h1>
      <p id="ty-message">
        Your message has been sent. Thank you for writing. I'll get in touch
        with you shortly.
      </p>
      <p>You'll be redirected to Home page shortly! Don't want to wait? Click below!</p>
      <Link className="nav-link" aria-current="page" to="/home">
        <button className="submit-button" type="submit">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default ThankYou;
