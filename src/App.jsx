import Layout from "./components/Layout";
import Principal from "./components/Principal";
import LivroEscolhido from "./pages/LivroEscolhido";
import LivroReservadoSucesso from "./pages/LivroReservadoSucesso";
import LivrosPesquisados from "./pages/LivrosPesquisados";
import MinhasReservas from './pages/MinhasReservas';
import Error404 from './pages/Error404';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/minhasreservas" element={<MinhasReservas />} />
          <Route path="/livroescolhido" element={<LivroEscolhido />} />
          <Route path="/livropesquisado" element={<LivrosPesquisados />} />
          <Route path="/livroreservadosucesso" element={<LivroReservadoSucesso />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </Router>
  );
}