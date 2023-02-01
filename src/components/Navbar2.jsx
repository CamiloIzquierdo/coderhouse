import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar2() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between p-4 bg-gray-800">
            <div className="flex items-center">
                <Link to="/">
                    <p className="font-bold text-white text-xl">Mi Tienda</p>
                </Link>
            </div>
            <div className="relative">
                <button
                    className="relative z-10 block text-gray-500 hover:text-white focus:text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Nuestra Ropa <i className="fas fa-caret-down ml-2" />
                </button>
                {isOpen && (
                    <div className="absolute mt-12 bg-gray-800 text-white rounded w-48 py-2 shadow-lg">
                        <Link to="/ropa">
                            <p href="#" className="block px-4 py-2 text-sm">
                                Camisetas
                            </p>
                        </Link>
                        <Link to="/ropa">
                            <p href="#" className="block px-4 py-2 text-sm">
                                Pantalones
                            </p>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar2;
