import '../Principal.css';
import livrosData from '../data/LivroData.json'
import { Link } from 'react-router-dom';
import Image from './Images';

export default function Principal() {

    const lista = livrosData

    return (
        <>
            <section className="flex text-center flex-col h-full">
                <h2>Livros Mais Vendidos</h2>
                <div className="flex justify-center gap-5 mt-14">

                    {
                        lista.map((livro) => (
                            <Link to={`/livroescolhido/${livro.id}`} key={livro.id}>
                                <Image book={livro.caminhoImagem} />
                            </Link>
                        ))
                    }
                </div>
            </section>
        </>
    )
}