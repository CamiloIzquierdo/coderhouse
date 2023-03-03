import { useContext, useState } from "react";
import { BsCreditCard2Back } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { CartContext } from "../context/CartContext";
import { GlobalContext } from "../context/GlobalContext";
import { usersService } from "../services/Ropa";

export const FinalForm = () => {
    const [formSubmiting, setFormSubmiting] = useState(false);
    const { cartItems } = useContext(CartContext);
    const { items } = useContext(GlobalContext);

    console.log(items);

    console.log(cartItems);

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setFormSubmiting(true);

        const dataElements = event.target.elements;
        const totalPrice = cartItems.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.precio;
        }, 0);

        const { id } = await usersService.postOrder({
            order: {
                nombre: dataElements.nombre.value,
                email: dataElements.email.value,
                direccion: dataElements.direccion.value,
                items: cartItems,
                total: totalPrice,
            },
        });

        /* // Paso 1
        const cartQuantities = {};
        cartItems.forEach((cartItem) => {
            if (cartItem.id in cartQuantities) {
                cartQuantities[cartItem.id] += cartItem.quant;
            } else {
                cartQuantities[cartItem.id] = cartItem.quant;
            }
        });

        // Paso 2 y 3
        const updatedItems = items.map((item) => {
            if (item.id in cartQuantities) {
                return {
                    ...item,
                    stock: item.stock - cartQuantities[item.id],
                };
            }
            return item;
        });
 */

        if (id) {
            navigate(`/orden/${id}`);
        }
    };

    return (
        <form
            className=" bg-white rounded-lg shadow px-4 py-6 max-w-md gap-5 flex flex-col"
            onSubmit={(evt) => handleSubmit(evt)}
        >
            <div className="flex justify-center items-center gap-2">
                <FaUserAlt className="text-2xl text-slate-800" />
                <h1 className="inline text-2xl font-semibold leading-none">
                    Tus datos
                </h1>
            </div>
            <div className="">
                <Input name="Nombre" id="nombre" />
                <Input name="Email" id="email" />
                <Input name="Dirección" id="direccion" />
            </div>
            <div>
                <Button btnColor="primary" type="sumbit">
                    <BsCreditCard2Back />
                    <span className="pl-2 mx-1">Crear orden</span>
                </Button>
            </div>
        </form>
    );
};
