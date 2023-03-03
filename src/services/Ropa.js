import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    query,
    where,
} from "firebase/firestore";

const getAll = async () => {
    const db = getFirestore();
    const productsCollection = collection(db, "itemscollection");
    const snapshot = await getDocs(productsCollection);

    const products = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    return products;
};

const get = async ({ idRopa }) => {
    const db = getFirestore();
    const userDoc = doc(db, "itemscollection", idRopa);
    const snapshot = await getDoc(userDoc);

    const user = { id: snapshot.id, ...snapshot.data() };
    return user;
};

const getDesc = async ({ idCategoria }) => {
    const db = getFirestore();
    const productsCollection = collection(db, "itemscollection");
    const q = query(productsCollection, where("categoria", "==", idCategoria));
    const snapshot = await getDocs(q);

    const categoryResult = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    return categoryResult;
};

const postOrder = async ({ order }) => {
    const db = getFirestore();
    const comprarOrder = collection(db, "orderCollection");
    const orderStatus = await addDoc(comprarOrder, order);

    return orderStatus;
};

export const usersService = { getAll, get, getDesc, postOrder };
