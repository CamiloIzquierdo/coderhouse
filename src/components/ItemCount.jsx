import { useContext, useEffect, useMemo, useState } from "react";
import * as Images from "../assets";
import { CartContext } from "../context/CartContext";
import { Button } from "./Button";

export const ItemCount = ({ addToCart, item }) => {
    const [quantitie, setQuantitie] = useState(0);
    const [dropdown, setDropdown] = useState(false);
    const { stock } = item;
    const { cartItems } = useContext(CartContext);

    const handleDropdown = () => {
        setDropdown(!dropdown);
    };

    const getStockForMakeList = useMemo(() => {
        return Array.from(Array(stock).keys());
    }, [stock]);

    const checkQuantity = (value) => {
        quantitie <= stock && setQuantitie(value);
        setDropdown(false);
    };

    useEffect(() => {
        const itemInCart = cartItems.find(
            (cartItem) => cartItem.id === item.id
        );

        if (itemInCart) {
            setQuantitie(itemInCart.quant);
        }
    }, [cartItems, item.id]);

    return (
        <div className="gap-5 flex flex-col ">
            <div className="flex gap-2">
                <div className="relative border border-blue-500 rounded-md cursor-pointer w-full">
                    <span
                        onClick={handleDropdown}
                        className="flex justify-between px-3 w-full"
                    >
                        {quantitie} unidades{" "}
                        <img
                            src={Images.Chevron}
                            className={`transition-all ${
                                dropdown ? "" : "rotate-180"
                            }`}
                            width={10}
                            alt="chevron"
                        />
                    </span>

                    {dropdown ? (
                        <ul className="absolute mt-2 rounded-xl shadow-lg bg-white text-black w-[102%] left-[-2px] scrollbar justify-start flex flex-col max-h-[125px] overflow-y-scroll">
                            {getStockForMakeList.map((index) => {
                                const totalIndex = index + 1;

                                return (
                                    <li
                                        key={index}
                                        className={`${
                                            totalIndex === quantitie
                                                ? " border-l-[2px] border-blue-600 "
                                                : "border-l-[2px]"
                                        } text-start cursor-pointer hover:bg-blue-300 pl-4`}
                                        onClick={() =>
                                            checkQuantity(totalIndex)
                                        }
                                    >
                                        {totalIndex === 1
                                            ? totalIndex + " Unidad"
                                            : totalIndex + " Unidades"}
                                    </li>
                                );
                            })}
                        </ul>
                    ) : (
                        ""
                    )}
                </div>
                <p className="text-gray-600 w-full">({stock} en stock)</p>
            </div>

            <Button
                disabled={quantitie === 0 ? true : false}
                onClick={() => addToCart({ product: item, quant: quantitie })}
            >
                Agregar al carrito
            </Button>
        </div>
    );
};
