import { projects } from "../data/projects";
import { container } from "../styles/layout";
import { card } from "../styles/ui";

export default function Projects() {
    return (
        <section className="py-16">
            <div className={container}>
                <h2 className="text-4xl font-bold mb-8">
                    Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <div key={project.title} className={card}>
                            <h3 className="text-xl font-semibold">
                                {project.title}
                            </h3>

                            <p className="mt-3 text-zinc-400 leading-7">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-4">
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
                                className="inline-block mt-4 text-sm text-white hover:underline"
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
