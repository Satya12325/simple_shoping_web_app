import logo from './logo.svg';
import './App.css';
import NavigationBar from './Components/Navbar';
import Home from './Pages/Home';
import Routing from './Router/Routing';

function App() {
  return (
    <div className="App">
     <NavigationBar/>
     {/* <Home/> */}
     <Routing/>
    </div>
  );
}

export default App;
