import React from "react";

import Projects from "../components/Projects";
import Chips from "../components/Chips";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <About />
      <Chips />
      <Projects />
      <Contact />
    </>
  );
}
