import Principal from "./components/Principal"
import LivroEscolhido from "./pages/LivroEscolhido";
import LivroReservadoSucesso from "./pages/LivroReservadoSucesso";
import LivrosPesquisados from "./pages/LivrosPesquisados";
import MinhasReservas from './pages/MinhasReservas'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/minhasreservas" element={<MinhasReservas />} />
          <Route path="/livroescolhido" element={<LivroEscolhido />} />
          <Route path="/livropesquisado" element={<LivrosPesquisados />} />
          <Route path="/sucesso" element={<LivroReservadoSucesso />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}
