import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';
import '../Header.css';

export default function Header() {
    return (
        <header className="header">
            <Link to="/">
                <div className="header__logo">

                    <img src={logo} alt="Logo" className="header__logo-img" />
                    <h1 className="header__title" >BIBLIOTECA VIRTUAL</h1>

                </div>
            </Link>
            <nav className="header__menu">
                <ul className="header__menu-list">
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
                <div className="header__logout">
                    <button className="header__logout-button">Sair</button>
                </div>
            </Link>
        </header>
    )
}
