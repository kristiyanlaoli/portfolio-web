import { Link } from "react-router-dom";

let Header = () => {
  return (
    <>
      <header className="bg-slate-900  sm:flex sm:justify-between sm:items-center sm:px-24 md:px-32 lg:px-36 xl:px-44">
        <h1 className="font-bold text-4xl text-loved text-center py-2">
          <a href="/">Kris</a>
        </h1>

        <nav id="nav-menu">
          <ul className="font-bold text-sm sm:text-lg text-slate-300 flex justify-center py-4">
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
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
