import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

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

export { auth }
