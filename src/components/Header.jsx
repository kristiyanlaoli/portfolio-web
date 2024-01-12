let Header = () => {
  return (
    <>
      <header className="bg-slate-900  sm:flex sm:justify-between sm:items-center sm:px-24 md:px-32 lg:px-36 xl:px-44">
        <h1 className="font-bold text-4xl text-loved text-center py-2">Kris</h1>

        <nav id="nav-menu">
          <ul className="font-bold text-sm sm:text-lg text-slate-300 flex justify-center py-4">
            <li className="group">
              <a className="mr-4 hover:text-loved" href="#about">
                About
              </a>
            </li>
            <li className="group">
              <a className="mx-4 hover:text-loved" href="#project">
                Project
              </a>
            </li>
            <li className="group">
              <a className="ml-4 hover:text-loved" href="#tech-stack">
                Tech Stack
              </a>
            </li>
  
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
