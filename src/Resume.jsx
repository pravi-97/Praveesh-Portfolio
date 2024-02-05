import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import "./styles/Resume.css";

const Resume = () => {
  useEffect(() => {
    document.title = "Praveesh P | Resume";
  }, []);

  return (
    <>
      <iframe
        src="https://docs.google.com/gview?url=https://praveesh-resume.s3.ap-south-1.amazonaws.com/Praveesh_Resume.docx&embedded=true"
        style={{
          width: "100%",
          height: "100vh",
          border: "none",
          backgroundColor: "white",
        }}
      ></iframe>
    </>
  );
};

export default Resume;
