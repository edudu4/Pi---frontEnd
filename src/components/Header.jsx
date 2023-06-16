import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import logo from "../assets/logo.svg";
import UserContext from "../contexts/UserContext";
import livrosData from "../data/LivroData.json";

export default function Header() {
  const [search, setSearch] = useState("");
  const lista = livrosData;
  const filteredBooks = lista.filter((livro) =>
    livro.nome.toLowerCase().includes(search.toLowerCase())
  );

  const { handleLogout } = useContext(UserContext);
  const navigate = useNavigate();

  function handleClick(event) {
    handleLogout();
    navigate("/");
  }

  function handleBookClick(id) {
    navigate(`/livroescolhido/${id}`);
    setSearch("");
  }

  return (
    <header className="flex justify-between items-center px-4 py-2 bg-blue-500 text-white shadow-md">
      <div className="flex items-center">
        <Link className="flex items-center" to="/">
          <img src={logo} alt="Logo" className="w-20 h-10" />
          <h1 className="mx-5 text-3xl font-bold">BIBLIOTECA VIRTUAL</h1>
        </Link>
      </div>

      <div className="relative w-1/3 mx-auto">
        <input
          type="text"
          placeholder="Pesquisar Livros"
          className="rounded px-3 py-1 w-full bg-white text-gray-900"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <div className="dropdown absolute bg-white w-full border border-gray-200 rounded mt-2 z-10">
            {filteredBooks.map((livro) => (
              <div
                key={livro.id}
                onClick={() => handleBookClick(livro.id)}
                className="py-1 px-3 hover:bg-gray-200 cursor-pointer text-gray-900 flex items-center space-x-4"
              >
                <img
                  src={livro.caminhoImagem}
                  alt={livro.nome}
                  className="h-6 w-auto object-cover rounded"
                />
                {livro.nome}
              </div>
            ))}
          </div>
        )}
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-900">
          <FontAwesomeIcon icon="fa-magnifying-glass" />
        </button>
      </div>

      <div className="flex gap-4">
        <Link to="/minhasreservas">
          <button className="text-white bg-blue-700 hover:bg-blue-800 rounded-full py-2 px-4 text-sm transition-colors duration-200 ease-in-out">
            Minhas Reservas
          </button>
        </Link>
        <button
          className="text-white bg-red-500 hover:bg-red-600 rounded-full py-2 px-4 text-sm transition-colors duration-200 ease-in-out"
          onClick={handleClick}
        >
          Sair
        </button>
      </div>
    </header>
  );
}
