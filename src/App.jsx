import Layout from "./components/Layout";
import Principal from "./components/Principal";
import LivroEscolhido from "./pages/LivroEscolhido";
import LivroReservadoSucesso from "./pages/LivroReservadoSucesso";
import LivrosPesquisados from "./pages/LivrosPesquisados";
import MinhasReservas from "./pages/MinhasReservas";
import Error404 from "./pages/Error404";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import UserContext from "./contexts/UserContext";

export default function App() {
  const { logado } = useContext(UserContext);

  return (
    <Router>
      <Routes>
        {logado ? (
          <Route element={<Layout />}>
            <Route index element={<Principal />} />
            <Route path="/minhasreservas" element={<MinhasReservas />} />
            <Route path="/livroescolhido/:id" element={<LivroEscolhido />} />
            <Route path="/livropesquisado" element={<LivrosPesquisados />} />
            <Route
              path="/livroreservadosucesso"
              element={<LivroReservadoSucesso />}
            />
          </Route>
        ) : (
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        )}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}
