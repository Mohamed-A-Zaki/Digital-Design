import "./App.scss";

import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import TeamPage from "./Pages/TeamPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import Navbar from "./Sections/Navbar/Navbar";
import PricingPage from "./Pages/PricingPage";
import Footer from "./Sections/Footer/Footer";
import ServicesPage from "./Pages/ServicesPage";
import BlogListPage from "./Pages/BlogListPage";
import PortfolioPage from "./Pages/PortfolioPage";
import BlogDetailsPage from "./Pages/BlogDetailsPage";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import PortfolioDetailsPage from "./Pages/PortfolioDetailsPage";

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
        <Route path="details" element={<PortfolioDetailsPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="blog-list" element={<BlogListPage />} />
        <Route path="blog-details" element={<BlogDetailsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
