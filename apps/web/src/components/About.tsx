export default function About() {
    return (
        <section
            id="about"
            className="py-32"
        >
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-10">
                    About
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <p className="text-zinc-400 leading-8">
                            Write about yourself here.

                            Explain what you enjoy building,
                            what technologies interest you,
                            and what direction you want to grow in.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Technologies
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-zinc-900 rounded-lg">
                                React
                            </span>

                            <span className="px-4 py-2 bg-zinc-900 rounded-lg">
                                Go
                            </span>

                            <span className="px-4 py-2 bg-zinc-900 rounded-lg">
                                Docker
                            </span>

                            <span className="px-4 py-2 bg-zinc-900 rounded-lg">
                                PostgreSQL
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
