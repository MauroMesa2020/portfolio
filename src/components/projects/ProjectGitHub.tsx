interface ProjectGithubProps {
    github?: string;
}

export default function ProjectGithub({
    github
}: ProjectGithubProps) {

    if (!github) {
        return null;
    }

    return (
        <div className="mt-16">
            <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white/70 bg-yellow-400 px-7 py-3 text-sm font-medium text-black transition-colors hover:bg-yellow-600"
            >
                View on GitHub
            </a>
        </div>
    );
}