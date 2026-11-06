import AboutIntroduction from "../components/about/AboutIntroduction";
import IntroductionText from "../components/about/IntroductionText";
import Education from "../components/about/Education";
import Experience from "../components/about/Experience";
import TechnologiesList from "../components/about/TechnologiesList";

export default function About() {
    return (
        <div className="mx-auto max-w-5xl px-6 py-24">

            <AboutIntroduction />

            <div className="mt-12 grid gap-16 md:grid-cols-[2fr_1fr]">

                <IntroductionText />

                <Education />

            </div>

            <Experience />

            <TechnologiesList />

        </div>
    );
}