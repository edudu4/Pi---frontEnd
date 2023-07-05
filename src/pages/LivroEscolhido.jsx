import Section from "../components/Section";
import { useParams } from "react-router-dom";
import Image from "../components/Images";
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import LivroContext from "../contexts/LivroContext";
import UserContext from "../contexts/UserContext";

export default function LivroEscolhido(props) {
    const { userId } = useContext(UserContext);
    const { id } = useParams();
    const { livros, reservaLivro, verificarReservaLivro } = useContext(LivroContext);
    const navigate = useNavigate();

    const livro = livros.find((livro) => livro.key === id);
    const [usuarioJaReservou, setUsuarioJaReservou] = useState(false);

    useEffect(() => {
        if (!livro || userId === null) {
            return navigate('/Error');
        }
        const fetchReservaLivro = async () => {
            const usuarioJaReservou = await verificarReservaLivro(livro.key, userId);
            setUsuarioJaReservou(usuarioJaReservou);
        }
        fetchReservaLivro()
    }, [livro, userId, verificarReservaLivro()]);

    function handleReservar(livroId) {
        const dataHora = new Date()
        const dataReserva = dataHora.toLocaleDateString()

        const dataEntrega = new Date(dataHora)
        dataEntrega.setMonth(dataEntrega.getMonth() + 1)

        reservaLivro(livroId, userId, dataReserva, dataEntrega.toLocaleDateString())
        navigate('/livroreservadosucesso');
    }

    return (
        <div className="flex justify-center items-center mt-36 mb-32">
            <div className="max-w-md bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-roboto-bold text-center mb-4">{livro.nome}</h2>
                <hr className="border-gray-800 my-2" />
                <Section titulo="" className="text-justify px-6 font-roboto-bold">
                    <div className="mt-6">
                        <p className="mb-4">{livro.descricao}</p>
                    </div>
                </Section>
                <hr className="border-gray-300 my-4" />
                <div className="flex justify-center">
                    <Image book={`/${livro.caminhoImagem}`} alt={livro.nome} />
                </div>
                <hr className="my-4" />
                <div className="flex justify-center mt-4">
                    <button
                        onClick={() => handleReservar(livro.key)}
                        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors font-bold"
                        disabled={usuarioJaReservou}
                    >
                        {usuarioJaReservou ? "Já Reservado" : "Reservar"}
                    </button>
                </div>
            </div>
        </div>
    )
}