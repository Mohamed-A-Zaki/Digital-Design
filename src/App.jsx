import "./App.scss";

import { Navigate, Route, Routes } from "react-router-dom";

import Footer from "./Sections/Footer/Footer";
import Navbar from "./Sections/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import TeamPage from "./Pages/TeamPage";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import PortfolioPage from "./Pages/PortfolioPage";

function App() {
  return (
    <div className="App">
      <ScrollToTop></ScrollToTop>

      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
