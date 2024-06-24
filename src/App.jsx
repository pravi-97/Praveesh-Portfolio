import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Social from "./components/Social";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Social />
      <Home />
      <About />
      <Contact />
    </BrowserRouter>
  );
}

export default App;
