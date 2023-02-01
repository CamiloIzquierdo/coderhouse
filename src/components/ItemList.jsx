import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usersService } from "../services/Ropa";

export const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        usersService.getAll().then((data) => setItems(data));
    }, []);

    return (
        <div className="flex justify-center gap-4">
            {items.map(({ id, nombre, descripcion, image, categoria }) => (
                <div
                    key={id}
                    className="justify-center flex flex-col items-center"
                >
                    <Link to={`/item/${categoria}/${id}`}>
                        <img
                            src={image}
                            alt={`Imagen de ${nombre}`}
                            className="max-h-72"
                        />
                    </Link>
                    <h1>{nombre}</h1>
                    <h2>{descripcion}</h2>
                </div>
            ))}
        </div>
    );
};
