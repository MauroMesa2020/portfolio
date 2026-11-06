interface ProjectHeaderProps {
    name: string;
    description: string;
    company?: string;
}

export default function ProjectHeader({
    name,
    description,
    company
}: ProjectHeaderProps) {
    return (
        <>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                Project
            </p>

            <h1 className="mt-3 text-4xl font-semibold text-white md:text-6xl">
                {name}
            </h1>

            {company && (
                <p className="mt-3 text-sm text-zinc-500">
                    {company}
                </p>
            )}

            <p className="mt-10 max-w-3xl text-base leading-8 text-zinc-500">
                {description}
            </p>
        </>
    );
}