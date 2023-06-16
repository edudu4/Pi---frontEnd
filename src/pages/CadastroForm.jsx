import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { criarUsuario } from "../services/AuthService";

export default function LoginForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [errorCadastro, setErrorCadastro] = useState("");

  const validaEmail = {
    required: {
      value: true,
      message: "Email é obrigatório",
    },
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: "Email inválido",
    },
  };

  const validaSenha = {
    required: {
      value: true,
      message: "Senha é obrigatória",
    },
    minLength: {
      value: 6,
      message: "Senha deve ter no mínimo 6 caracteres",
    },
  };

  function onSubmit(data) {
    console.log("Formulário enviado!", data);
    const { email, senha } = data;
    setErrorCadastro("");
    try {
      criarUsuario(email, senha);
      navigate("/");
    } catch (error) {
      setErrorCadastro(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {errorCadastro && <p className="text-red-500">{errorCadastro}</p>}
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          name="email"
          {...register("email", validaEmail)}
          type="email"
          autoComplete="email"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="senha" className="sr-only">
          Senha
        </label>
        <input
          id="senha"
          name="senha"
          {...register("senha", validaSenha)}
          type="password"
          autoComplete="current-password"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Senha"
        />
        {errors.senha && <p className="text-red-500">{errors.senha.message}</p>}
      </div>
      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cadastrar
        </button>
      </div>
    </form>
  );
}
