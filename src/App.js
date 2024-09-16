
import Navbar from './navbar';
import Home from './home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home></Home>
        <p>App Component</p>
      </div>
    </div>
  );
}

export default App;
