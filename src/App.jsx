import "./index.css";
import Navbar from "./navbar";
import Home from "./home";
import About from "./About";
import Footer from "./footer";
import Contact from "./Contact";
import WordOfTheDay from "./WordOfTheDay"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about" element = {<About />} />
          <Route path="/word" element = {<WordOfTheDay />}/>
          <Route path="/contact" element = {<Contact />} />
          </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
