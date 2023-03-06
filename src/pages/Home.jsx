import { Link } from "react-router-dom";
import { BannerHome } from "../assets";
import { ImageEffect } from "../components/ImageEffect";
import { ListaRopa } from "../components/ListaRopa";
import { MorePurchased } from "../components/MorePurchased";
import { Skeleton } from "../components/Skeleton";
import { Title } from "../components/Title";

export const Home = () => {
    return (
        <div className="flex flex-col gap-5">
            <div className="-mx-10">
                <Link to="/categoria/zapatilla/paunMREyXhuQVWoOv5jw">
                    <img src={BannerHome} alt="" />
                </Link>
            </div>
            <div className="w-full ">
                <Title title="Categorias" />
                <ImageEffect
                    productData={ListaRopa}
                    showCategory={true}
                    isLoading={false}
                />
            </div>
            <div className="w-full">
                <Title title="Productos destacados" />
                <MorePurchased />
            </div>
        </div>
    );
};
