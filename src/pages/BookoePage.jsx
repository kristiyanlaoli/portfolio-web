import ApiIcon from "../components/icons/ApiIcon";
import ReactIcon from "../components/icons/ReactIcon";
import RouterIcon from "../components/icons/RouterIcon";
import TailwindIcon from "../components/icons/Tailwind";

let BookoePage = () => {
  return (
    <>
      <div className=" bg-slate-850 px-6 pt-20 -mt-1 pb-24 sm:mx-8 sm:px-16 md:mx-16 lg:mx-20 xl:mx-24 xl:px-20">
        <h2 className=" mb-6">
          <span className="font-bold text-3xl text-loved">Bookoe</span>
        </h2>

        <h3 className="font-bold text-white text-xl">Description</h3>

        <p className="text-xl text-slate-300 ">
          Bookoe is a website that showcases a list of books ranging from the
          latest to top picks.
        </p>
        <h3 className="font-bold text-white text-xl mt-8">Background</h3>
        <p className="text-xl text-slate-300 ">
          Bookoe is my first project as I delve into the realm of front-end
          development. This project was assigned by the Codemasters.ID Bootcamp
          to assess the front-end learning outcomes of each student after
          approximately 5 weeks of learning.
        </p>

        <p className="font-bold text-white text-xl mt-8 mb-2">
          Tech Stack Used
        </p>
        <div className="flex mb-6">
          <ReactIcon />
          <TailwindIcon />
          <RouterIcon />
          <ApiIcon />
        </div>
        <p className="text-xl text-slate-300 ">
          Teach Stack Used in this project include ReactJs, Tailwind CSS, React
          Router, and an API.
          <br />
          <br />
          ReactJs serves as the primary technology in this mini-project, as
          almost every page component in Bookoe is crafted using React.
          <br />
          <br />
          The visual aesthetics are refined using Tailwind CSS, covering aspects
          such as color schemes, sizes, and Bookoe&apos;s responsiveness, all
          configured through Tailwind CSS.
          <br />
          <br />
          React Router is utilized to manage links within Bookoe, ensuring the
          site&apos;s structure and responsiveness. With this router, it becomes
          easy to select which components need to be reloaded or not,
          contributing to the overall speed of Bookoe.
          <br />
          <br />
          Bookoe&apos;s book data is sourced from dummy book data, including
          titles, synopses, ratings, authors, image URLs, and more. This data is
          fetched using async/await, and subsequently utilized to populate the
          content within Bookoe.
        </p>
      </div>
    </>
  );
};

export default BookoePage;
