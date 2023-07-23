import React from 'react'
// import signupImg from "../assets/signup.png"
import signupImg from "../bundle image.avif"
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {

  return (
    
    <Template
    
      title="Join the Exam Bundle, An Integrated  Platform for Students.Earnestly Available To Assist"
      desc1="EXPLORE THE PYQ AND SYLLABUS TO ATTAIN A MERTORIOUS TRIUMPH !!"
      desc2="An Apex and Integrated Key To Clear The Semester Examinations "
      // image={signupImg}
      image={signupImg} 
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
      
    />
  )
}

export default Signup
