import { ropa } from "../components/ListaCopa";

const getAll = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ropa);
        }, [500]);
    });
};

const get = ({ idRopa }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ropa.find(({ id }) => id === Number(idRopa)));
        }, [500]);
    });
};

const getDesc = ({ idCategoria }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                ropa.filter(
                    ({ categoria }) =>
                        categoria.toLowerCase().trim() ===
                        idCategoria.toLowerCase().trim()
                )
            );
        }, [500]);
    });
};

export const usersService = { getAll, get, getDesc };
