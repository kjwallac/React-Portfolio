import React, { useState } from "react";
import Header from "../components/Header";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Copyright from "../components/Copyright";
import Skills from "../components/Skills";

export default function Home() {
  const [userFocus, setUserFocus] = useState("");

  return (
    <>
      <Header class="App-header" setUserFocus={setUserFocus} userFocus={userFocus}/>
      <About userFocus={userFocus}/>
      <Skills userFocus={userFocus}/>
      <Projects userFocus={userFocus}/>
      <Contact userFocus={userFocus}/>
      <Copyright />
    </>
  );
}
