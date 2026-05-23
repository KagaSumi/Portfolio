import { motion } from "framer-motion";
import { fadeUp } from "../styles/motion";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center">
            <div className="max-w-5xl mx-auto px-6">

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    custom={0}
                    className="text-zinc-400 mb-4"
                >
                    Backend & Infrastructure Developer
                </motion.p>

                <motion.h1
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    custom={1}
                    className="text-6xl md:text-7xl font-bold leading-tight"
                >
                    Quinten Leung
                </motion.h1>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    custom={2}
                    className="mt-6 text-xl text-zinc-400 max-w-2xl"
                >
                Building reliable systems — from cloud infrastructure to production pipelines.
                </motion.p>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    custom={3}
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
    );
}
