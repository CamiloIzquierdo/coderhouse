import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";

export const RelationedProduct = () => {
    const { categoria } = useParams();

    return <ItemList />;
};
