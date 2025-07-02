import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import AboutMe from "./components/about";
import { BackgroundBeams } from "./components/ui/background-beams";
import Intro from "./components/intro";
import Experience from "./components/experience";
import Navbar from "./components/ui/navbar";
import Projects from "./components/projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <title>Teertho | Portfolio</title>
      <Navbar />
      <Intro />
      <AboutMe />
      <Experience />
      <Projects />
      <BackgroundBeams />
    </>
  );
}

export default App;
