import { Link } from "react-router-dom";
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

  return (
    <>
      <header className=" dark:bg-slate-900 bg-zinc-50 border-b-[1px] border-slate-500 sm:flex sm:justify-between sm:items-center sm:px-24 md:px-32 lg:px-36 xl:px-44">
        <h1 className="font-bold text-4xl text-loved-light dark:text-loved text-center py-2">
          <a href="/">Kris</a>
        </h1>

        <nav id="nav-menu">
          <ul className="font-bold text-sm sm:text-lg dark:text-slate-300 flex justify-center py-4">
            <li className="group">
              <Link className="mx-4 hover:text-loved" to="">
                Home
              </Link>
            </li>

            <li className="group">
              <Link className="mx-4 hover:text-loved" to="projects">
                Projects
              </Link>
            </li>
            <li className="group">
              <Link className="mx-4 hover:text-loved" to="about">
                About
              </Link>
            </li>
            <button className="bg-green-200" onClick={handleThemeChange}>
              Dark
            </button>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
