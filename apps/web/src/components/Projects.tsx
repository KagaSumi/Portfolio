const projects = [
    {
        title: "Project Name",
        description:
            "Short description of what the project does.",
        stack: ["React", "Go", "Docker"],
        github: "#",
    },

    {
        title: "Another Project",
        description:
            "Describe the technical focus or challenge.",
        stack: ["TypeScript", "Postgres"],
        github: "#",
    },
];

export default function Projects() {
    return (
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
    );
}
