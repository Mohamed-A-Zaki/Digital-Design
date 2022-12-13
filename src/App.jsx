import "./App.scss";

import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Sections/Navbar/Navbar";
import Footer from "./Sections/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
  const [lang] = useState("en");

  return (
    <div className="App" dir={lang === "ar" ? "rtl" : "ltr"}>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default App;
