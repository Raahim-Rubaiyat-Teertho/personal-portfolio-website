import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import AboutMe from "./components/about";
import { BackgroundBeams } from "./components/ui/background-beams";
import Intro from "./components/intro";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Intro />
      <AboutMe />
      <BackgroundBeams />
    </>
  );
}

export default App;
