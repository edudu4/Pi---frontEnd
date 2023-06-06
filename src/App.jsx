import Principal from "./components/Principal"
import LivroEscolhido from "./pages/LivroEscolhido";
import LivroReservadoSucesso from "./pages/LivroReservadoSucesso";
import LivrosPesquisados from "./pages/LivrosPesquisados";
import MinhasReservas from './pages/MinhasReservas'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/login";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Principal />} />
          <Route path="/minhasreservas" element={<MinhasReservas />} />
          <Route path="/livroescolhido/:book" element={<LivroEscolhido />} />
          <Route path="/sucesso" element={<LivroReservadoSucesso />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}
