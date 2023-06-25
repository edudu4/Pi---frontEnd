import { useContext, useEffect } from "react";
import Section from "../components/Section";
import LivroContext from "../contexts/LivroContext";
import UserContext from "../contexts/UserContext";
import Image from "../components/Images";

export default function MinhasReservas() {
  const { userId } = useContext(UserContext);
  const { livrosReservados, listarLivrosReservados, removerLivroReservado } = useContext(LivroContext);

  useEffect(() => {
    listarLivrosReservados(userId);
  }, [userId, listarLivrosReservados]);

  function handleRemover(livroId) {
    removerLivroReservado(livroId, userId)
  }

  return (
    <Section titulo="Minhas Reservas" className="flex flex-col items-center p-4">
      {livrosReservados === null || livrosReservados.length === 0 ? (
        <p className="text-gray-700 mt-28 font-semibold">Você não possui nenhuma reserva de livros.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {livrosReservados.map((livro) => (
            <li key={livro.key} className="bg-white rounded-lg shadow flex flex-col">
              <div className="flex items-center justify-center overflow-hidden mt-6">
                <Image book={livro.caminhoImagem} className="w-full h-auto object-cover" />
              </div>
              <div className="flex flex-col justify-between flex-grow p-4">
                <div>
                  <h2 className="flex items-center justify-center text-lg font-semibold text-gray-800">{livro.nome}</h2>
                  <p className="text-gray-600 mt-2 flex-grow">{livro.descricao}</p>
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => handleRemover(livro.key)}
                    className="btn-remove transition duration-300 ease-in-out bg-red-500 hover:bg-red-600 focus:outline-none text-white font-semibold py-2 px-4 rounded-full"
                  >
                    Remover
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
