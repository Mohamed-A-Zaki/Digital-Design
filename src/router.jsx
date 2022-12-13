import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import TeamPage from "./Pages/TeamPage";
import PortfolioPage from "./Pages/PortfolioPage";
import PortfolioDetailsPage from "./Pages/PortfolioDetailsPage";
import PricingPage from "./Pages/PricingPage";
import BlogListPage from "./Pages/BlogListPage";
import BlogDetailsPage from "./Pages/BlogDetailsPage";
import ContactPage from "./Pages/ContactPage";

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
