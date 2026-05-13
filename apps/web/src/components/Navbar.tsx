export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full border-b border-zinc-800 bg-black/60 backdrop-blur">
            <div className="max-w-5xl mx-auto px-6 py-4 flex justify-end gap-6 text-sm text-zinc-400">
                <a href="#about" className="hover:text-white">About</a>
                <a href="#projects" className="hover:text-white">Projects</a>
                <a href="#contact" className="hover:text-white">Contact</a>
            </div>
        </nav>
    );
}
