import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { usersService } from "../services/Ropa";
import { ImageEffect } from "./ImageEffect";
import { ShowItems } from "./ShowItems";

export const MorePurchased = () => {
    const [morePurchased, setMorePurchased] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { setItems } = useContext(GlobalContext);

    const getPurchasedItems = async () => {
        const productData = await usersService.getAll();

        setTimeout(() => {
            setIsLoading(false);
        }, 290);

        setItems(productData);
        const purchaseCounts = new Map();
        for (const product of productData) {
            const count = purchaseCounts.get(product.nombre) || 0;
            purchaseCounts.set(product.nombre, count + product.purchase);
        }

        const sortedProducts = productData.sort((a, b) => {
            const countA = purchaseCounts.get(a.nombre) || 0;
            const countB = purchaseCounts.get(b.nombre) || 0;
            return countB - countA;
        });

        const topProducts = sortedProducts.slice(0, 4);

        setMorePurchased(topProducts);
    };

    useEffect(() => {
        getPurchasedItems();
    }, []);

    return <ShowItems productData2={morePurchased} isLoading={isLoading} />;
};
