import "./index.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";
import WordOfTheDay from "./pages/WordOfTheDay"
import Error from "./pages/ErrorPage";
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
          <Route path="*" element = {<Error/>} />
          </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
