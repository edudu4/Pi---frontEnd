import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, } from 'firebase/auth'
import { app } from '../FirebaseConfig'

const auth = getAuth(app)

export async function criarUsuario(email, senha) {
    return await createUserWithEmailAndPassword(auth, email, senha)
    .catch((error) => {
        throw Error (error.code, error.message)
    })
}

export async function login(email, senha) {
    return await signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => userCredential.user.uid)
    .catch((error) => {
        if (error.code === 'auth/wrong-password') {
            throw Error('Senha Inválida')
        } else if (error.code === 'auth/user-not-found') {
            throw Error('Usuário Não Encontrado')
        }
    })
}

export async function logout() {
    await signOut(auth)
}