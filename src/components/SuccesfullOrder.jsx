import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { Button } from "./Button";

export const SuccesfullOrder = () => {
    const { setCartItems } = useContext(CartContext);
    const { id } = useParams();
    return (
        <div className="justify-center border-2 border-blue-500 rounded-lg items-center flex flex-col py-5 bg-white shadow-md max-w-xs">
            <h1>La orden se realizo correctamente</h1>
            <p>El numero de orden es: {id} </p>
            <Button btnColor="secondary" onClick={() => setCartItems([])}>
                Seguir comprando
            </Button>
        </div>
    );
};
