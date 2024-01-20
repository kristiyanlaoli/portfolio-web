import { Link } from "react-router-dom";
import ApiIcon from "../components/icons/ApiIcon";
import ReactIcon from "../components/icons/ReactIcon";
import RouterIcon from "../components/icons/RouterIcon";
import TailwindIcon from "../components/icons/Tailwind";

let ProjectsPage = () => {
  return (
    <div id="projects">
      <div className=" bg-zinc-50 dark:bg-slate-900 px-6 pt-24 pb-24 sm:mx-8 sm:px-16 md:mx-16 lg:mx-20 xl:mx-24 xl:px-20">
        <div className="relative bg-loved rounded-lg h-[40px] w-[180px] mx-auto mb-8">
          <div className="absolute bottom-2 right-2 h-[43px] w-[183px] border-4 border-slate-600 dark:border-slate-900 rounded-lg bg-slate-300 dark:bg-slate-600">
            <h2 className=" font-bold text-2xl text-center dark:text-loved">
              Projects
            </h2>
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-6">
          <Link to="/bookoe">
            <div className="group border-2 border-slate-600 dark:border-slate-200 rounded-xl hover:scale-[105%] text-left w-full p-3 mb-6  lg:p-6 ">
              <h2 className="font-bold text-2xl text-slate-700 dark:text-slate-200 mb-4">
                Bookoe
              </h2>

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                Bookoe is a website that displays book lists. The list of books
                displayed can be from the latest or top picks. On a book page,
                the title, synopsis, author and publication date will be
                displayed.
              </p>
              <div className="flex mb-4">
                <ReactIcon />
                <TailwindIcon />
                <RouterIcon />
                <ApiIcon />
              </div>

              <img className="mb-4" src="/img/projects/project-1.png" alt="" />

              <button className="group  relative  text-lg font-bold text-slate-500 dark:text-slate-300  dark:hover:text-loved hover:border-[#2cfc21]">
                See More
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-loved transition-all group-hover:w-full"></span>
              </button>
            </div>
          </Link>
          <Link to="/resistor-calculator">
            <div className="group border-2 border-slate-600 dark:border-slate-200 rounded-xl hover:scale-[105%] text-left w-full p-3 mb-6  lg:p-6 ">
              <h2 className="font-bold text-2xl dark:text-slate-200 mb-4">
                Resistor Calculator
              </h2>

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                This is a simple website that allows us to calculate the
                resistance of a resistor. This can calculate the resistance of a
                resistor with variaty bands (3 bands, 4 bands, and 5 bands).
                This website uses ReactJs and TailwindCSS.
              </p>
              <div className="flex mb-4">
                <ReactIcon />
                <TailwindIcon />
              </div>

              <img
                className="mb-4"
                src="/img/projects/resistor-calculator.png"
                alt=""
              />

              <button className="group  relative  text-lg font-bold text-slate-600 dark:text-slate-300  dark:hover:text-loved hover:border-[#2cfc21]">
                See More
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-loved transition-all group-hover:w-full"></span>
              </button>
            </div>
          </Link>
          <Link to="/portfolio-web">
            <div className="group border-2 border-slate-600 dark:border-slate-200 rounded-xl hover:scale-[105%] text-left w-full p-3 mb-6  lg:p-6 ">
              <h2 className="font-bold text-2xl dark:text-slate-200 mb-4">
                Portfolio Web
              </h2>

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                This is my portfolio web or personal web that contains
                information about me, my skills, my project, or my blog.
              </p>
              <div className="flex mb-4">
                <ReactIcon />
                <TailwindIcon />
                <RouterIcon />
              </div>

              <img
                className="mb-4"
                src="/img/projects/portfolio-web.png"
                alt=""
              />

              <button className="group  relative  text-lg font-bold text-slate-600 dark:text-slate-300  dark:hover:text-loved hover:border-[#2cfc21]">
                See More
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-loved transition-all group-hover:w-full"></span>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
