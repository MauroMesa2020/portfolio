import Technologies from "../components/Technologies";
import Contact from "../components/Contact";
import ComponentsHero from "../components/ComponentsHero";


export default function Home(){
    return ( 
        
        <main className="min-h-screen bg-black"> 
            <ComponentsHero />
            
            <Technologies />

            <Contact />            
        </main>
    );
}
