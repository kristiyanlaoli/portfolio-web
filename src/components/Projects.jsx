import ApiIcon from "./icons/ApiIcon";
import ReactIcon from "./icons/ReactIcon";
import RouterIcon from "./icons/RouterIcon";
import TailwindIcon from "./icons/Tailwind";

let About = () => {
  return (
    <>
      <div className=" bg-slate-850 px-6 pt-20 -mt-1 pb-24 sm:mx-8 sm:px-16 md:mx-16 lg:mx-20 xl:mx-24 xl:px-20">
        <div className="relative bg-loved rounded-lg h-[40px] w-[130px] mx-auto mb-8">
          <div className="absolute bottom-2 right-2 h-[43px] w-[134px] border-4 border-slate-900 rounded-lg bg-slate-600">
            <h2 className=" font-bold text-2xl text-center text-loved">
              Projects
            </h2>
          </div>
        </div>
        <div>
          <div className="lg:grid lg:grid-cols-3 gap-x-6">
            <a
              href="/hai"
              className="group border-2 rounded-xl hover:scale-[105%] text-left w-full p-3 mb-6   lg:p-6"
            >
              <h2 className="font-bold text-2xl text-slate-200 mb-4">Bookoe</h2>

              <p className="text-lg text-slate-300 mb-4 line-clamp-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
                sed fugit vero reprehenderit perspiciatis reiciendis, non porro
                totam repellendus ipsum? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Natus, provident! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Pariatur, ipsam.
              </p>
              <div className="flex mb-4">
                <ReactIcon />
                <TailwindIcon />
                <RouterIcon />
                <ApiIcon />
              </div>

              <img
                className="mb-4"
                src="/src/img/projects/project-1.png"
                alt=""
              />

              <button className="group  relative  text-lg font-bold text-slate-300  p border-slate-300 hover:text-loved hover:border-[#2cfc21]">
                See More
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-loved transition-all group-hover:w-full"></span>
              </button>
            </a>

            <a
              href="/hai"
              className="group border-2 rounded-md hover:scale-[105%] text-left w-full p-3 mb-6   lg:p-6"
            >
              <h2 className="font-bold text-2xl text-slate-200 mb-4">My Portfolio Website</h2>

              <p className="text-lg text-slate-300 mb-4 line-clamp-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
                sed fugit vero reprehenderit perspiciatis reiciendis, non porro
                totam repellendus ipsum? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Natus, provident! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Pariatur, ipsam.
              </p>
              <div className="flex mb-4">
                <ReactIcon />
                <TailwindIcon />
                <RouterIcon />
                <ApiIcon />
              </div>

              <img
                className="mb-4"
                src="/src/img/projects/project-1.png"
                alt=""
              />

              <button className="group  relative  text-lg font-bold text-slate-300  p border-slate-300 hover:text-loved hover:border-[#2cfc21]">
                See More
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-loved transition-all group-hover:w-full"></span>
              </button>
            </a>

            <a
              href="/hai"
              className="group border-2 rounded-md hover:scale-[105%] text-left w-full p-3 mb-6   lg:p-6"
            >
              <h2 className="font-bold text-2xl text-slate-200 mb-4">Bookoe</h2>

              <p className="text-lg text-slate-300 mb-4 line-clamp-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
                sed fugit vero reprehenderit perspiciatis reiciendis, non porro
                totam repellendus ipsum? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Natus, provident! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Pariatur, ipsam.
              </p>
              <div className="flex mb-4">
                <ReactIcon />
                <TailwindIcon />
                <RouterIcon />
                <ApiIcon />
              </div>

              <img
                className="mb-4"
                src="/src/img/projects/project-1.png"
                alt=""
              />

              <button className="group  relative  text-lg font-bold text-slate-300  p border-slate-300 hover:text-loved hover:border-[#2cfc21]">
                See More
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-loved transition-all group-hover:w-full"></span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
