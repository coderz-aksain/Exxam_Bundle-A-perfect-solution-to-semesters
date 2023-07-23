// import React from 'react'
// // import logo from "../assets/Logo.svg"
// // import {NavLinks} from "react-router-dom"
// import {toast} from "react-hot-toast"
// import Exambundle from "../bundle image.avif";
// import { Link } from 'react-router-dom';


// const Navbar = (props) => {
//     let isLoggedIn = props.isLoggedIn;
//     let setIsLoggedIn = props.setIsLoggedIn;

//   return (

//     <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        

//         <div className=' text-cyan-300 text-5xl'>

//             <img className='w-[70px] h-[55px] rounded-full animate-bounce ' src={Exambundle} alt="Logo" />
//         <Link to="/"> 
//             <p className='ml-[75px] -mt-14 animate-pulse duration-500'> EXAM BUNDLE  </p>
//         </Link>
//         </div>

//         <nav>
//             <ul className=' flex flex-col -ml-[05px] text-richblack-100 flex gap-x-6 '>
                
//                 <li >
//                     <Link to="/" activeClassName="active">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/about"   activeClassName="active">About</Link>
//                 </li>
//                 <li>
//                     <Link to="/contact" activeClassName="active">Contact</Link>
//                 </li>
//             </ul>
//         </nav>

//         {/* Login - SignUp - LogOut - Dashboard */}
//         <div className='flex items-center gap-x-4 '>
//             { !isLoggedIn &&
//                 <Link to="/login">
//                     <button className= ' sm:hover:-translate-y-2 duration-500 hover:bg-cyan-500 hover:text-white text-3xl text-sm ml-2 bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 hover:-translate-y-2 duration-500 hover:bg-cyan-500 hover:text-white text-3xl'>
//                         Log in
//                     </button>
//                 </Link>
//             }
//             { !isLoggedIn &&
//                 <Link to="/signup">
//                     <button  className='  sm:text-sm ml-2 bg-richblack-800 text-richblack-100 py-[8px] 
//                     px-[12px] rounded-[8px] border border-richblack-700 hover:-translate-y-2 duration-500 hover:bg-cyan-500  hover:text-white text-3xl '>
//                         Sign up
//                     </button>
//                 </Link>
//             }
//             { isLoggedIn &&
//                 <Link to="/">
//                     <button onClick={() => {
//                         setIsLoggedIn(false);
//                         toast.success("Logged Out");
//                     }}
//                     className='bg-richblack-800 text-richblack-100 py-[8px] 
//                     px-[12px] rounded-[8px] border border-richblack-700'>
//                         Log Out
//                     </button>
//                 </Link>
//             }
//             { isLoggedIn &&
//                 <Link to="/dashboard">
//                     <button
//                      className='bg-richblack-800 text-richblack-100 py-[8px] 
//                     px-[12px] rounded-[8px] border border-richblack-700'>
//                         Dashboard
//                     </button>
//                 </Link>
//             }
//         </div>
      
//     </div>
//   )
// }

// export default Navbar
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Exambundle from '../bundle image.avif';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='flex flex-col md:flex-row justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
      <div className='flex items-center'>
        <img className='w-[70px] h-[55px] rounded-full animate-bounce' src={Exambundle} alt='Logo' />
        <Link to='/'>
          <p className='ml-3 -mt-1 animate-pulse duration-500 text-cyan-300 text-2xl md:text-5xl'>
            EXAM BUNDLE
          </p>
        </Link>
      </div>

      <div className={`md:flex md:items-center ${showMenu ? 'flex' : 'hidden'}`}>
        <nav className='flex flex-col md:flex-row md:ml-6 md:space-x-6 mt-4 md:mt-0'>
          <Link to='/' activeClassName='active' onClick={handleMenuToggle}>
            Home
          </Link>
          <Link to='/about' activeClassName='active' onClick={handleMenuToggle}>
            About
          </Link>
          <Link to='/contact' activeClassName='active' onClick={handleMenuToggle}>
            Contact
          </Link>
        </nav>

        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='flex items-center gap-x-4 mt-4 md:mt-0'>
          {!isLoggedIn && (
            <>
              <Link to='/login' onClick={handleMenuToggle}>
                <button className='text-sm md:text-3xl bg-richblack-800 text-richblack-100 py-2 px-4 rounded-[8px] border border-richblack-700 hover:bg-cyan-500 hover:text-white'>
                  Log in
                </button>
              </Link>
              <Link to='/signup' onClick={handleMenuToggle}>
                <button className='text-sm md:text-3xl bg-richblack-800 text-richblack-100 py-2 px-4 rounded-[8px] border border-richblack-700 hover:bg-cyan-500 hover:text-white'>
                  Sign up
                </button>
              </Link>
            </>
          )}
          {isLoggedIn && (
            <>
              <Link to='/' onClick={() => { setIsLoggedIn(false); toast.success('Logged Out'); }}>
                <button className='text-sm md:text-3xl bg-richblack-800 text-richblack-100 py-2 px-4 rounded-[8px] border border-richblack-700'>
                  Log Out
                </button>
              </Link>
              <Link to='/dashboard' onClick={handleMenuToggle}>
                <button className='text-sm md:text-3xl bg-richblack-800 text-richblack-100 py-2 px-4 rounded-[8px] border border-richblack-700'>
                  Dashboard
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className='md:hidden'>
        <button onClick={handleMenuToggle} className='focus:outline-none'>
          {showMenu ? (
            <svg className='w-6 h-6 text-cyan-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
            </svg>
          ) : (
            <svg className='w-6 h-6 text-cyan-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
