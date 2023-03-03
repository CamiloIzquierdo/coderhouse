import { useMemo } from "react";
import { Link } from "react-router-dom";

export const ImageEffect = ({
    productData = [],
    showCategory = false,
    size = "square",
}) => {
    const ImageSize = useMemo(() => {
        switch (size) {
            case "rectangle":
                return "w-[400px] h-[320px]";

            case "square":
                return "w-80 h-80";

            default:
                return "w-80 h-80";
        }
    }, [size]);
    return (
        <div className="flex gap-5 justify-center flex-wrap mt-3 ">
            {productData.map(
                (
                    { image_f, image_b, id, categoria, nombre, descripcion },
                    index
                ) => (
                    <div
                        key={id}
                        className="relative group cursor-pointer drop-shadow-md rounded-md max-w-xs "
                    >
                        <Link
                            to={`${
                                showCategory
                                    ? "/categoria/" + categoria
                                    : "/categoria/" + categoria + "/" + id
                            }`}
                        >
                            <img
                                src={image_b}
                                alt={`Imagen de ${nombre}`}
                                className={`relative top-0 left-0 group-hover:z-1 ${ImageSize} object-cover rounded-md`}
                                width={200}
                                height={200}
                            />

                            <img
                                src={image_f}
                                alt={`Imagen de ${nombre}`}
                                className={`absolute top-0 left-0 group-hover:hidden group-hover:z-0 ${ImageSize} object-cover rounded-md`}
                                width={200}
                                height={200}
                            />
                        </Link>
                        {showCategory ? (
                            <h1 className="font-bold absolute bottom-3 w-full flex justify-center bg-black/80 text-white py-2 z-20">
                                {categoria.toUpperCase()}
                            </h1>
                        ) : (
                            <>
                                <div className="bg-slate-800 drop-shadow-md h-[100px] flex flex-col text-white max-w-full">
                                    <h1 className="font-bold text-ellipsis">
                                        {nombre}
                                    </h1>
                                    <h2 className="w-[320px]  ">
                                        {descripcion}
                                    </h2>
                                </div>
                            </>
                        )}
                    </div>
                )
            )}
        </div>
    );
};
