import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login
        </h2>
        <LoginForm />
        <div className="mt-6">
          <Link to="/cadastro" className="text-blue-500 hover:text-blue-700">
            <h3>Cadastro</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
