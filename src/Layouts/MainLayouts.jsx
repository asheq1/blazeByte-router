import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const MainLayouts = () => {
    return (
        <div className="min-h-screen flex flex-col" >
            <header className="h-16 fixed w-full z-10">
                <Nav />
            </header>
            <main className="flex-grow mt-16">
                <Outlet />
            </main>
            <footer >
                <Footer />
            </footer>
            
        </div>
    );
};

export default MainLayouts;