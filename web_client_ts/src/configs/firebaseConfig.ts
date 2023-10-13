import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, UserCredential, getAuth, signInWithPopup } from "firebase/auth";
// import { Auth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCOIgv5N_jcgRtfVZ9viaQ814hwpNfm9e4",
  authDomain: "starmarks.firebaseapp.com",
  projectId: "starmarks",
  storageBucket: "starmarks.appspot.com",
  messagingSenderId: "36835690394",
  appId: "1:36835690394:web:611d175879e3e5370d9c23",
  measurementId: "G-WK1ZDGCLXB"
};

const app = initializeApp(firebaseConfig);  // Initialize Firebase

export const auth = getAuth(app);

export const actionCodeSettings = {
  url: 'http://localhost:5173/applicant',    // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: 'com.example.ios'
  },
  android: {
    packageName: 'com.example.android',
    installApp: true,
    minimumVersion: '12'
  },
};

export const signInWithGoogle = async ():Promise<UserCredential> => {
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/user.birthday.read")
  const result = await signInWithPopup(auth, provider)
  return result;
}




