import { Link } from "react-router-dom";

let NotFoundPage = () => {
  return (
    <>
    
      <div className=" bg-zinc-50 dark:bg-slate-900 text-center px-6 pt-[150px] md:pt-[180px] lg:pt-[240px] pb-24 sm:mx-8 sm:px-16 md:mx-16 lg:mx-20 xl:mx-24 xl:px-20">
        <h2 className=" mb-6">
          <span className="font-bold text-2xl text-loved-light dark:text-loved">
            404 Page Not Found
          </span>
        </h2>
        <button className="font-bold text-lg text-slate-600 dark:text-slate-300 p-2 border-2 border-slate-600 dark:border-slate-200 rounded-md hover:scale-[110%] ">
          <Link to="/">Back to Home</Link>
        </button>
      </div>
    </>
  );
};

export default NotFoundPage;
