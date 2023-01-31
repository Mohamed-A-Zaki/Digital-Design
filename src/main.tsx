import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

// react-router-dom
import router from "./router";
import { RouterProvider } from "react-router-dom";

// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// import swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);