import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usersService } from "../services/Ropa";

export const ItemCount = () => {
    const [count, setCount] = useState(0);
    const [stock, setStock] = useState();
    const { id } = useParams();

    useEffect(() => {
        usersService.get({ idRopa: id }).then((data) => setStock(data.stock));
    }, [id]);

    return (
        <div className="gap flex flex-col bg-black text-white">
            <p>Stock: {stock && stock}</p>
            <p>
                Ropa:
                {count < stock
                    ? count
                    : `${count} no se pueden agregar mas items`}
            </p>
            <button
                onClick={() => (count < stock ? setCount(count + 1) : null)}
            >
                Sumar
            </button>
            <button onClick={() => (count > 0 ? setCount(count - 1) : null)}>
                Restar
            </button>
        </div>
    );
};
