import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";
import Blogs from "./Blogs";
import Resume from "./Resume";
import Projects from "./Projects";
import Social from "./Social";
import ThankYou from "./ThankYou";
import Error from "./Error";
import Blog from "./Blog"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blog/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Social />
    </BrowserRouter>
  );
}

export default App;
