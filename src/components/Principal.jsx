// import "../Principal.css";
import livrosData from "../data/LivroData.json";
import { Link } from "react-router-dom";
import Image from "./Images";

export default function Principal() {
  const lista = livrosData;

  return (
    <>
      <section className="flex flex-col items-center h-full p-4 bg-gray-100 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          Livros Mais Vendidos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {lista.map((livro) => (
            <Link to={`/livroescolhido/${livro.id}`} key={livro.id}>
              <div className="shadow-lg rounded-lg overflow-hidden transform transition duration-500 ease-in-out hover:scale-105 h-72 w-48">
                <Image
                  book={livro.caminhoImagem}
                  className="h-48 w-48 object-cover"
                />

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
      
    </>
    
  );
}
