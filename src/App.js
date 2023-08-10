import logo from "./logo.svg";
import "./App.css";
import Approuter from "./routers/Approuter";
import AppNavbar from "./routers/AppNavbar";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <Approuter/>
  
      
    </div>
  );
}

export default App;
