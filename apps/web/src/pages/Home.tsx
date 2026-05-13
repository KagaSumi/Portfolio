import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";

export default function Home(){
    return (
        <div>
        <section id="hero">
            <Hero />
        </section>

        <section id="about">
            <About />
        </section>

        <section id="projects">
            <Projects />
        </section>
        </div>
    );
}

