import "./App.scss";

import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import Footer from "./Sections/Footer/Footer";
import Navbar from "./Sections/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
