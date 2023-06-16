import { createContext, useState, useEffect } from "react";
import { login, logout } from "../services/AuthService";

const UserContext = createContext({
  userId: null,
  logado: false,
  handleLogin: () => {},
  handleLogout: () => {},
});

export function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState({
    userId: null,
    logado: false,
  });

  // Efeito colateral para verificar se o usuário já está logado
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');

    if (storedUserId) {
      setCurrentUser({ userId: storedUserId, logado: true });
    }
  }, []);

  async function handleLogin(email, senha) {
    try {
      const id = await login(email, senha);
      localStorage.setItem('userId', id); // Salva o ID do usuário no localStorage
      setCurrentUser({ userId: id, logado: true });
    } catch (error) {
      throw Error(error.message);
    }
  }

  async function handleLogout() {
    await logout();
    localStorage.removeItem('userId'); // Remove o ID do usuário do localStorage
    setCurrentUser({ userId: null, logado: false });
  }

  const contexto = {
    userId: currentUser.userId,
    logado: currentUser.logado,
    handleLogin,
    handleLogout,
  };

  return (
    <UserContext.Provider value={contexto}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
