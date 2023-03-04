import { useContext, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useTimeout } from "../hook/useTimeout";
import { Button } from "./Button";

export const SuccesfullOrder = () => {
    const { setCartItems } = useContext(CartContext);

    const { id } = useParams();
    return (
        <div className="justify-center border-2  rounded-lg items-center flex flex-col py-5 bg-white shadow-md max-w-xs md:min-w-[400px]">
            <svg
                className="checkmark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
            >
                <circle
                    className="checkmark__circle"
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                />
                <path
                    className="checkmark__check"
                    fill="none"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
            </svg>
            <div className="flex max-w-xs flex-col gap-7 justify-center items-center">
                <ConfettiExplosion
                    width={2000}
                    duration={3000}
                    particleCount={200}
                />

                <div className="flex flex-col gap-3 text-center md:text-left">
                    <h1 className="text-4xl font-semibold ">Felicidades!</h1>
                    <h2 className="text-base text-gray-500">
                        Tu pedido fue realizado! 🎉
                    </h2>
                </div>
                <div>
                    <p className="text-center font-medium">
                        Te envíaremos un mail con la factura de compra.
                    </p>
                </div>
                <span className="block h-[1px] w-full bg-gray-300 md:w-[95%]" />
                <p className="text-center px-2 font-semibold">
                    El numero de orden es:{" "}
                    <span className="font-medium">{id}</span>
                </p>
                <div className="flex justify-center md:justify-start">
                    <Link to="/">
                        <Button size="lg">Volver al inicio</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
