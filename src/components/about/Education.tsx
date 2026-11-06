import { aboutData } from "../../data/aboutData";

export default function Education() {
    const education = aboutData.education;

    return (
        <section>
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                Education
            </p>

            <a
                href={education.website}
                target="_blank"
                rel="noopener noreferrer"
                title="Go to UDE"
            >
                <img
                    src={education.logo}
                    alt="Universidad de la Empresa logo"
                    className="h-20 w-20 rounded-full object-contain shadow-lg transition-transform duration-300 hover:scale-105"
                />

                <p className="mt-2 text-zinc-500">
                    {education.institution}
                </p>
            </a>

            <p className="mt-1 text-sm text-zinc-500">
                {education.period}
            </p>
        </section>
    );
}