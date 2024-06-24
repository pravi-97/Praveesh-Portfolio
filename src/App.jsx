import { BrowserRouter, Routes } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from "./pages/Home";
import About from "./pages/About";
import Social from "./components/Social";
import Contact from "./pages/Contact";
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Social />
    <Home/>
    <About/>
    <Contact/>
    {/* <Routes> */}
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/blog" element={<Blogs />} />
      <Route path="/blog/:id" element={<Blog/>} />
      <Route path="/contact" element={<Contact />} /> */}
      {/* <Route path="/home" element={<Navigate to="/" />} /> */}
      {/* <Route path="/thankyou" element={<ThankYou />} />
      <Route path="/*" element={<Error />} /> */}
    {/* </Routes> */}
  </BrowserRouter>
  )
}

export default App