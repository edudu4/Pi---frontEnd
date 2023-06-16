import React from "react";
import CadastroForm from "./CadastroForm";
import { Link } from "react-router-dom";

export default function Cadastro() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Cadastro
        </h2>
        <CadastroForm />
        <div className="mt-6">
          <Link to="/" className="text-blue-500 hover:text-blue-700">
            <h3>Voltar</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
