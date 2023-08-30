import React, { useState } from "react";
import "./Form.css"; // Import your custom CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    if(formData.name == "" || formData.email == "" || formData.message == ""){
        var errorText = document.getElementById("error-alert");
        errorText.style.visibility = "visible";
        setTimeout(hideError, 5000);
    }
    // You can add API calls or further processing here
  };
  function hideError(){
    var errorText = document.getElementById("error-alert");
    errorText.style.visibility = "hidden";
  }
  return (
    <section id="contact-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="form-container">
              <h2>Write me a message!</h2>
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <p id="error-alert">All fields are mandatory</p>
                <button className="submit-button" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
