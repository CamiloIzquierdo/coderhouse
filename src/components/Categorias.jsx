import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { usersService } from "../services/Ropa";

export const Categorias = () => {
    const [category, setCategory] = useState([]);

    const { categoria } = useParams();

    useEffect(() => {
        usersService
            .getDesc({ idCategoria: categoria })
            .then((data) => setCategory(data));
    }, [categoria]);

    console.log(category);

    return (
        <div>
            {category.map(({ id, image, nombre }) => (
                <div key={id}>
                    <Link to={`/item/${categoria}/${id}`}>
                        <img src={image} alt={`imagen de ${nombre}`} />
                    </Link>
                    <h1>{nombre}</h1>
                </div>
            ))}
        </div>
    );
};
