import Section from "../components/Section";
import { useParams } from "react-router-dom";
//import { useState } from "react";
//import Image from "../components/Images";
import Image from "../components/Images";
import { Link } from 'react-router-dom';
import livrosData from '../data/LivroData.json'
// import imagem from "../assets/book3.jpg";

export default function LivroEscolhido(props) {
    const { id } = useParams()
    const livro = livrosData.find((livro) => livro.id === id)
    //const {book} = useParams()
    //const [imagem, setImagem] = useState(null);

    //const nome = "C:\Users\arlet\Desktop\Pi---frontEnd\src\assets\book1.jpg"
    //console.log(book);
    //    const path = String(":").concat(book)

    return (
        <>
            <h2>Título</h2>
            <Section titulo={livro.nome} className="my-5">
                <br />
                <h2>Descrição</h2>
                <p className="my-5">{livro.descricao}</p>
                <Image book={`/${livro.caminhoImagem}`} alt={livro.nome} />
                <div>
                    <Link to="/livroreservadosucesso" className="bg-primary px-4 py-1 rounded">
                        <button className="bg-blue-400 px-4 py-1 rounded">Reservar</button>
                    </Link>
                </div>
            </Section>
        </>
    )
}
