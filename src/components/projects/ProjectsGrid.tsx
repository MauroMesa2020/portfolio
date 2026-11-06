import { projects } from "../../data/Projects";
import ProjectCard from "./ProjectCard";

type Project = (typeof projects)[number];

interface ProjectsGridProps {
    projects: Project[];
}

export default function ProjectsGrid({
    projects
}: ProjectsGridProps) {

    if (projects.length === 0) {
        return (
            <div className="border border-white/10 p-12 text-center">
                <p className="text-sm text-zinc-500">
                    No projects found for this technology.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {projects.map((project) => (
                <ProjectCard
                    key={project.slug}
                    project={project}
                />
            ))}

        </div>
    );
}