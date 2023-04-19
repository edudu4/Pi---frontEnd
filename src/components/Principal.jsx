import MinhasReservas from '../pages/MinhasReservas'
import LivroEscolhido from '../pages/LivroEscolhido'
import LivrosPesquisados from '../pages/LivrosPesquisados'
import LivroReservadoSucesso from '../pages/LivroReservadoSucesso'

export default function Principal() {
    return (
        <main>
            <MinhasReservas />
            <LivroEscolhido />
            <LivrosPesquisados />
            <LivroReservadoSucesso />
        </main>
    )
}