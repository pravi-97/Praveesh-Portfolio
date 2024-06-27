import { useState } from "react";
import axios from "axios";
import "./styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [ifFailed, setIfFailed] = useState(false);
  const [isSubmit, setisSubmit] = useState(false);
  const [isDoneSubmit, setIsDoneSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name.trim() == "" ||
      formData.email.trim() == "" ||
      formData.message.trim() == ""
    ) {
      var errorText = document.getElementById("error-alert");
      errorText.style.visibility = "visible";
      setTimeout(hideError, 5000);
    } else {
      setisSubmit(true);
      const form = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };
      const requestOptions = {
        body: JSON.stringify(form),
      };
      axios
        .post(
          "https://5wyigq88j2.execute-api.ap-south-1.amazonaws.com/prod",
          JSON.stringify(requestOptions)
        )
        .then((response) => {
          if (response.data.statusCode != 200) {
            throw "Error";
          }
          var errorText = document.getElementById("form-submit-error");
          errorText.style.visibility = "hidden";
          setisSubmit(false);
          setIfFailed(false);
          setIsDoneSubmit(true);
        })
        .catch((error) => {
          console.error("Error:", error);
          setisSubmit(false);
          setIfFailed(true);
          var errorText = document.getElementById("form-submit-error");
          errorText.style.visibility = "visible";
        });
    }
  };
  const showForm = () => {
    formData.name = "";
    formData.email = "";
    formData.message = "";
    setIsDoneSubmit(false);
  };
  function hideError() {
    var errorText = document.getElementById("error-alert");
    errorText.style.visibility = "hidden";
  }
  if (isDoneSubmit) {
    return (
      <section id="contact-section">
        <div className="contact-container col-md-6">
          <div id="thank-you">
            <h1>Thank You</h1>
            <p id="ty-message">
              Your message has been sent. Thank you for writing. I&#39;ll get in
              touch with you shortly.
            </p>
            <a className="btn btn-primary" href="#home-section">
              Go To Top
            </a>
            <a className="btn btn-primary" onClick={showForm}>
              Send Another Message
            </a>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="contact-section">
      <div className="contact-container">
        <div id="form-submit-error">
          <p>
            An Error occured while submitting the form. Please retry after a
            while!
          </p>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="form-container">
                <h2>Write me a message!</h2>
                <form className="form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <p id="error-alert">All fields are mandatory</p>
                  {isSubmit ? (
                    <button
                      className="submit-button-disabled"
                      type="submit"
                      disabled
                    >
                      Submiting...
                    </button>
                  ) : ifFailed ? (
                    <button className="submit-button" type="submit">
                      Retry Submit
                    </button>
                  ) : (
                    <button className="submit-button" type="submit">
                      Submit
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
