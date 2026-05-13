import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Infrastructure from "./components/Infrastructure";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar />

            <main>
                <Hero />
                <About />
                <Projects />
                <Infrastructure />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
