import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LayoutPage from "./pages/LayoutPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import BookoePage from "./pages/BookoePage.jsx";

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
        path: "projects/bookoe",
        Component: BookoePage,
      },
    ],
  },

  { path: "/404", Component: NotFoundPage },
  { path: "*", Component: NotFoundPage },
]);

export default router;
