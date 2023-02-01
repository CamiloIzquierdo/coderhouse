import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";
import { RoutesNav } from "../routes/RoutesNav";

export const Navbar = () => {
    return (
        <div>
            <nav className="justify-between flex bg-black items-center text-white p-3">
                <ul className="flex gap-5 ">
                    {RoutesNav.map(({ id, path, text }) => (
                        <Link key={id} to={path}>
                            <li>{text}</li>
                        </Link>
                    ))}
                </ul>
                <div className="">
                    <CartWidget />
                </div>
            </nav>
        </div>
    );
};
