import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/logo.svg';
import '../Header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="Logo" className="header__logo-img" />
                <h1 className="header__title">BIBLIOTECA VIRTUAL</h1>
            </div>
            <nav className="header__menu">
                <ul className="header__menu-list">
                    <li className="header__menu-item">Minhas Reservas</li>
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
            <div className="header__logout">
                <button className="header__logout-button">Sair</button>
            </div>
        </header>
    )
}
