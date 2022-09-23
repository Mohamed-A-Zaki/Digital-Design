import "./App.scss";
import Navbar from "./Sections/Navbar/Navbar";
import Landing from "./Sections/Landing/Landing";
import AboutUs from "./Sections/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Landing></Landing>
      <AboutUs></AboutUs>
    </div>
  );
}

export default App;
