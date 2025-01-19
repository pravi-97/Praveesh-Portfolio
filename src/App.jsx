import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CursorBubble from "./components/CursorBubble";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CursorBubble />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
