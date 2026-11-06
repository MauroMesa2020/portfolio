import { aboutData } from "../../data/aboutData";

export default function Experience() {
    const experience = aboutData.experience;

    return (
        <section className="mt-24">
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                Recent Experience
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-white">
                {experience.position}
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-500">
                {experience.description}
            </p>

            <ul className="mt-8 space-y-4 text-zinc-500">
                {experience.responsibilities.map((item, index) => (
                    <li key={index}>
                        • {item}
                    </li>
                ))}
            </ul>
        </section>
    );
}