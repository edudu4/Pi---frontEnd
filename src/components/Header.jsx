import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from 'react-router-dom';

import logo from '../assets/logo.svg';
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
//import '../Header.css';

export default function Header() {
    const { handleLogout } = useContext(UserContext)
    const navigate = useNavigate()

    function handleClick(event) {
        handleLogout()
        navigate("/")
    }

    return (
        <header className="flex justify-between items-center bg-gray-500">

            <div className="flex">
                <Link className="flex items-center" to="/">
                    <img src={logo} alt="Logo" className="w-20" />
                    <h1 className="mx-5 text-4xl" >BIBLIOTECA VIRTUAL</h1>
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
                        <FontAwesomeIcon icon="fa-magnifying-glass" style={{color: "#090707",}} />
                        </button>
                    </li>
                </ul>
            </nav>

            <div className="mr-5">
                <button className="border text-white rounded p-4" onClick={handleClick}>Sair</button>
            </div>
        </header>
    )
}
