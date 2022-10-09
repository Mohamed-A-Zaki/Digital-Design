import "./App.scss";

import { Navigate, Route, Routes } from "react-router-dom";

import Footer from "./Sections/Footer/Footer";
import Navbar from "./Sections/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import ServicesPage from "./Pages/ServicesPage";
import AboutPage from "./Pages/AboutPage";
import TeamPage from "./Pages/TeamPage";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
