// import SingleBookPage from "./SingleBookPage";
import SelectedProjects from "../components/SelectedProjects";
import TechStack from "../components/TechStack";
import Writings from "/src/components/Writings.jsx";
import Hero from "/src/components/Hero.jsx";

function HomePage() {
  return (
    <>
      <Hero />
      <SelectedProjects />
      <Writings />
      <TechStack />
    </>
  );
}

export default HomePage;
