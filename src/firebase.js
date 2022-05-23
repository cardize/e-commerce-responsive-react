import { initializeApp } from 'firebase/app'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD2A4shYVTPfJINiZ0Q5N47-rQSeOZaF_w',
  authDomain: 'e-commerce-test-auth.firebaseapp.com',
  projectId: 'e-commerce-test-auth',
  storageBucket: 'e-commerce-test-auth.appspot.com',
  messagingSenderId: '1084280574743',
  appId: '1:1084280574743:web:9283c07904a8272222dd52',
  measurementId: 'G-P277GKD8FT',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const googleProvider = new GoogleAuthProvider()

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    })
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email)
    alert('Password reset link sent!')
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}

const logout = () => {
  signOut(auth)
}

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
}
