export default function Footer() {
    return (
        <footer className="py-10 border-t border-zinc-800">
            <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between gap-4 text-sm text-zinc-500">
                
                <p>
                    © {new Date().getFullYear()} Quinten Leung
                </p>

                <div className="flex gap-6">
                    <a
                        href="https://github.com/KagaSumi"
                        className="hover:text-white"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://linkedin.com/in/quintenl"
                        className="hover:text-white"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="#hero"
                        className="hover:text-white"
                    >
                        Back to top ↑
                    </a>
                </div>
            </div>
        </footer>
    );
}
