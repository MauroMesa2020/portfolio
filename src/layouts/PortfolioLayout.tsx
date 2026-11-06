import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar";

export default function PortfolioLayout(){
        return (
        <div className="min-h-screen bg-black">

            <header className="fixed inset-x-0 top-0 z-50 bg-black">
                <TopBar />
            </header>

            <main>
                <Outlet />
            </main>

        </div>
    );
}