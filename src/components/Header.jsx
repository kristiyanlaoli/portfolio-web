let Header = () => {
  return (
    <>
      <header className="bg-slate-950 sm:flex sm:justify-between sm:items-center sm:px-24 md:px-32 lg:px-36 xl:px-44">
        <h1 className="font-bold text-4xl text-white text-center py-2">Kris</h1>

        <nav id="nav-menu">
          <ul className="font-bold text-sm sm:text-lg text-slate-300 flex justify-center py-4">
            <li className="group mr-4">Home</li>
            <li className="group mx-4">About</li>
            <li className="group ml-4">Project</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
