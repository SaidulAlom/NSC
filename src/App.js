import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Events from "./components/Events/Events";
import Teams from "./components/Members/Members";
import Registration from "./components/Registration/Registration";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Sports from "./components/Sports/Sports";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Teams />
      <Sports />
      <Events />
      <Registration />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
