import React from 'react'
import Template from '../components/Template'
// import loginImg from "../assets/login.png"
import signupImg from "../bundle image.avif" 

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="LOG IN TO CONNECT WITH  EXAM BUNDLE !!" 
      desc1="EXPLORE THE PYQ AND SYLLABUS TO ATTAIN A MERTORIOUS TRIUMPH !!"
      desc2="PYQ and Syllabus"
      image={signupImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login
