import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const Resume = () => {
  useEffect(() => {
    document.title = "Praveesh P | Resume";
  }, []);
  return <Loader/>;
};

export default Resume;
