import { aboutData } from "../../data/aboutData";

export default function IntroductionText() {
    return (
        <section>
            {aboutData.introduction.map((paragraph, index) => (
                <p
                    key={index}
                    className={`text-lg leading-8 text-zinc-500 ${
                        index > 0 ? "mt-6" : ""
                    }`}
                >
                    {paragraph}
                </p>
            ))}
        </section>
    );
}