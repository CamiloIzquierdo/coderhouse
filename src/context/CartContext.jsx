import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const eliminarProducto = (id) => {
        const nuevosProductos = cartItems.filter(
            (producto) => producto.id !== id
        );
        setCartItems(nuevosProductos);
    };

    const values = {
        cartItems,
        setCartItems,
        eliminarProducto,
    };

    return (
        <CartContext.Provider value={values}>{children}</CartContext.Provider>
    );
};
