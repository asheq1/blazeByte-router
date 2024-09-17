import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const MainLayouts = () => {
    return (
        <div className="min-h-screen flex flex-col" >
            <header className="h-16">
                <Nav />
            </header>
            <main className="flex-grow">
                <Outlet />
            </main>
            <footer >
                <Footer />
            </footer>
            
        </div>
    );
};

export default MainLayouts;