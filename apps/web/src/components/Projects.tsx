import { motion } from "framer-motion";

const projects = [
    {
        title: "Project Name",
        description:
            "Short description of what the project does.",
        stack: ["React", "Go", "Docker"],
        github: "#",
    },

    {
        title: "Relics and Reciepts",
        description:
            "A 2D shop management game built from scratch in C++ using SDL3. Play as a shopkeeper — manage your stockroom, haggle with customers, track your finances, and pay off your debt before time runs out.",
        stack: ["C++", "SDL3"],
        github: "https://github.com/KagaSumi/Relics_and_Receipts",
    },
];

export default function Projects() {
    return (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
        <section
            id="projects"
            className="py-32"
        >
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-12">
                    Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="border border-zinc-800 rounded-2xl p-6 bg-zinc-950"
                        >
                            <h3 className="text-2xl font-semibold">
                                {project.title}
                            </h3>

                            <p className="mt-4 text-zinc-400 leading-7">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-6">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-sm px-3 py-1 bg-zinc-900 rounded-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={project.github}
                                className="inline-block mt-6 text-sm text-white hover:underline"
                            >
                                View Project →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </motion.section>
    );
}
