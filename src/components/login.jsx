import React from 'react'
import "../login.css"
const Login = () => {
  return (
      <div className='body'>
    <div className="login-caixa">
        <h2>Login</h2>
        <form action="">
            <div className="user-caixa my-2 ml-2">
                <input type="text" name="" id=""/>
                <label for="" className='mx-2'>Usuario</label>
            </div>
            <div className="user-caixa my-2 ml-2">
                <input type="password" name="" id=""/>
                <label for="" className='mx-2'>Senha</label>
            </div>
            <a href="/home">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Login
            </a>
        </form>
    </div>
</div>
  )
}

export default Login