import { Link } from "react-router-dom";

import type { Project } from "../../data/Projects";
import {technologies} from "../../data/technologies";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="flex flex-col border border-white/10 transition-colors hover:border-white/30">
            <div className="aspect-video w-full overflow-hidden bg-neutral-900">
                <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="flex flex-1 flex-col p-5">
                <h2 className="text-lg font-medium text-white">
                    {project.name}
                </h2>

                {project.company && (
                    <span className="mt-1 text-xs text-zinc-500">
                        {project.company}
                    </span>
                )}

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-500">
                    {project.description}
                </p>

                <div className="mt-6">
                    <h3 className="text-sm font-medium text-white">
                        Technologies
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-3">
                        {project.technologies.map((technologySlug) => {
                            const technology = technologies.find(
                                (technology) =>
                                    technology.slug === technologySlug
                            );

                            if (!technology) return null;

                            return (
                                <div
                                    key={technology.slug}
                                    title={technology.name}
                                    className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/5 p-2"
                                >
                                    <img
                                        src={technology.logo}
                                        alt={technology.name}
                                        className="h-full w-full object-contain  bg-white p-1"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-auto flex items-center gap-3 pt-6">
                    {project.github ? (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-white/20 px-4 py-2 text-xs font-medium text-white transition-colors hover:border-white hover:bg-white hover:text-black"
                        >
                            GitHub
                        </a>
                    ) : (
                        <span className="text-xs text-zinc-500">
                            Private project
                        </span>
                    )}

                    <Link
                        to={`/projects/${project.slug}`}
                        className="border border-white/20 px-4 py-2 text-xs font-medium text-white transition-colors hover:border-white hover:bg-white hover:text-black"
                    >
                        Read more
                    </Link>
                </div>
            </div>
        </article>
    );
}