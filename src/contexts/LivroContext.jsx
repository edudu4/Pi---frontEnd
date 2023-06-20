import { createContext, useState } from "react";
import { listaLivros, reservarLivro, listaLivrosReservados, verificarLivrosReservados } from "../services/BookService";

const LivroContext = createContext({
    livros: [],
    livrosReservados: [],
    listarLivros: () => { },
    listarLivrosReservados: () => { },
    reservaLivro: () => { },
    verificarReservaLivro: () => { },
    listarLivrosPesquisados: () => { },
})

export function LivroContextProvider(props) {
    const [livros, setLivros] = useState([])
    const [livrosReservados, setLivrosReservados] = useState([])

    async function listarLivros() {
        try {
            const data = await listaLivros()
            setLivros(data)
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async function listarLivrosReservados(userId) {
        try {
            const livrosReservadosIds = await listaLivrosReservados(userId);
            const livrosReservadosComDetalhes = []
            for (const livroId of livrosReservadosIds) {
                const livro = livros.find((livro) => livroId.livroId === livro.key)
                if (livro) {
                    livrosReservadosComDetalhes.push(livro);
                }
            }
            setLivrosReservados(livrosReservadosComDetalhes);
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async function listarLivrosPesquisados(pesquisa) {
        try {
            const resultadoLivrosPesquisados = livros.filter((livroPesquisado) => livroPesquisado.nome.toLowerCase().includes(pesquisa.toLowerCase()))
            return resultadoLivrosPesquisados
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async function reservaLivro(livroId, userId) {
        try {
            await reservarLivro(livroId, userId) //chama serviço para reservar o livro
            setLivrosReservados((livrosReservados) => [...livrosReservados, livroId])
        } catch (error) {
            throw new Error(error.message)
        }
    }

    function verificarReservaLivro(livroId, userId) {
        return verificarLivrosReservados(livroId, userId)
    }

    const contexto = {
        livros,
        livrosReservados,
        listarLivros,
        reservaLivro,
        listarLivrosPesquisados,
        listarLivrosReservados,
        verificarReservaLivro,
    }

    return (
        <LivroContext.Provider value={contexto}>
            {props.children}
        </LivroContext.Provider>
    )
}

export default LivroContext