import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { Home } from "./pages/Home";

function App() {
    return (
        <div className="App">
            <Navbar />
            <h1 className="text-xl font-bold underline">Hello world!</h1>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
