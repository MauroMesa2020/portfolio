interface TotalProjectsProps {
    title: string;
    totalProjects: number;
}

export default function TotalProjects({
    title,
    totalProjects
}: TotalProjectsProps) {

    return (
        <div className="mb-12">

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
                Projects
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                {title}
            </h1>

            <p className="mt-4 text-sm text-zinc-500">
                {totalProjects}{" "}
                {totalProjects === 1 ? "project" : "projects"}
            </p>

        </div>
    );
}