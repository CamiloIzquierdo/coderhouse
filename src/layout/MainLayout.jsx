import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

export const MainLayout = () => {
    return (
        <div className="bg-gray-200">
            <Navbar />
            <div className="flex flex-col gap-6 pb-4 mx-10 justify-start items-center min-h-[calc(100vh-64px-90px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};
