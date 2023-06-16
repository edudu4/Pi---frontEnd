import { useState } from "react" 
import { useForm } from "react-hook-form"
import { useNavigate} from "react-router-dom"
import { criarUsuario } from "../services/AuthService"

export default function LoginForm(props) {

    const { register, handleSubmit, formState: {errors} } = useForm()
    const navigate = useNavigate()
    const [errorCadastro, setErrorCadastro] = useState("")

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
        console.log("Formulário enviado!", data)
        const { email, senha } = data
        setErrorCadastro("")
        try {
            criarUsuario(email,senha)
            navigate("/")
        } catch (error) {
            setErrorCadastro(error.message)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {errorCadastro && <p className="erro">{errorCadastro}</p>}
            <div className="user-caixa my-2 ml-2">
                <input type="email" id="email" name="email" {...register("email", validaEmail)}/>
                {errors.email && <p className="erro">{errors.email.message}</p>}
                <label htmlFor="email" className='mx-2'>Email</label>
            </div>
            <div className="user-caixa my-2 ml-2">
                <input type="password" id="senha" name="senha" {...register("senha", validaSenha)}/>
                {errors.senha && <p className="erro">{errors.senha.message}</p>}
                <label htmlFor="senha" className='mx-2'>Senha</label>
            </div>
            <br/>
            
            <button>Cadastrar</button>
        </form>
    )
}