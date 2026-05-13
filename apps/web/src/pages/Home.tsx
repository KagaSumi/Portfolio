import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Systems from "../components/Systems";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Reveal from "../components/Reveal";

export default function Home() {
    return (
        <div className="bg-zinc-950 text-zinc-100">
            <main className="space-y-32">

                <section id="hero">
                    <Reveal>
                        <Hero />
                    </Reveal>
                </section>

                <section id="about">
                    <Reveal>
                        <About />
                    </Reveal>
                </section>

                <section id="projects">
                    <Reveal>
                        <Projects />
                    </Reveal>
                </section>

                <section id="systems">
                    <Reveal>
                        <Systems />
                    </Reveal>
                </section>

                <section id="experience">
                    <Reveal>
                        <Experience />
                    </Reveal>
                </section>

                <section id="Education">
                    <Reveal>
                        <Education />
                    </Reveal>
                </section>

                <section id="contact">
                    <Reveal>
                        <Contact />
                    </Reveal>
                </section>

            </main>
        </div>
    );
}
