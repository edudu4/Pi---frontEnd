import { urlApi } from './FirebaseConfig'

//GET Livros
export async function listaLivros() {
    let livros = []
    await fetch(urlApi + "/livros.json")
        .then((response) => response.json())
        .then((data) => {
            for (let key in data) {
                livros.push({ key, ...data[key] })
            }
        })
        .catch((error) => {
            throw Error("Erro ao listar livro ", error.message)
        })

    return livros
}

//GET LivrosReservados
export async function listaLivrosReservados(userId) {
    try {
        const response = await fetch(urlApi + `livrosReservados.json?orderBy="userId"&equalTo="${userId}"`)
        const data = await response.json()
        const livrosReservados = []

        for (let key in data) {
            livrosReservados.push({ key, ...data[key] })
        }
        return livrosReservados
    } catch (error) {
        throw new Error("Erro ao listar livros reservados ", error.message)
    }
}

//GET VerificaLivrosReservados
export async function verificarLivrosReservados(livroId, userId) {
    try {
        const response = await fetch(urlApi + `livrosReservados.json?orderBy="userId"&equalTo="${userId}"`);
        const data = await response.json();
        const livrosReservados = Object.values(data);
        const livroReservado = livrosReservados.find((livro) => livro.livroId === livroId);
        return !!livroReservado;
    } catch (error) {
        throw new Error("Erro ao verificar livro ", error.message);
    }
}


//POST LivrosReservados
export async function reservarLivro(livroId, userId) {
    const LivroReservado = {
        livroId,
        userId,
    }
    try {
        await fetch(urlApi + "livrosReservados.json", {
            method: "POST",
            body: JSON.stringify(LivroReservado),
            headers: { "Context-Type": "application/json" },
        })
    } catch (error) {
        throw new Error("Erro ao reservar livro ", error.message)
    }
}