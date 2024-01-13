// import SingleBookPage from "./SingleBookPage";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Writings from "../components/Writings";
import Hero from "/src/components/Hero.jsx";
import Projects from "/src/components/Projects.jsx";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Writings />
      <TechStack />
    </>
  );
}

export default HomePage;
