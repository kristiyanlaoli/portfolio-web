import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects/>
      <TechStack />
      <Footer/>
    </>
  );
}

export default App;
