import React, {useEffect} from 'react'
import twitterLogo from "../images/twitterLogo.png"
import { useNavigate } from 'react-router-dom'
import { auth, provider } from '../firebase'
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate()

  const signIn = () => { 
    signInWithPopup(auth, provider)
    .then((result) => {
      localStorage.setItem("_url", result.user.photoURL)
      navigate("/quotes")
    }).catch((error) => {
      console.log("Error >>>", error)
    });
  } 

  useEffect(()=> {
    if(localStorage.getItem("_url")) {
      return navigate("/quotes")
    }
  }, [navigate])

  return (
    <div className="W-full min-h-screen flex flex-col items-center justify-center">
      <img src={twitterLogo} alt="Sign in via Twitter" className="h-16 mb-4"/>
      <button 
      className="relative inline-flex items-center justify-start px-8 py-3 overflow-hidden font-medium transition-all bg-blue-400 rounded hover:bg-white group border"
      onClick={() => signIn()}
      >
    <span className="w-48 h-48 rounded rotate-[-40deg] bg-blue-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
    <span className="relative w-full transition-colors duration-300 ease-in-out group-hover:text-white text-center text-white">Sign in via Twitter</span>
    </button>
    </div>
  )
}

export default Login