import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    const goToSection = (section: string) => {
        navigate(`/#${section}`);

        setTimeout(() => {
            document.getElementById(section)?.scrollIntoView({
                behavior: "smooth"
            });
        }, 100);
    };

    return (
        <nav className="w-full px-8 py-6">
            <div className="flex items-center justify-between">

                <Link to="/" className="font-serif text-2xl italic text-white">
                    Portfolio
                </Link>

                <div className="flex items-center gap-8 text-white">

                    <Link to="/projects">
                        Projects
                    </Link>

                    <Link to="/about">
                        About
                    </Link>

                    <button onClick={() => goToSection("technologies")}>
                        Technologies
                    </button>

                    <button onClick={() => goToSection("contact")}>
                        Contact Me
                    </button>

                </div>
            </div>
        </nav>
    );
}