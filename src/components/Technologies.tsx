
import { Link } from "react-router-dom";

import {technologies} from "../data/technologies";

export default function Technologies() {
    return (
        <section
            id="technologies"
            className="scroll-mt-24 px-6 py-24"
        >
            <div className="mx-auto max-w-6xl">

                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
                    Technologies
                </p>

                <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                    Technologies I Work With
                </h1>

                <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">

                    {technologies.map((technology) => (
                        <Link
                            key={technology.slug}
                            to={`/projects?technology=${technology.slug}`}
                            className="flex flex-col items-center gap-4 border border-white/10 p-8 transition-colors hover:border-white/30"
                        >
                            <img
                                src={technology.logo}
                                alt={technology.name}
                                className="h-16 w-16 object-contain bg-white p-1"
                            />

                            <span className="text-sm text-zinc-500">
                                {technology.name}
                            </span>
                        </Link>
                    ))}

                </div>

            </div>
        </section>
    );
}

