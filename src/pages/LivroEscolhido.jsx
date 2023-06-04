import Section from "../components/Section";
import Header from "../components/Header";
import Footer from "../components/Header";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Image from "../components/Images";
// import imagem from "../assets/book3.jpg";

export default function LivroEscolhido() {
   const {book} = useParams()
   const [imagem, setImagem] = useState(null);

  const nome = "C:\Users\arlet\Desktop\Pi---frontEnd\src\assets\book1.jpg"
  console.log(book);
//    const path = String(":").concat(book)
 
   return (
        <Section titulo="Livro Escolhido">
            <p>Conteúdo da Página Livro Escolhido</p>
            <Image book={`/src/assets/${book}`} index={1} />
        </Section>
    )
}
