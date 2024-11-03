import "./index.css";
import Navbar from "./navbar";
import Home from "./home";
import Footer from "./footer";
import WordOfTheDay from "./WordOfTheDay"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/word" element = {<WordOfTheDay />}/>
          {/* <Route path="*" element = {} /> */}
          </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
