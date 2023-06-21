import { Link } from 'react-router-dom';
import Image from './Images';
import { useContext, useEffect } from 'react';
import LivroContext from '../contexts/LivroContext';

export default function Principal() {
  const { livros, listarLivros } = useContext(LivroContext);

  useEffect(() => {
    listarLivros();
  }, []);

  return (
    <section className="flex flex-col items-center min-h-screen pb-20 bg-gray-100">
      <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-6">Livros Mais Vendidos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {livros.map((livro) => (
          <Link to={`/livroescolhido/${livro.key}`} key={livro.key} className="hover:scale-105">
            <div className="shadow-lg rounded-lg overflow-hidden h-72 w-48">
              <div className="h-48 w-full flex items-center justify-center mb-2">
                <Image book={livro.caminhoImagem} className="h-full max-w-full object-cover" />
              </div>
              <div className="p-4 bg-white h-1/3 overflow-auto">
                <h3 className="text-lg font-semibold text-gray-700 hover:text-blue-600">
                  {livro.nome}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
