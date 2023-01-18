import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";

export const Navbar = () => {
    return (
        <div>
            <nav className="justify-between flex bg-black items-center text-white p-3">
                <ul className="flex gap-5 ">
                    <Link to="/">
                        <li>Sobre nosotros</li>
                    </Link>
                    <Link to="/">
                        <li>Menu</li>
                    </Link>
                    <Link to="/">
                        <li>Contacto</li>
                    </Link>
                </ul>
                <div className="">
                    <CartWidget />
                </div>
            </nav>
        </div>
    );
};
