import { aboutData } from "../../data/aboutData";

export default function TechnologiesList() {
    return (
        <section className="mt-24">
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                Technologies
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
                {aboutData.technologies.map((technology) => (
                    <span
                        key={technology}
                        className="border border-white/10 px-4 py-2 text-sm text-zinc-500"
                    >
                        {technology}
                    </span>
                ))}
            </div>
        </section>
    );
}