import CadastroForm from './CadastroForm'
import { Link } from 'react-router-dom'
import React from 'react'
import "../login.css"
export default function Cadastro() {
    return (
        <div className='body'>
            <div className="login-caixa">
                <h2>Cadastro</h2>
                <CadastroForm />
                <br/>
                <Link to="/">
                    <h3>Voltar</h3>
                </Link>
            </div>
        </div>
    )
}