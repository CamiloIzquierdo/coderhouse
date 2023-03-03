import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usersService } from "../services/Ropa";
import { ShowItems } from "./ShowItems";

export const Categorias = () => {
    const [category, setCategory] = useState([]);

    const { categoria } = useParams();

    useEffect(() => {
        usersService
            .getDesc({ idCategoria: categoria })
            .then((data) => setCategory(data));
    }, [categoria]);

    return (
        <div>
            <ShowItems productData2={category} />
        </div>
    );
};
