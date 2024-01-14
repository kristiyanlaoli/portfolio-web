import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LayoutPage from "./pages/LayoutPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import BookoePage from "./pages/projects/BookoePage.jsx";
import About from "./components/About.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";

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
        path: "projects/bookoe",
        Component: BookoePage,
      },
    ],
  },

  { path: "/404", Component: NotFoundPage },
  { path: "*", Component: NotFoundPage },
]);

export default router;
