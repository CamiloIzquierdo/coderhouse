import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Categorias } from "./components/Categorias";
import { ItemList } from "./components/ItemList";
import { RouteError } from "./components/RouteError";
import { SuccesfullOrder } from "./components/SuccesfullOrder";
import { FormLayout } from "./layout/FormLayout";
import { MainLayout } from "./layout/MainLayout";
import { Cart } from "./pages/Cart";
import { Detail } from "./pages/Detail";
import { FinalForm } from "./pages/FinalForm";
import { Home } from "./pages/Home";
import { PrivateRoutes } from "./privateRoutes/PrivateRoutes";

function App() {
    return (
        <div className="bg-gray-200 h-screen">
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/*" element={<RouteError />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/ropa" element={<ItemList />} />
                    <Route
                        path="/categoria/:categoria/:id"
                        element={<Detail />}
                    />
                    <Route
                        path="/categoria/:categoria"
                        element={<Categorias />}
                    />
                </Route>
                <Route element={<PrivateRoutes />}>
                    <Route element={<FormLayout />}>
                        <Route path="/dataform" element={<FinalForm />} />
                        <Route
                            path="/orden/:id"
                            element={<SuccesfullOrder />}
                        />
                    </Route>
                    <Route element={<FormLayout />}>
                        <Route path="/cart" element={<Cart />} />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
