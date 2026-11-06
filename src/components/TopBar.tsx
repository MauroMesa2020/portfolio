import { Link } from "react-router-dom";

export default function Navbar() { 
    return ( 
        <nav className="w-full px-8 py-6"> 
            <div className="flex items-center justify-between"> {/* Navigation links */} 
                <Link to="/" className="font-serif text-2xl italic text-white" > Portfolio </Link> 
                <div className="flex items-center gap-8 text-white"> 
                    <Link to="/projects" className="transition-opacity hover:opacity-60"> Projects </Link> 
                    <Link to="/about" className="transition-opacity hover:opacity-60" > About </Link> 
                    
                    
                    <a href="/#technologies" className="transition-opacity hover:opacity-60">
                        Technologies
                    </a>
                    
                    <a href="/#contact" className="transition-opacity hover:opacity-60">
                        Contact Me
                    </a>

                </div> {/* Logo */} 
            </div> 
        </nav> 
    ); 
}