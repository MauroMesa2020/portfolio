interface Technology {
    name: string;
    slug: string;
}

interface ProjectFiltersProps {
    technologies: Technology[];
    selectedTechnology: string;
    onSelectTechnology: (slug: string) => void;
}

export default function ProjectFilters({
    technologies,
    selectedTechnology,
    onSelectTechnology
}: ProjectFiltersProps) {

    const sidebarTechnologies = [
        { name: "All", slug: "" },
        ...technologies
    ];

    return (
        <aside className="hidden w-52 shrink-0 md:block">

            <div className="sticky top-32">

                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
                    Filter
                </p>

                <nav className="flex flex-col">
                    {sidebarTechnologies.map((technology) => {

                        const isSelected =
                            technology.slug === selectedTechnology;

                        return (
                            <button
                                key={technology.slug}
                                onClick={() => onSelectTechnology(technology.slug)}
                                className={`border-l px-4 py-2 text-left text-sm transition-colors ${
                                    isSelected
                                        ? "border-white text-white"
                                        : "border-white/10 text-zinc-500 hover:border-white/30 hover:text-white"
                                }`}
                            >
                                {technology.name}
                            </button>
                        );
                    })}
                </nav>

            </div>

        </aside>
    );
}