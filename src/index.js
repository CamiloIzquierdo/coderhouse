import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { initializeApp } from "firebase/app";
import { GlobalProvider } from "./context/GlobalContext";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: "ecommerce-camilo.firebaseapp.com",
    projectId: "ecommerce-camilo",
    storageBucket: "ecommerce-camilo.appspot.com",
    messagingSenderId: "960178384313",
    appId: "1:960178384313:web:9235b9daad4b289b2b9a68",
    measurementId: "G-LRKWXWYXTX",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GlobalProvider>
            <CartProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </CartProvider>
        </GlobalProvider>
    </React.StrictMode>
);

reportWebVitals();
