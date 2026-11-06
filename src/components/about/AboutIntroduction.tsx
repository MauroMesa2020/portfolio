import { aboutData } from "../../data/aboutData";

export default function AboutIntroduction() {
    return (
        <>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
                About me
            </p>

            <h1 className="text-5xl font-semibold tracking-tight md:text-6xl text-white">
                {aboutData.name}
            </h1>

            <p className="mt-4 text-xl text-yellow-400">
                {aboutData.profession}
            </p>
        </>
    );
}