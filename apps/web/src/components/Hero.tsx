export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center">
            <div className="max-w-5xl mx-auto px-6">

                <p className="text-zinc-400 mb-4">
                    Full-stack Developer
                </p>

                <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                    Quinten Leung
                </h1>

                <p className="mt-6 text-xl text-zinc-400 max-w-2xl">
                    Building web apps, infrastructure,
                    and backend systems.
                </p>

                <div className="mt-8 flex gap-4">
                    <a href="#projects" className="bg-white text-black px-6 py-3 rounded-lg">
                        View Projects
                    </a>

                    <a href="https://github.com/KagaSumi"
                       className="border border-zinc-700 px-6 py-3 rounded-lg">
                        GitHub
                    </a>
                </div>

            </div>
        </section>
    );
}
