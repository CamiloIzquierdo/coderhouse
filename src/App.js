import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { ItemList } from "./components/ItemList";
import { Categorias } from "./components/Categorias";
import { MainLayout } from "./layout/MainLayout";

function App() {
    return (
        <div className="App">
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ropa" element={<ItemList />} />
                    <Route path="/item/:categoria/:id" element={<Detail />} />
                    <Route path="/:categoria" element={<Categorias />} />
                </Routes>
            </MainLayout>
        </div>
    );
}

export default App;
