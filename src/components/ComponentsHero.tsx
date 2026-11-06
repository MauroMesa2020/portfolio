import LinkButton from "./common/LinkButton";
import Typewriter from "./Typewriter";

export default function ComponentsHero(){
    return (
        <section className="flex min-h-[calc(100vh-100px)] flex-col items-center justify-center text-center">
                        
            <p className="mb-3 text-lg text-zinc-500">
                Hello, I'm Mauro Mesa
            </p>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-500 md:text-lg"> 
                <Typewriter text="Building web applications, backend systems and AI-powered solutions." speed={20} />
            </p>

            <h1 className="text-6xl font-semibold tracking-tight text-white">
                Software Developer
            </h1>

            <div className="mt-10 flex gap-4">

                <LinkButton 
                    to="/projects" 
                    className="border border-white/70 bg-yellow-400 px-7 py-3 text-sm font-medium text-black transition-colors hover:bg-yellow-600"
                    children="View Projects"
                />

                <LinkButton 
                
                    to="/about"
                    className="border border-white/70 bg-transparent px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
                    children="About Me"
                />

            </div>

        </section>
        
    );
}