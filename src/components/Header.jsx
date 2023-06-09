import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';
//import '../Header.css';

export default function Header() {
    return (
        <header className="flex justify-between items-center bg-gray-500">
            <div className="flex font-roboto">
                <Link className="flex items-center" to="/">
                    <img src={logo} alt="Logo" className="w-20" />
                    <h1 className="mx-5 font-bold text-4xl">BIBLIOTECA VIRTUAL</h1>
                </Link>
            </div>
            <nav className="font-roboto">
                <ul className="flex gap-3">
                    <Link to="/minhasreservas">
                        <li className="header__menu-item font-bold">Minhas Reservas</li>
                    </Link>
                    <li className="header__search">
                        <input type="text" placeholder="Pesquisar Livros" className="font-bold" />
                        <button className="header__search-button">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </li>
                </ul>
            </nav>
            <Link to="/">
                <div className="mr-5">
                    <button className="border text-white rounded p-4 font-bold">Sair</button>
                </div>
            </Link>
        </header>
    )
}
