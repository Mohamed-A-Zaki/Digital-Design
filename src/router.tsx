import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import React from "react";

// import HomePage from "./Pages/HomePage";
// import AboutPage from "./Pages/AboutPage";
// import ServicesPage from "./Pages/ServicesPage";
// import TeamPage from "./Pages/TeamPage";
// import PortfolioPage from "./Pages/PortfolioPage";
// import PortfolioDetailsPage from "./Pages/PortfolioDetailsPage";
// import PricingPage from "./Pages/PricingPage";
// import BlogListPage from "./Pages/BlogListPage";
// import BlogDetailsPage from "./Pages/BlogDetailsPage";
// import ContactPage from "./Pages/ContactPage";

const HomePage = React.lazy(() => import("./Pages/HomePage"));
const AboutPage = React.lazy(() => import("./Pages/AboutPage"));
const ServicesPage = React.lazy(() => import("./Pages/ServicesPage"));
const TeamPage = React.lazy(() => import("./Pages/TeamPage"));
const PortfolioPage = React.lazy(() => import("./Pages/PortfolioPage"));
const PricingPage = React.lazy(() => import("./Pages/PricingPage"));
const BlogListPage = React.lazy(() => import("./Pages/BlogListPage"));
const BlogDetailsPage = React.lazy(() => import("./Pages/BlogDetailsPage"));
const ContactPage = React.lazy(() => import("./Pages/ContactPage"));
const PortfolioDetailsPage = React.lazy(
  () => import("./Pages/PortfolioDetailsPage")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "team",
        element: <TeamPage />,
      },
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "details",
        element: <PortfolioDetailsPage />,
      },
      {
        path: "pricing",
        element: <PricingPage />,
      },
      {
        path: "blog-list",
        element: <BlogListPage />,
      },
      {
        path: "blog-details",
        element: <BlogDetailsPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
