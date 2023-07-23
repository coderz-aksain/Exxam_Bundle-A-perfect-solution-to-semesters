import React from 'react'
import {Link} from "react-router-dom"
import Exambundle from "../bundle image.avif";
const Home = ({isLoggedIn}) => {
  return (
    <div>

     <div className='sm: justify-center text-xl  border-4 h-[450px] '>
     <div className=' animate-bounce    text-cyan-300 text-5xl mt-16 font-black flex justify-center items-center text-white text-3xl h-full sm: ml-14'>
      WELCOME TO EXAM BUNDLE.. <br /> <br />LET'S ROCK THE SEMESTER TOGETHER.. 
      </div>
      
      <div className='sm:bg-red-500 w-96 -mt-5 ml-[600px] mr-96 flex justify-center items-center    hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white font-bold py-2 px-4 border-b-4 border-white hover:border-blue-500 rounded transi duration-500 bg-slate-800 hover:-translate-y-2 hover:duration-500 '>
         <Link to="/login">
          <button className='  hover:tracking-widest duration-700 '>PRESS HERE TO LOGIN</button> </Link>
      </div>
   
      </div> 
   
   
   
    </div>
   
  )
}

export default Home
