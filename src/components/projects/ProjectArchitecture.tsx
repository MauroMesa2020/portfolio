interface ProjectArchitectureProps {
    architecture?: string;
}

export default function ProjectArchitecture({
    architecture
}: ProjectArchitectureProps) {

    if (!architecture) {
        return null;
    }

    return (
        <section className="mt-16">
            <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                Architecture
            </h2>

            <p className="mt-5 text-sm leading-7 text-zinc-500">
                {architecture}
            </p>
        </section>
    );
}