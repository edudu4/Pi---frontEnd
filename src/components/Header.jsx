import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';
//import '../Header.css';

export default function Header() {
    return (
        <header className="flex justify-between items-center bg-gray-500">
            
                <div className="flex">
                <Link className="flex items-center" to="/">
                    <img src={logo} alt="Logo" className="w-20" />
                    <h1 className="mx-5" >BIBLIOTECA VIRTUAL</h1>
                    </Link>

                </div>
            <nav className="">
                <ul className="flex gap-3">
                    <Link to="/minhasreservas">
                        <li className="header__menu-item">Minhas Reservas</li>
                    </Link>
                    <li className="header__search">
                        <input type="text"
                            placeholder="Pesquisar Livros"

                        />

                        <button className="header__search-button">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>

                    </li>
                </ul>
            </nav>
            <Link to="/">
                <div className="mr-5">
                    <button className="border text-white rounded p-4">Sair</button>
                </div>
            </Link>
        </header>
    )
}
