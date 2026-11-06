import { useParams } from "react-router-dom";

import { projects } from "../data/Projects";

import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectTechnologies from "../components/projects/ProjectTechnologies";
import ProjectResponsibilities from "../components/projects/ProjectResponsibilities";
import ProjectArchitecture from "../components/projects/ProjectArchitecture";
import ProjectGithub from "../components/projects/ProjectGitHub";

export default function ProjectDetails() {

    const { slug } = useParams();

    const project = projects.find(
        (project) => project.slug === slug
    );

    if (!project) {
        return (
            <div className="px-6 pt-32 text-white">
                <h1 className="text-3xl font-semibold">
                    Project not found
                </h1>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-5xl px-6 pb-24 pt-32">

            <ProjectHeader
                name={project.name}
                description={project.description}
                company={project.company}
            />

            <ProjectTechnologies
                technologies={project.technologies}
            />

            <ProjectResponsibilities
                responsibilities={project.responsibilities}
            />

            <ProjectArchitecture
                architecture={project.architecture}
            />

            <ProjectGithub
                github={project.github}
            />

        </div>
    );
}