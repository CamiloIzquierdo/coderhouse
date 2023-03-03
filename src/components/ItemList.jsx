import { useEffect, useState } from "react";
import { usersService } from "../services/Ropa";
import { ImageEffect } from "./ImageEffect";

export const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        usersService.getAll().then((data) => setItems(data));
    }, []);

    return <ImageEffect productData={items} />;
};
