import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

let Header = () => {
  //--Dark theme --//
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  //--Dark Theme--//

  //--ColorTab--//

  const { pathname } = useLocation();
  const [activeTab, setActiveTab] = useState(`${pathname}`);
  useEffect(() => {
    if (pathname === "/") {
      setActiveTab("home");
    } else if (pathname === "/projects") {
      setActiveTab("projects");
    } else if (pathname === "/about") {
      setActiveTab("about");
    }
  }, [pathname]);
  //--ColorTab--//

  return (
    <>
      <header className=" dark:bg-slate-900 bg-zinc-50 border-b-[1px] border-slate-500 px-6  sm:px-24 md:px-32 lg:px-36 xl:px-44 fixed top-0 left-0 w-full z-30">
        <div className="flex justify-between ">
          <nav id="nav-menu">
            <ul className="font-bold text-sm sm:text-lg dark:text-slate-300 flex justify-center py-4">
              <li className="group">
                <Link
                  className={`mr-4 ${
                    activeTab === "home"
                      ? "text-loved-light dark:text-loved"
                      : "hover:text-loved-light dark:hover:text-loved"
                  }`}
                  to=""
                >
                  Home
                </Link>
              </li>

              <li className="group">
                <Link
                  className={`mx-4 ${
                    activeTab === "projects"
                      ? "text-loved-light dark:text-loved"
                      : "hover:text-loved-light dark:hover:text-loved"
                  }`}
                  to="projects"
                >
                  Projects
                </Link>
              </li>
              <li className="group">
                <Link
                  className={`mx-4 ${
                    activeTab === "about"
                      ? "text-loved-light dark:text-loved"
                      : "hover:text-loved-light dark:hover:text-loved"
                  }`}
                  to="about"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <button className="scale-[90%]" onClick={handleThemeChange}>
            <img
              className=""
              src={`/src/img/theme/${
                theme === "dark" ? "light-sun.gif" : "dark-bat.gif"
              }`}
              alt=""
            />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
