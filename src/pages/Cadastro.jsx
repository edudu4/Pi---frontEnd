import CadastroForm from './CadastroForm'
import { Link } from 'react-router-dom'
import React from 'react'
import "../login.css"
export default function Cadastro() {
    return (
        <div className='body'>
            <div className="login-caixa bg-blue-500">
            <h2 className="font-roboto font-bold text-3xl">Cadastro</h2>
                <CadastroForm />
                <br/>
                <Link to="/">
                <div className="flex justify-center">
                        <div className="w-40">
                            <button className="w-full h-full flex items-center justify-center text-white font-bold " type="button">
                                Voltar
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}