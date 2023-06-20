import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import logo from "../assets/logo.svg";
import UserContext from "../contexts/UserContext";
import LivroContext from "../contexts/LivroContext";

export default function Header() {
  const { handleLogout } = useContext(UserContext);
  const { listarLivrosPesquisados } = useContext(LivroContext);
  const navigate = useNavigate();

  const [pesquisa, setPesquisa] = useState("");
  const [livrosFiltrados, setLivrosFiltrados] = useState([]);

  useEffect(() => {
    async function buscarLivrosFiltrados() {
      try {
        const livros = await listarLivrosPesquisados(pesquisa);
        setLivrosFiltrados(livros);
      } catch (error) {
        console.error(error);
      }
    }

    buscarLivrosFiltrados();
  }, [pesquisa, listarLivrosPesquisados]);

  function handleSair(event) {
    handleLogout();
    navigate("/");
  }

  function handleLivroPesquisa(id) {
    navigate(`/livroescolhido/${id}`);
    setPesquisa("");
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-2 bg-blue-500 text-white shadow-md">
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
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
        />
        {pesquisa && (
          <div className="dropdown absolute bg-white w-full border border-gray-200 rounded mt-2 z-10 space-y-2">
            {livrosFiltrados.map((livro) => (
              <div
                key={livro.key}
                onClick={() => handleLivroPesquisa(livro.key)}
                className="py-2 px-3 hover:bg-gray-200 cursor-pointer flex items-center space-x-2 rounded-md transition-colors duration-200"
              >
                <img
                  src={`/${livro.caminhoImagem}`}
                  alt={livro.nome}
                  className="h-8 w-8 object-contain rounded-md"
                />
                <span className="text-gray-900 font-medium">{livro.nome}</span>
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
          onClick={handleSair}
        >
          Sair
        </button>
      </div>
    </header>
  );
}
