import { ItemList } from "./ItemList";

export const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList />
        </div>
    );
};
