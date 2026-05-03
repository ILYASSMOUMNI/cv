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
import DarkMatterBackground from "./components/ui/DarkMatterBackground";

function App() {
  return (
    <div className="relative min-h-screen text-dm-text antialiased" style={{ background: "transparent" }}>
      <DarkMatterBackground />
      <div className="relative z-10">
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
    </div>
  );
}

export default App;
