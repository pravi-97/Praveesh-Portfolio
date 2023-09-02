import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";
import Blog from "./Blog";
import Resume from "./Resume";
import Projects from "./Projects";
import Social from "./Social";
import FormRedirect from "./FormRedirect";
import Error from "./Error";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/redirect" element={<FormRedirect />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Social />
    </BrowserRouter>
  );
}

export default App;
