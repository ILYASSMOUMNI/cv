import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Dashboard from "./components/sections/Dashboard";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-white antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Dashboard />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
