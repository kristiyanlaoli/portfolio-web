import ReactIcon from "../../components/icons/ReactIcon";
import TailwindIcon from "../../components/icons/Tailwind";
import LinkIcon from "../../components/icons/LinkIcon";

let ResistorCalculatorPage = () => {
  return (
    <>
      <div className=" bg-slate-850 px-6 pt-20 -mt-1 pb-24 sm:mx-8 sm:px-16 md:mx-16 lg:mx-20 xl:mx-24 xl:px-20">
        <img src="/img/projects/resistor-calculator.png" alt="" />
        <h2 className=" mt-6 mb-2">
          <span className="font-bold text-3xl text-loved-light dark:text-loved">
            Resistor Calculator
          </span>
        </h2>

        <p className="flex group mb-6 text-cool ">
          Open live site:
          <a
            className="flex  relative border-b-2 group"
            target="blank"
            href="https://resistor-calculator.vercel.app/"
          >
            <LinkIcon /> Resistor Calculator
            <span className="absolute -bottom-[2px] left-0 w-0 h-[2px] bg-loved transition-all group-hover:w-full"></span>
          </a>
        </p>

        <h3 className="h-cool">Description</h3>

        <p className="text-cool">
          This is a simple website that allows us to calculate the resistance of
          a resistor. This can calculate the resistance of a resistor with
          variaty bands (3 bands, 4 bands, and 5 bands). This website uses
          ReactJs and TailwindCSS.
        </p>
        <br />
        <h3 className="h-cool">Background</h3>
        <p className="text-cool">
          This is my side project aimed at improving my skills in using ReactJs
          and Tailwind. As a physicist, I sometimes engage in the field of
          instrumentation. One common task I perform is calculating the
          resistance value of resistors. Typically, I determine their resistance
          by referring to the resistor bands color and then manually calculating
          it. Hence, I decided to create a web app to quickly calculate resistor
          resistance.
        </p>
        <br />
        <p className="h-cool">Tech Stack Used</p>
        <div className="flex mb-6">
          <ReactIcon />
          <TailwindIcon />
        </div>
        <p className="text-cool">
          Teach Stack Used in this project include ReactJs and Tailwind CSS
          <br />
          <br />
          ReactJs serves as the primary technology in this project, every
          component in this project is crafted using React. Furthermore, this
          project also utilizes React Hooks such as useState and useEffect to
          manage state/values directly.
          <br />
          <br />
          The visual aesthetics are refined using Tailwind CSS, covering aspects
          such as color schemes, sizes, and Resistor Calculator&apos;s
          responsiveness, all configured through Tailwind. The color changes on
          the resistor are achieved using simple JavaScript logic and Tailwind.
        </p>
      </div>
    </>
  );
};

export default ResistorCalculatorPage;
