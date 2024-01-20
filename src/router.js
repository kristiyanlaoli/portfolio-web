import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LayoutPage from "./pages/LayoutPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import About from "./pages/About.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import BookoePage from "./pages/projects/BookoePage.jsx";
import ResistorCalculatorPage from "./pages/projects/ResistorCalculatorPage.jsx";
import PortfolioWebPage from "./pages/projects/PortfolioWebPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: LayoutPage,
    children: [
      {
        path: "",
        Component: HomePage,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "projects",
        Component: ProjectsPage,
      },
      {
        path: "bookoe",
        Component: BookoePage,
      },
      {
        path: "resistor-calculator",
        Component: ResistorCalculatorPage,
      },
      {
        path: "portfolio-web",
        Component: PortfolioWebPage,
      },
    ],
  },

  { path: "/404", Component: NotFoundPage },
  { path: "*", Component: NotFoundPage },
]);

export default router;
