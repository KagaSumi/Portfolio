import { motion } from "framer-motion";

export default function Hero() {
    return (
        <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.4 }}
>
        <section id="hero" className="min-h-screen flex items-center">
            <div className="max-w-5xl mx-auto px-6">

                {/* Role */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-zinc-400 mb-4"
                >
                    Full-stack Developer
                </motion.p>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-6xl md:text-7xl font-bold leading-tight"
                >
                    Quinten Leung
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                    className="mt-6 text-xl text-zinc-400 max-w-2xl"
                >
                    Building web apps, infrastructure,
                    and backend systems.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="mt-8 flex gap-4"
                >
                    <a
                        href="#projects"
                        className="bg-white text-black px-6 py-3 rounded-lg font-medium"
                    >
                        View Projects
                    </a>

                    <a
                        href="https://github.com/KagaSumi"
                        className="border border-zinc-700 px-6 py-3 rounded-lg"
                    >
                        GitHub
                    </a>
                </motion.div>

            </div>
        </section>
        </motion.section>
    );
}
