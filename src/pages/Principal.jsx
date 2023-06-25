import { Link } from 'react-router-dom';
import Image from '../components/Images';
import { useContext, useEffect } from 'react';
import LivroContext from '../contexts/LivroContext';

export default function Principal() {
  const { livros, listarLivros } = useContext(LivroContext);

  useEffect(() => {
    listarLivros();
  }, []);

  return (
    <section className="flex flex-col items-center min-h-screen pb-20 bg-gray-100 mt-14">
      <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-6">Livros Mais Vendidos</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        {livros.map((livro) => (
          <Link
            to={`/livroescolhido/${livro.key}`}
            key={livro.key}
            className="hover:scale-105 transition-all duration-300"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-56 w-full flex justify-center items-center">
                <div className="aspect-w-3 aspect-h-4 mt-4">
                  <Image book={livro.caminhoImagem} className="object-cover rounded-lg" />
                </div>
              </div>
              <hr className="my-4" />
              <div className="px-4 py-3">
                <h3 className="flex items-center justify-center text-xl font-semibold truncate">{livro.nome}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
