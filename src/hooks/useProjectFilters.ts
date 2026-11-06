import { useSearchParams } from "react-router-dom";

import { projects } from "../data/Projects";
import { technologies } from "../data/technologies";

export default function useProjectFilters() {

    const [searchParams, setSearchParams] = useSearchParams();

    const selectedTechnology = searchParams.get("technology") ?? "";

    const filteredProjects = selectedTechnology
        ?   projects.filter((project) =>
                project.technologies.includes(selectedTechnology)
            )
        : projects;

    const selectTechnology = (slug: string) => {

        if (slug) {
            setSearchParams({ technology: slug });
        } else {
            setSearchParams({});
        }

    };

    const selectedTechnologyName =
        technologies.find(
            (technology) => technology.slug === selectedTechnology
        )?.name ?? "All Projects";

    return {
        selectedTechnology,
        filteredProjects,
        selectTechnology,
        selectedTechnologyName
    };
}