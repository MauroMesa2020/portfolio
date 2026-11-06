export default function Contact() {
    return (
        <section
            id="contact"
            className="scroll-mt-24 px-6 py-24"
        >
            <div className="mx-auto max-w-6xl">
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
                    Contact
                </p>

                <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                    Let's work together.
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-500 md:text-lg">
                    Have a project in mind, or just want to get in touch?
                    Feel free to reach out.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <a
                        href="mailto:mauromesa2020@gmail.com"
                        className="border border-white/70 bg-yellow-400 px-7 py-3 text-center text-sm font-medium text-black transition-colors hover:bg-yellow-600"
                    >
                        Email Me
                    </a>

                    <a
                        href="/cv/Mauro-Mesa-CV.pdf"
                        download
                        className="border border-white/20 px-7 py-3 text-center text-sm font-medium text-white transition-colors hover:border-white hover:bg-white hover:text-black"
                    >
                        Download CV
                    </a>
                </div>

                <div className="mt-10 flex gap-6 text-sm">
                    <a
                        href="https://github.com/MauroMesa2020"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 transition-colors hover:text-white"
                    >
                        GitHub
                    </a>

                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 transition-colors hover:text-white"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}