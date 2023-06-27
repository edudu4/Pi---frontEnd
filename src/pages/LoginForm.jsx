import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import UserContext from "../contexts/UserContext"

export default function LoginForm(props) {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { handleLogin } = useContext(UserContext)
    const navigate = useNavigate()
    const [errorLogin, setErrorLogin] = useState("")

    const validaEmail = {
        required: {
            value: true,
            message: 'Email é obrigatório',
        },
        pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: 'Email inválido',
        }
    }

    const validaSenha = {
        required: {
            value: true,
            message: 'Senha é obrigatória',
        },
        minLength: {
            value: 6,
            message: 'Senha deve ter no mínimo 6 caracteres'
        }
    }

    function onSubmit(data) {
        const { email, senha } = data
        setErrorLogin("")
        try {
            handleLogin(email, senha)
            navigate("/")
        } catch (error) {
            setErrorLogin(error.message)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {errorLogin && <p className="erro">{errorLogin}</p>}
            <div className="user-caixa my-2 ml-2 font-roboto">
                <label htmlFor="email" className='font-roboto font-bold text-white mb-4'>Email</label>
                <input type="email" id="email" name="email" {...register("email", validaEmail)} />
                {errors.email && <p className="erro">{errors.email.message}</p>}
            </div>
            <div className="user-caixa my-2 ml-2 font-roboto">
                <label htmlFor="senha" className='font-roboto font-bold text-white mb-4'>Senha</label>
                <input type="password" id="senha" name="senha"  {...register("senha", validaSenha)} />
                {errors.senha && <p className="erro">{errors.senha.message}</p>}
            </div>
            <br />
            <div className="flex justify-center">
                <div className="w-52 h-12">
                    <button className="w-full h-full flex items-center justify-center text-white font-bold bg-blue-700 hover:bg-blue-800 focus:outline-none rounded-lg shadow-lg" type="submit">
                        Entrar
                    </button>
                </div>
            </div>
        </form>
    )
}