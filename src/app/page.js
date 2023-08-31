import React from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroCard from "@/components/herocard";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";



export default function HomePage() {
  return (
    <div style={{scrollSnapType:"y mandatory", height:"100vh",width:"100%", overflowX:"hidden", overflowY:"auto"}} >
      <Header />
      <section id="hero" style={{scrollSnapAlign:"start"}} >
        <HeroCard/>
      </section>
      <section id="about" style={{scrollSnapAlign:"start"}}>
        <About/>
      </section>
      <section id="skills" style={{scrollSnapAlign:"start"}}>
        <Skills/>
      </section>
      <section id="projects" style={{scrollSnapAlign:"start"}}>
        <Projects/>
      </section>

      <Footer />
    </div>
  );
}
