import "./App.scss";
import React, { useEffect, useState } from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navabr/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Skills from "./Components/Skills/Skills";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Loader from "./Components/Loader/loader.jsx";


function App() {
  const [loading, setloading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);
  gsap.registerPlugin(ScrollTrigger);
  return loading ? (
    <div className="app">
      <Loader></Loader>
    </div>
  ) : (
    <div className="App">
      <div className="landing">
        <div className="landing-bg">
          <Navbar />

          <Home />
          <About />
          <Skills />
          <Education />
        </div>
      </div>
      <Portfolio />
      <Contact />
      <div className="landing">
        <div className="landing-bg">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
