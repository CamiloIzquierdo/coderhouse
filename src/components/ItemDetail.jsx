import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { usersService } from "../services/Ropa";
import { ItemCount } from "./ItemCount";
import { Modal } from "../components/Modal";

export const ItemDetail = () => {
    const { cartItems, setCartItems } = useContext(CartContext);
    const [detail, setDetail] = useState({});
    const [openModal, setOpenModal] = useState(false);
    const [category, setCategory] = useState([]);

    const { id } = useParams();
    const { categoria } = useParams();
    const navigate = useNavigate();

    const { image_f, nombre, descripcion, precio } = detail;
    const itemsParecidos = category.slice(0, 4);

    useEffect(() => {
        usersService.get({ idRopa: id }).then((data) => setDetail(data));
    }, [id]);

    useEffect(() => {
        usersService
            .getDesc({ idCategoria: categoria })
            .then((data) => setCategory(data.slice(0, 4)));
    }, [categoria]);

    const addToCart = ({ product, quant }) => {
        const existingItem = cartItems.find((item) => item.id === product.id);
        if (existingItem) {
            const updatedCartItems = cartItems.map((item) =>
                item.id === existingItem.id ? { ...item, quant: quant } : item
            );
            setCartItems(updatedCartItems);
        } else {
            const updatedProduct = {
                ...product,
                quant,
                initialStock: product.stock,
            };
            const updatedCartItems = [...cartItems, updatedProduct];
            setCartItems(updatedCartItems);
        }
        detail.stock = detail.stock - quant;
        navigate("/cart");
    };

    return (
        <div className="flex flex-col w-100vh gap-3 items-center">
            <div className="flex-col flex w-full justify-center gap-10 md:flex-row bg-white p-5 rounded-xl h-[450px] max-w-[1300px]">
                <div className="flex-1 relative flex justify-center">
                    <img
                        src={image_f}
                        alt={`Imagen de ${nombre}`}
                        className="max-h-[350px] object-cover cursor-zoom-in"
                        onClick={() => setOpenModal(true)}
                    />
                    <Modal
                        visible={openModal}
                        onClose={() => setOpenModal(false)}
                    >
                        <img
                            src={image_f}
                            alt={`Imagen de ${nombre}`}
                            className="max-h-96 object-cover"
                        />
                    </Modal>
                </div>
                <div className="flex flex-col flex-1 items-start justify-between my-3">
                    <div className="text-start gap-5 flex flex-col">
                        <section>
                            <h1 className="font-semibold text-2xl">{nombre}</h1>
                            <h1 className="text-base">{descripcion}</h1>
                        </section>
                        <section>
                            <h1
                                className="font-bold text-3xl
                    "
                            >
                                $ {precio}{" "}
                            </h1>
                        </section>
                    </div>
                    <div className="min-w-[250px]">
                        <ItemCount addToCart={addToCart} item={detail} />
                    </div>
                </div>
            </div>
        </div>
    );
};
