import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Series from "./components/series/Series";
import Websites from "./components/Tech";

function App() {
  return (
    <Router>
      <Routes>
        <>
          <Route path="/" element={<Homepage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/websites" element={<Websites/>} />
          <Route path="/series" element={<Series/>} />
        </>
      </Routes>
    </Router>
  );
}

export default App;
