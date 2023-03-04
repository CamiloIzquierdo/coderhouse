import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usersService } from "../services/Ropa";
import { ShowItems } from "./ShowItems";
import { Title } from "./Title";

export const Categorias = () => {
    const [category, setCategory] = useState([]);

    const { categoria } = useParams();

    useEffect(() => {
        usersService
            .getDesc({ idCategoria: categoria })
            .then((data) => setCategory(data));
    }, [categoria]);

    return (
        <div className="flex flex-col justify-center items-center my-5 gap-5">
            <Title title={categoria} />
            <ShowItems productData2={category} />
        </div>
    );
};
