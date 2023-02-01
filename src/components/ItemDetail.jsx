import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usersService } from "../services/Ropa";
import { ItemCount } from "./ItemCount";

export const ItemDetail = () => {
    const [detail, setDetail] = useState({});
    const { image, nombre, descripcion, precio } = detail;
    const { id } = useParams();

    useEffect(() => {
        usersService.get({ idRopa: id }).then((data) => setDetail(data));
    }, [id]);

    return (
        <div className="flex flex-col ">
            {detail ? (
                <div className="justify-center flex flex-col items-center">
                    <img
                        src={image}
                        alt={`imagen de ${nombre}`}
                        className="max-h-60"
                    />
                    <h1>Nombre: {nombre}</h1>
                    <h1>Detalles: {descripcion}</h1>
                    <h1>Precio: $ {precio} </h1>
                    <ItemCount />
                </div>
            ) : (
                <h1>cargando...</h1>
            )}
        </div>
    );
};
