import { container } from "../styles/layout";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-900 py-10">
            <div className={container + " text-center text-zinc-500"}>

                <p className="text-sm">
                    Built with React, Vite, and Tailwind CSS
                </p>

                <p className="text-xs mt-2 text-zinc-600">
                    © {new Date().getFullYear()} Quinten Leung
                </p>

            </div>
        </footer>
    );
}
