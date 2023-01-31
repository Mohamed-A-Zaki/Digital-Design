import "./App.scss";

import React, { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Sections/Navbar/Navbar";
import Footer from "./Sections/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Loading from "./Components/Loading/Loading";

type Language = "en" | "ar";

function App() {
  const [lang] = useState<Language>("en");

  return (
    <div className="App" dir={lang === "ar" ? "rtl" : "ltr"}>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>

      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>

      <Footer></Footer>
    </div>
  );
}

export default App;
