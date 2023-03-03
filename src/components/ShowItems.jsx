import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { usersService } from "../services/Ropa";

export const ShowItems = ({ productData2 = [] }) => {
    const [category, setCategory] = useState([]);
    const { categoria } = useParams();

    return (
        <div className="flex gap-5 justify-center flex-wrap mt-3 ">
            {productData2.map(
                ({ nombre, precio, image_f, id, categoria, image_b }) => (
                    <div
                        key={id}
                        className="drop-shadow-md w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative group "
                    >
                        <Link to={`/categoria/${categoria}/${id}`}>
                            <img
                                className="p-8 rounded-t-lg relative top-0 left-0 group-hover:z-1 object-cover"
                                src={image_b}
                                alt="n"
                            />
                            <img
                                className="p-8 rounded-t-lg absolute top-0 left-0 group-hover:hidden group-hover:z-0 object-cover rounded-xl"
                                src={image_f}
                                alt="nombre"
                            />
                        </Link>

                        <div className="px-5 pb-5">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white h-14">
                                {nombre}
                            </h5>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                    $ {precio}
                                </span>
                                <Link to={`/categoria/:categoria/${id}`}>
                                    <h3 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Comprar
                                    </h3>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};
