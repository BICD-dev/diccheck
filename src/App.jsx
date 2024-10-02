import './index.css';
import Navbar from './navbar';
import Home from './home';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
