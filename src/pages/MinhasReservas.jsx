import { useContext, useEffect } from "react";
import Section from "../components/Section";
import LivroContext from "../contexts/LivroContext";
import UserContext from "../contexts/UserContext";
import Image from "../components/Images";

export default function MinhasReservas() {
  const { userId } = useContext(UserContext);
  const { livrosReservados, listarLivrosReservados } = useContext(LivroContext);

  useEffect(() => {
    listarLivrosReservados(userId);
  }, [userId, listarLivrosReservados]);

  return (
    <Section titulo="Minhas Reservas" className="flex flex-col items-center p-4">
      {livrosReservados === null ? (
        <p className="text-gray-700">Você não possui nenhuma reserva de livros.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {livrosReservados.map((livro) => (
            <li key={livro.key} className="bg-white rounded-lg shadow">
              <div className="h-48 flex items-center justify-center overflow-hidden">
                <Image book={livro.caminhoImagem} className="h-full w-auto mx-auto object-cover" />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{livro.nome}</h2>
                <p className="text-gray-600 mt-2">{livro.descricao}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
