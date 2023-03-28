import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Images from "../assets";
import { CartWidget } from "./CartWidget";

export const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [dropDown, setDropDown] = useState(false);

    const onClose = () => {
        setToggle(!toggle);
    };

    const clickOutSide = (evt) => {
        const outSide = evt.target.classList[0];
        if (outSide !== "dropdown__close") {
            setDropDown(false);
        }
    };

    useEffect(() => {
        dropDown
            ? document.addEventListener("click", clickOutSide)
            : document.removeEventListener("click", clickOutSide);

        return () => document.removeEventListener("click", clickOutSide);
    }, [dropDown]);

    return (
        <nav className="p-2 bg-white h-16 border-gray-200 dark:bg-gray-900 dark:border-gray-700 sticky top-0 z-10">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link to="/" className="flex items-center">
                    <img
                        src={Images.Reegod}
                        className="h-6 mr-3 sm:h-10"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
                </Link>
                <button
                    data-collapse-toggle="navbar-dropdown"
                    type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none outline-none focus:ring-2 focus:ring-gray-200 "
                    aria-controls="navbar-dropdown"
                    aria-expanded="false"
                    onClick={onClose}
                >
                    <img
                        src={Images.Burger}
                        alt=""
                        width={20}
                        className={`text-white `}
                    />

                    <span className="sr-only">Open main menu</span>
                </button>
                <div
                    className={`${
                        toggle ? "" : "hidden"
                    }  md:block md:w-auto w-screen pb-3 md:pb-0`}
                    id="navbar-dropdown"
                >
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:gap-2 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link
                                to="/"
                                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                                aria-current="page"
                            >
                                Inicio
                            </Link>
                        </li>
                        <li className="relative">
                            <button
                                id="dropdownNavbarLink"
                                data-dropdown-toggle="dropdownNavbar"
                                onClick={() => setDropDown(!dropDown)}
                                className="dropdown__close flex relative items-center justify-center w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                            >
                                <span className="" />
                                Nuestra ropa
                                <img
                                    src={Images.Arrow}
                                    className={`${
                                        dropDown ? "rotate-180" : "rotate-0"
                                    } md:relative absolute md:right-0 right-5`}
                                    width={20}
                                    alt=""
                                />
                            </button>

                            <div
                                id="dropdownNavbar"
                                className={`${
                                    dropDown ? "" : "hidden"
                                } md:top-[30px] md:left-[-40px] z-10 md:absolute md:w-44 font-normal w-full bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600`}
                                onClick={() => setDropDown(false)}
                            >
                                <ul
                                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                                    aria-labelledby="dropdownLargeButton"
                                >
                                    <li>
                                        <Link
                                            to="/categoria/camiseta"
                                            className="dropdown__close block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Camisetas
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/categoria/pantalon"
                                            className="dropdown__close block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Pantalones
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/categoria/buzo"
                                            className="dropdown__close block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Buzos
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/categoria/zapatilla"
                                            className="dropdown__close block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Zapatillas
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="flex mt-3 md:mt-0 ">
                            <CartWidget />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
