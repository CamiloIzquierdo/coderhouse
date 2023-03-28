import { Fragment, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { CartContext } from "../context/CartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";

export const Cart = () => {
    const { cartItems, eliminarProducto } = useContext(CartContext);

    const navigate = useNavigate();

    function handleEliminarProducto(id) {
        eliminarProducto(id);
    }

    return (
        <div className="flex gap-20 p-10 md:flex-row flex-col ">
            <div className="flex flex-[66%] flex-col gap-5">
                {cartItems.map(
                    ({
                        id,
                        nombre,
                        image_f,
                        descripcion,
                        precio,
                        categoria,
                    }) => (
                        <div
                            key={id}
                            className="flex gap-5 justify-between flex-col md:flex-row items-center md:w-[100vh] h-full bg-white rounded-md w-full"
                        >
                            <img
                                src={image_f}
                                alt=""
                                className="rounded-tl-md rounded-bl-md h-full object-cover w-40 mt-2 md:w-[200px] md:mt-0"
                            />

                            <div className="flex flex-col justify-between items-center py-5 h-full px-5 w-full">
                                <div className="flex gap-10 w-full justify-between">
                                    <div className="flex flex-col gap-4 items-start h-full justify-center">
                                        <h1 className="md:text-xl text-sm text-center font-semibold">
                                            {nombre}
                                        </h1>

                                        {/* <p>{descripcion}</p> */}
                                    </div>
                                    <div className="h-full gap-4 flex flex-col">
                                        <h1 className="text-xl font-semibold">
                                            Precio
                                        </h1>

                                        <p>${precio}</p>
                                    </div>
                                </div>
                                <div className="flex gap-5 mt-2 md:mt-0">
                                    <button
                                        className="text-blue-400 cursor-pointer flex gap-2 items-center hover:text-red-500
                                "
                                        onClick={() =>
                                            handleEliminarProducto(id)
                                        }
                                    >
                                        <BsTrash /> Eliminar
                                    </button>
                                    <button
                                        className="text-blue-400 cursor-pointer flex gap-2 items-center hover:text-yellow-500
                                "
                                        onClick={() =>
                                            navigate(
                                                `../categoria/${categoria}/${id}`
                                            )
                                        }
                                    >
                                        <FaPencilAlt /> Modificar
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>

            <div className="flex flex-[33%] bg-white rounded-md sticky top-20 flex-col p-4 justify-between h-full">
                <div>
                    <h1 className="text-xl font-semibold flex gap-2 items-center">
                        <AiOutlineShoppingCart />
                        Comprar carrito
                    </h1>
                </div>
                <ul className="flex gap-5 justify-between items-center w-full flex-col py-5">
                    {cartItems.map(({ id, nombre, precio, quant }) => (
                        <li
                            key={id}
                            className="flex justify-between w-full gap-5 min-w-[200px]"
                        >
                            <div className="flex gap-4">
                                {quant}x <span>{nombre}</span>
                            </div>
                            <div>${precio * quant}</div>
                        </li>
                    ))}
                </ul>

                <Button
                    btnColor="tertiary"
                    onClick={() => navigate("/dataform")}
                >
                    Comprar
                </Button>
            </div>
        </div>
    );
};
