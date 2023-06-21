import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, } from 'firebase/auth'
import { app } from './FirebaseConfig'

const auth = getAuth(app)

export async function criarUsuario(email, senha) {
    return await createUserWithEmailAndPassword(auth, email, senha)
        .catch((error) => {
            throw Error(error.code, error.message)
        })
}

export async function login(email, senha) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const userId = userCredential.user.uid;
      return userId;
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        throw new Error('Senha Inválida');
      } else if (error.code === 'auth/user-not-found') {
        throw new Error('Usuário Não Encontrado');
      } else {
        throw new Error(error.message);
      }
    }
  }

export async function logout() {
    await signOut(auth)
}