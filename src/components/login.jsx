import React from 'react'
import "../login.css"
const Login = () => {
  return (
      <div className='body'>
    <div className="login-caixa">
        <h2>Login</h2>
        <form action="">
            <div className="user-caixa">
                <input type="text" name="" id=""/>
                <label for="">Usuario</label>
            </div>
            <div className="user-caixa">
                <input type="password" name="" id=""/>
                <label for="">Password</label>
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