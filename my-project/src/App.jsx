import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Series from "./components/series/Series";
import Websites from "./components/Tech";
import PostPandemicPalooza from "./components/series/PostPandemicPalooza"
import BeatsAndMelody from "./components/series/BeatsNMelody";
import BubblegumCowgirl from "./components/series/BubblegumCowgirl";
import DeplorableDays from "./components/series/DeplorableDays";
import HokusPokus from "./components/series/HokusPokus";
import Shadowtown from "./components/series/Shadowtown";

function App() {
  return (
    <Router>
      <Routes>
        <>
          <Route path="/" element={<Homepage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/websites" element={<Websites/>} />
          <Route path="/series" element={<Series/>} />
          <Route path="/series/ppp" element={<PostPandemicPalooza/>} />
          <Route path="/series/bnm" element={<BeatsAndMelody/>} />
          <Route path="/series/bgcg" element={<BubblegumCowgirl/>} />
          <Route path="/series/dd" element={<DeplorableDays/>} />
          <Route path="/series/hp" element={<HokusPokus/>} />
          <Route path="/series/st" element={<Shadowtown/>} />
        </>
      </Routes>
    </Router>
  );
}

export default App;
