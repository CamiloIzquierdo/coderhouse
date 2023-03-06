import * as Images from "../assets";

export const Modal = ({ children, visible, onClose }) => {
    if (!visible) return null;

    const handleOnBackDropClick = (e) => {
        if (e.target.id === "backdrop") onClose && onClose();
    };

    const handleClose = () => {
        setTimeout(() => {
            onClose();
        }, 2000);
    };

    return (
        <div
            id="backdrop"
            onClick={handleOnBackDropClick}
            className="bg-black bg-opacity-50 backdrop-blur-sm fixed inset-0 flex items-center justify-center z-10"
        >
            <div className="relative">
                <button
                    onClick={() => handleClose()}
                    className="absolute -top-[15px] -right-[15px] flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white p-2 shadow-md transition-transform hover:bg-gray-100 active:scale-90"
                >
                    <img
                        src={Images.CloseIcon}
                        width={14}
                        height={14}
                        alt="Close Icon"
                    />
                </button>
                {children}
            </div>
        </div>
    );
};
