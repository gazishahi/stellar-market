import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCOMOeO733LmgMR0-sA1oDt-95ajcu7nY",
    authDomain: "next-stellarmarket.firebaseapp.com",
    projectId: "next-stellarmarket",
    storageBucket: "next-stellarmarket.appspot.com",
    messagingSenderId: "931006656140",
    appId: "1:931006656140:web:6330496a74519b1efb95a9"
    
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)