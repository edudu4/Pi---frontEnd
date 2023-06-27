import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Login.css"
import LoginForm from './LoginForm'
export default function Login() {
    return (
        <div className='body'>
            <div className="login-caixa bg-blue-500">
                <h2 className="font-roboto font-bold text-3xl">LOGIN</h2>
                <LoginForm />
                <br />
                <Link to="/cadastro">
                    <div className="flex justify-center">
                        <div className="w-40">
                            <button className="w-full h-full flex items-center justify-center text-white font-bold " type="button">
                                Cadastrar
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}