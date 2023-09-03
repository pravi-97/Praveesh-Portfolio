import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Contact = () => {
  const history = useNavigate();

  const [formData, setFormData] = useState({
    name: "Praveesh P",
    email: "praveesh@mail.com",
    message: "this is a test message",
  });
  const [ifFailed, setIfFailed] = useState(false);
  const [isSubmit, setisSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name == "" || formData.email == "" || formData.message == "") {
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
      const headers = {
        "Content-Type": "application/json",
      };
      axios
        .post(
          // "https://cdgnkm2gnl.execute-api.ap-south-1.amazonaws.com/test",
          "http://localhost:3000/post",
          JSON.stringify(form)
        )
        .then((response) => {
          var errorText = document.getElementById("form-submit-error");
          errorText.style.visibility = "hidden";
          console.log(response.status);
          setisSubmit(false);
          setIfFailed(false);
          history("/thankyou");
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
  function hideError() {
    var errorText = document.getElementById("error-alert");
    errorText.style.visibility = "hidden";
  }
  return (
    <section id="contact-section">
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
                {/* {ifFailed ? (
                  <p>An Error occured. Please retry after a while</p>
                ) : (
                  <p></p>
                )} */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
