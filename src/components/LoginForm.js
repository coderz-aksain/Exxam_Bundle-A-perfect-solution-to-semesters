import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useFormik } from 'formik';


const LoginForm = ({setIsLoggedIn}) => {
    
      

    const navigate = useNavigate();

    const [formData, setFormData] = useState( {
        email:"", password:""
    })

    const[showPassword, setShowPassword] = useState(false);

    // function changeHandler(event) {

    //     setFormData( (prevData) =>(
    //         {
    //             ...prevData,
    //             [event.target.name]:event.target.value
    //         }
    //     ) )

    // }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        console.log("Printing the formData ");
        console.log(formData)
        navigate("/Card");
    }
        // constant formik

   const formik = useFormik({
    initialValues:{
        email: '',
        password: '',

    },
    onSubmit: values =>{
        console.log('Form data', values)
    },
    validate: values =>{

        // values.email values.password
        // errors.email errors.password
        // errors.name ='This fiels is required'
        let errors = {}
        // below line code shows that email is empty
        if(!values.email){
            errors.name ='Required'
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email ='Please enter your gkv email id '
        }
        if(values.password){
            errors.password ='Required'
        }
        return errors
    }
   })
   
   console.  log('Form values', formik.errors)

  return (
    <div>

   
    <form onSubmit={formik.handleSubmit} 
    
    className="flex flex-col w-full gap-y-4 mt-6">

    <div className="form-control">

          
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address<sup className='text-pink-200'>*</sup>
            </p>
            <input 
                required
                type="email"
                value = {formik.values.email}
                onChange={formik.handleChange}
                placeholder="Enter email address"
                name="email"
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
            {formik.errors.email ? <div className='text-red-600'>{formik.errors.email}</div>: null } 
        </label>
    </div>


    
    <div className="form-control">

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Password<sup className='text-pink-200'>*</sup>
            </p>
            <input 
                required
                type= {showPassword ? ("text") : ("password")}
                value = {formik.values.password}
                onChange={formik.handleChange}
                placeholder="Enter Password"
                name="password"
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            {formik.errors.password ? <div className='text-red-600'>{formik.errors.password}</div>: null }

            <span 
            className='absolute right-3 top-[38px] cursor-pointer'
            onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? 

(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>

            <Link to="#">
                <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                    Forgot Password
                </p>
            </Link>
        </label>
    </div>
                
        

        
        

    </form>
        <button  onClick={submitHandler} className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Sign In
        </button>
        </div>
  )
}

export default LoginForm
