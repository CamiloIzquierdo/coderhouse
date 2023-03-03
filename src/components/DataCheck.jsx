import { Shopping } from "../assets";

export const DataCheck = ({ children, data = [], message = "no data" }) => {
    return (
        <>
            {data.length === 0 ? (
                <div className="w-56 flex justify-center flex-col text-center">
                    <img src={Shopping} alt="Trash" />
                    <p className="w-full">{message}</p>
                </div>
            ) : (
                children
            )}
        </>
    );
};
