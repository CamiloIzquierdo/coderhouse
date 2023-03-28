import { Link } from "react-router-dom";
import { Linkedin, GitHub } from "../assets";

export const Footer = () => {
    const currentDate = new Date();
    return (
        <footer className="bg-slate-900 text-white px-4 md:pt-6 pt-2 pb-2 gap-4 h-24 flex flex-col">
            <section className="flex justify-center">
                <ul className="flex gap-4 underline">
                    <Link to="/">
                        <li>Inicio</li>
                    </Link>
                    <Link>
                        <li>Categorias</li>
                    </Link>
                    <Link>
                        <li>Contacto</li>
                    </Link>
                </ul>
            </section>
            <section className="flex justify-between">
                <div>
                    <p className="text-sm">
                        © {currentDate.getUTCFullYear()} - Todos los derechos
                        reservados
                    </p>
                </div>
                <div className="flex gap-2 items-center">
                    <p className="text-sm">Developed by Camilo Izquierdo</p>
                    <a
                        href="https://linkedin.com/in/camilo-izquierdo-99a660229/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={Linkedin} alt="Linkedin logo" width={20} />
                    </a>
                    <a
                        href="https://github.com/CamiloIzquierdo"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={GitHub} alt="Github logo" width={20} />
                    </a>
                </div>
            </section>
        </footer>
    );
};
