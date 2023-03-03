import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [breadcrum, setBreadcrum] = useState([]);
    const [items, setItems] = useState();

    const values = {
        breadcrum,
        setBreadcrum,
        items,
        setItems,
    };

    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    );
};
