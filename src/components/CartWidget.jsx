import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Images from "../assets";
import { CartContext } from "../context/CartContext";
import { Button } from "./Button";
import { DataCheck } from "./DataCheck";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

export const CartWidget = () => {
    const [openCartDescription, setOpenCartDescription] = useState(false);
    const { cartItems, eliminarProducto, setCartItems } =
        useContext(CartContext);

    const navigate = useNavigate();

    function handleEliminarProducto(id) {
        eliminarProducto(id);
    }

    const clickOutSide = (evt) => {
        const outSide = evt.target.classList[0];
        if (
            outSide !== "dropdown__image" &&
            outSide !== "dropdown__button" &&
            outSide !== "dropdown__span" &&
            outSide !== "dropdown__list" &&
            outSide !== "dropdown__li"
        ) {
            setOpenCartDescription(false);
        }
    };

    useEffect(() => {
        openCartDescription
            ? document.addEventListener("click", clickOutSide)
            : document.removeEventListener("click", clickOutSide);

        return () => document.removeEventListener("click", clickOutSide);
    }, [openCartDescription]);

    return (
        <div className="relative" onClick={clickOutSide}>
            <div className="flex">
                <button
                    onClick={() => setOpenCartDescription(!openCartDescription)}
                    className="dropdown__button"
                >
                    <img
                        src={Images.CartIcon}
                        alt="Cart"
                        width={20}
                        className="dropdown__image"
                    />
                </button>
                <span className="dropdown__span top-[-8px] right-[-7px] text-white absolute bg-red-500 rounded-full text-[10px] font-bold w-[15px] h-[15px] flex items-center justify-center">
                    {cartItems.length}
                </span>
            </div>

            <ul
                className={`dropdown__list dropdown__close ${
                    openCartDescription ? "" : "hidden"
                } absolute left-0 bg-white shadow-lg p-2 rounded-md top-6 flex gap-2 flex-col md:left-[-200px] md:absolute md:top-10`}
            >
                <DataCheck
                    data={cartItems}
                    message="No hay articulos en tu carrito !"
                >
                    {cartItems.map(({ id, image_f, nombre, precio, quant }) => (
                        <div
                            key={id}
                            className="dropdown__li flex gap-2 items-center"
                        >
                            <div className="flex gap-2 w-64">
                                <div className="dropdown__li">
                                    <li className="dropdown__li w-20">
                                        <img
                                            src={image_f}
                                            alt={`Imagen de ${nombre}`}
                                            className="dropdown__image rounded-sm"
                                        />
                                    </li>
                                </div>
                                <div>
                                    <li className="dropdown__li font-bold">
                                        {nombre}
                                    </li>
                                    <li className="dropdown__li">${precio}</li>
                                </div>
                            </div>
                            <div className="dropdown__li">
                                <li className="dropdown__li">
                                    <BsTrash
                                        className="text-xl font-bold hover:text-red-500 hover:cursor-pointer"
                                        onClick={() =>
                                            handleEliminarProducto(id)
                                        }
                                    />
                                </li>
                            </div>
                        </div>
                    ))}
                </DataCheck>
                {cartItems.length > 0 && (
                    <>
                        <Button
                            btnColor="secondary"
                            onClick={() => navigate("/cart")}
                        >
                            <div className="flex gap-1">
                                <AiOutlineShoppingCart className="text-xl font-bold" />
                                Comprar carrito
                            </div>
                        </Button>
                        <Button
                            btnColor="tertiary"
                            onClick={() => setCartItems([])}
                        >
                            <div className="flex gap-1">
                                <BsTrash className="text-xl font-bold" />
                                Vaciar carrito
                            </div>
                        </Button>
                    </>
                )}
            </ul>
        </div>
    );
};
