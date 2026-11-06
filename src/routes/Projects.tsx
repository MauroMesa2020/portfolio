import { technologies } from "../data/technologies";

import useProjectFilters from "../hooks/useProjectFilters";

import ProjectFilters from "../components/projects/ProjectFilters";
import TotalProjects from "../components/projects/TotalProjects";
import ProjectsGrid from "../components/projects/ProjectsGrid";

export default function Projects() {

    const {
        selectedTechnology,
        filteredProjects,
        selectTechnology,
        selectedTechnologyName
    } = useProjectFilters();

    return (
        <div className="px-6 pb-24 pt-32">

            <div className="mx-auto flex max-w-7xl gap-12">

                <ProjectFilters
                    technologies={technologies}
                    selectedTechnology={selectedTechnology}
                    onSelectTechnology={selectTechnology}
                />

                <section className="min-w-0 flex-1">

                    <TotalProjects
                        title={selectedTechnologyName}
                        totalProjects={filteredProjects.length}
                    />

                    <ProjectsGrid
                        projects={filteredProjects}
                    />

                </section>

            </div>

        </div>
    );
}