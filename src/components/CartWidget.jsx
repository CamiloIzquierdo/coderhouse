import { ReactComponent as Cart } from "../assets/cart-icon.svg";
let quant = 1;
export const CartWidget = () => {
    return (
        <div className="relative">
            <Cart fill="white" width={20} />
            <span className="top-[-8px] right-[-7px] absolute bg-red-500 rounded-full text-[10px] font-bold w-[15px] h-[15px] flex items-center justify-center">
                {quant}
            </span>
        </div>
    );
};
