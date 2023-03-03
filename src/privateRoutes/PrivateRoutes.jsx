import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export const PrivateRoutes = () => {
    const { cartItems } = useContext(CartContext);

    return cartItems.length > 0 ? <Outlet /> : <Navigate to="/" replace />;
};
