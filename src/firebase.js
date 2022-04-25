import { initializeApp } from "firebase/app";
import { TwitterAuthProvider} from "firebase/auth";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArBT9IXKxCN8qdU-6Wpb4oAF_LnwZubQ0",
  authDomain: "spotify-clone-db30f.firebaseapp.com",
  databaseURL: "https://spotify-clone-db30f.firebaseio.com",
  projectId: "spotify-clone-db30f",
  storageBucket: "spotify-clone-db30f.appspot.com",
  messagingSenderId: "813642610409",
  appId: "1:813642610409:web:4e373ab3a0d0e619ab6278",
  measurementId: "G-404RYLWBVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new TwitterAuthProvider();
const auth = getAuth(app);
export {provider, auth}