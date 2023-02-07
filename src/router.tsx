import { createHashRouter } from "react-router-dom";

import App from "./App";
import React from "react";

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

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: "not found",
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
