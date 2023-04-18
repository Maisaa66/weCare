import "./App.css";
import Button from "./components/UI/Buttons/Button";
import Login from "./components/Pages/Login/Login";
import NavBar from "./components/Layout/NavBar/NavBar";
import Footer from "./components/Layout/Footer/Footer";
import Home from "./components/Pages/Home/Home";
function App() {
  return (
    <div className="App">
      <Home></Home>

      <Footer></Footer>
    </div>
  );
}

export default App;
