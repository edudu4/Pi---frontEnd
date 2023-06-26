import React from 'react'
import { Link } from 'react-router-dom'
import "../login.css"
import LoginForm from './LoginForm'
export default function Login() {
    return (
        <div className='body'>
            <div className="login-caixa">
                <h2>Login</h2>
                <LoginForm />
                <br />
                <Link to="/cadastro">
                    <h3>Cadastro</h3>
                </Link>
            </div>
        </div>
    )
}