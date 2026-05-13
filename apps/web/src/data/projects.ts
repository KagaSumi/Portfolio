export type Project = {
    title: string;
    description: string;
    stack: string[];
    github: string;
};

export const projects: Project[] = [
    {
        title: "Project Name",
        description: "Short description of what the project does.",
        stack: ["React", "Go", "Docker"],
        github: "#",
    },
    {
        title: "Relics and Receipts",
        description:
            "A 2D shop management game built in C++ using SDL3.",
        stack: ["C++", "SDL3"],
        github: "https://github.com/KagaSumi/Relics_and_Receipts",
    },
];
