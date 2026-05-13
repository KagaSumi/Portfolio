export default function Contact() {
    return (
        <section id="contact" className="py-32 border-t border-zinc-800">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-6">
                    Contact
                </h2>

                <p className="text-zinc-400 max-w-2xl leading-7">
                    If you want to talk about backend systems, infrastructure,
                    or collaboration, feel free to reach out.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <a
                        href="mailto:quinten.leung@gmail.com"
                        className="px-6 py-3 bg-white text-black rounded-lg font-medium text-center"
                    >
                        Email Me
                    </a>

                    <a
                        href="https://github.com/KagaSumi"
                        target="_blank"
                        className="px-6 py-3 border border-zinc-700 rounded-lg text-center hover:bg-zinc-900"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://linkedin.com/in/quintenl"
                        target="_blank"
                        className="px-6 py-3 border border-zinc-700 rounded-lg text-center hover:bg-zinc-900"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}
