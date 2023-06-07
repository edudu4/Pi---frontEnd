import Section from "../components/Section";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Image from "../components/Images";
import { Link } from 'react-router-dom';
// import imagem from "../assets/book3.jpg";

export default function LivroEscolhido() {
   const {book} = useParams()
   const [imagem, setImagem] = useState(null);

  const nome = "C:\Users\arlet\Desktop\Pi---frontEnd\src\assets\book1.jpg"
  console.log(book);
//    const path = String(":").concat(book)
 
   return (
        <Section titulo="Livro Escolhido" className= "my-5">
            <p className="my-5">Conteúdo da Página Livro Escolhido</p>
            <Image book={`/src/assets/${book}`} index={1} />
            <div>
            <Link to="/livroreservadosucesso" className="bg-primary px-4 py-1 rounded">
                <button className="bg-blue-400 px-4 py-1 rounded">Reservar</button>
                </Link>
            </div>
        </Section>
    )
}
