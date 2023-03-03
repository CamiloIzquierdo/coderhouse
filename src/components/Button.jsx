export const Button = ({
    children,
    btnColor = "primary",
    onClick = () => {},
    disabled = false,
    type = "button",
}) => {
    //prettier-ignore
    const buttonStyle = {
        primary: {
            color: "text-white capitalize bg-slate-900 rounded-md hover:bg-gray-900"
        },
        secondary: {
            color: "text-white capitalize bg-blue-600 rounded-md hover:bg-red-200"
        },
        tertiary: {
            color: "text-white capitalize bg-red-500 rounded-md hover:bg-red-600"
        }
    };

    const disabledBtn =
        "text-white capitalize bg-gray-500 rounded-md hover:bg-gray-900 hover:cursor-not-allowed";

    const btnEffect =
        "transition duration-300 transform active:scale-95 ease-in-out";

    const isDisabled = !disabled && btnEffect;

    return (
        <button
            type={type}
            className={`${isDisabled} ${
                disabled ? disabledBtn : buttonStyle[btnColor].color
            } w-full flex justify-center items-center px-5 py-2.5 font-medium focus:outline-none`}
            onClick={() => onClick()}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
