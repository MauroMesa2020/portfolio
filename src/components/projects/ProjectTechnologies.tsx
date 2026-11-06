interface ProjectTechnologiesProps {
    technologies: string[];
}

export default function ProjectTechnologies({
    technologies
}: ProjectTechnologiesProps) {
    return (
        <section className="mt-16">
            <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                Technologies
            </h2>

            <div className="mt-5 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                    <span
                        key={technology}
                        className="border border-white/10 px-3 py-2 text-sm text-zinc-500"
                    >
                        {technology}
                    </span>
                ))}
            </div>
        </section>
    );
}