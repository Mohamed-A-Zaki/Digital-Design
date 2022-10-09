import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

// import swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
