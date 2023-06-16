import Section from "../components/Section";
import { useParams } from "react-router-dom";
import Image from "../components/Images";
import { Link } from "react-router-dom";
import livrosData from "../data/LivroData.json";

export default function LivroEscolhido(props) {
  const { id } = useParams();
  const livro = livrosData.find((livro) => livro.id === id);

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="flex items-center justify-between w-full md:w-3/4 lg:w-1/2">
        <h2 className="text-4xl font-semibold">{livro.nome}</h2>
        <Link to="/livroreservadosucesso">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200 ease-in-out">
            Reservar
          </button>
        </Link>
      </div>
      <Section className="my-10 p-10 bg-white shadow-lg rounded-lg max-w-xl mx-auto">
        <div className="flex flex-col md:flex-row gap-5">
          <Image
            book={livro.caminhoImagem}
            alt={livro.nome}
            className="w-full md:w-1/2"
          />
          <div>
            <h2 className="text-2xl font-bold mb-5">Descrição</h2>
            <p className="text-lg text-gray-600">{livro.descricao}</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
