interface ProjectResponsibilitiesProps {
    responsibilities?: string[];
}

export default function ProjectResponsibilities({
    responsibilities
}: ProjectResponsibilitiesProps) {

    if (!responsibilities || responsibilities.length === 0) {
        return null;
    }

    return (
        <section className="mt-16">
            <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                Responsibilities
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-500">
                {responsibilities.map((responsibility) => (
                    <li key={responsibility}>
                        • {responsibility}
                    </li>
                ))}
            </ul>
        </section>
    );
}