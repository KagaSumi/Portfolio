import { container } from "../styles/layout";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full border-b border-zinc-800 bg-black/60 backdrop-blur z-50">
            <div className={container + " py-4 flex justify-between items-center text-sm text-zinc-400"}>

                {/* Left side */}
                <div className="font-medium text-zinc-300">
                    Quinten Leung
                </div>

                {/* Right side */}
                <div className="flex gap-6">
                    <a href="#about" className="hover:text-white transition">
                        About
                    </a>
                    <a href="#projects" className="hover:text-white transition">
                        Projects
                    </a>
                    <a href="#contact" className="hover:text-white transition">
                        Contact
                    </a>
                </div>

            </div>
        </nav>
    );
}
