let Writings = () => {
  return (
    <>
      <div className=" bg-slate-900 px-6 pt-20 -mt-1 pb-24 sm:mx-8 sm:px-16 md:mx-16 lg:mx-20 xl:mx-24 xl:px-20">
        <div className="relative bg-loved rounded-lg h-[40px] w-[130px] mx-auto mb-8">
          <div className="absolute bottom-2 right-2 h-[43px] w-[134px] border-4 border-slate-900 rounded-lg bg-slate-600">
            <h2 className=" font-bold text-2xl text-center text-loved">
              Writings
            </h2>
          </div>
        </div>
        <div>
          <div className="">
            <a href="/tulisan2">
              <div className="w-full group  hover:scale-[105%] p-3 mb-6 border-2 border-slate-200 rounded-md lg:p-6">
                <h2 className="font-bold text-2xl text-slate-200 mb-4">
                  My Gambling Decision: Become A Developer
                </h2>

                <p className="text-lg text-slate-300 mb-4 line-clamp-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Harum sed fugit vero reprehenderit perspiciatis reiciendis,
                  non porro totam repellendus ipsum? Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Natus, provident! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Pariatur, ipsam.
                </p>
                <p className="text-lg text-slate-500 mb-4">Desember 12, 2023</p>

                <button className="group  relative  text-lg font-bold text-slate-300  p border-slate-300 hover:text-loved hover:border-[#2cfc21]">
                  Read More
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-loved transition-all group-hover:w-full"></span>
                </button>
              </div>
            </a>
            <a href="/tulisan1">
              <div className="w-full group  hover:scale-[105%] p-3 mb-6 bg-slate-850 border-2 border-slate-200 rounded-md  lg:p-6">
                <h2 className="font-bold text-2xl text-slate-200 mb-4">
                  Learning New Things
                </h2>

                <p className="text-lg text-slate-300 mb-4 line-clamp-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Harum sed fugit vero reprehenderit perspiciatis reiciendis,
                  non porro totam repellendus ipsum? Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Natus, provident! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Pariatur, ipsam.
                </p>

                <p className="text-lg text-slate-500 mb-4">Desember 12, 2023</p>

                <button className="group  relative  text-lg font-bold text-slate-300  p border-slate-300 hover:text-loved hover:border-[#2cfc21]">
                  Read More
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-loved transition-all group-hover:w-full"></span>
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Writings;
