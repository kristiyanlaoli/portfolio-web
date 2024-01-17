import ApiIcon from "../../components/icons/ApiIcon";
import ReactIcon from "../../components/icons/ReactIcon";
import RouterIcon from "../../components/icons/RouterIcon";
import TailwindIcon from "../../components/icons/Tailwind";
import LinkIcon from "../../components/icons/LinkIcon";

let BookoePage = () => {
  return (
    <>
      <div className=" bg-slate-850 px-6 pt-20 -mt-1 pb-24 sm:mx-8 sm:px-16 md:mx-16 lg:mx-20 xl:mx-24 xl:px-20">
        <img src="/img/projects/project-1.png" alt="" />
        <h2 className=" mt-6 mb-2">
          <span className="font-bold text-3xl text-loved-light dark:text-loved">
            Bookoe
          </span>
        </h2>

        <p className="flex group mb-6 text-cool ">
          Open live site:
          <a
            className="flex  relative border-b-2 group"
            target="blank"
            href="https://bookoe-web.vercel.app/"
          >
            <LinkIcon /> Bookoe
            <span className="absolute -bottom-[2px] left-0 w-0 h-[2px] bg-loved transition-all group-hover:w-full"></span>
          </a>
        </p>

        <h3 className="h-cool">Description</h3>

        <p className="text-cool">
          Bookoe is a website that displays book lists. The list of books
          displayed can be from the latest or top picks. On a book page, the
          title, synopsis, author and publication date will be displayed.
        </p>
        <br />
        <h3 className="h-cool">Background</h3>
        <p className="text-cool">
          Bookoe is my first project as I delve into the realm of front-end
          development. This project was assigned by the Codemasters.ID Bootcamp
          to assess the front-end learning outcomes of each student after
          approximately 5 weeks of learning.
        </p>
        <br />
        <p className="h-cool">Tech Stack Used</p>
        <div className="flex mb-6">
          <ReactIcon />
          <TailwindIcon />
          <RouterIcon />
          <ApiIcon />
        </div>
        <p className="text-cool">
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
