import React, { useEffect, useState } from "react";

const Resume = () => {
  useEffect(() => {
    document.title = "Praveesh P | Resume";
  }, []);
  return <h1>Resume</h1>;
};

export default Resume;
