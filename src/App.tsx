import "./App.scss";

import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./Sections/Navbar/Navbar";
import Footer from "./Sections/Footer/Footer";
import Loading from "./Components/Loading/Loading";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

type Language = "en" | "ar";

function App() {
  const [lang] = useState<Language>("en");

  return (
    <div className="App" dir={lang === "ar" ? "rtl" : "ltr"}>
      <ScrollToTop />
      <ToastContainer position="top-right" theme="dark" />
      <Navbar />

      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
