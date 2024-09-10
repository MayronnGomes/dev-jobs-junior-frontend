"use client";
import React, { useState } from 'react';

const Login: React.FC = () => {
  const [activeDiv, setActiveDiv] = useState('sign-in-container');

  const toggleDivs = () => {
    if (activeDiv === 'sign-up-container') {
      setActiveDiv('sign-in-container');
    } else {
      setActiveDiv('sign-up-container');
    }
  };

  return (
    <div id='container' className='flex items-stretch justify-center rounded-full'>    
        <div id='sign-in-container' className={`p-8 bg-white text-black ${activeDiv === 'sign-in-container' ? 'flex' : 'hidden'}`}>
            <form action="#" className='flex flex-col gap-5 items-center justify-center'>
                <h1 className='font-bold text-3xl'>Sign In</h1>
                <div className='social-media-container flex flex-row gap-3'>
                    <a href="#" className='w-12 h-12 bg-white flex justify-center items-center border-2 border-gray-300 rounded-full'>
                        <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href="#" className='w-12 h-12 bg-white flex justify-center items-center border-2 border-gray-300 rounded-full'>
                        <i className='fab fa-google'></i>
                    </a>
                    <a href="#" className='w-12 h-12 bg-white flex justify-center items-center border-2 border-gray-300 rounded-full'>
                        <i className='fab fa-linkedin-in'></i>
                    </a>
                </div>
                <span>or use your account</span>
                <input type="email" className='bg-gray-200 px-3 py-1' placeholder='E-mail' />
                <input type="password" className='bg-gray-200 px-3 py-1' placeholder='Password' />
                <a href="" className='text-gray-400'>Forget your password?</a>
                <button className='bg-orange-500 px-4 py-1 rounded-full text-white font-bold hover:text-orange-500 hover:border-orange-500 hover:border-2 hover:bg-white'>
                    SIGN IN
                </button>
            </form>
        </div>
        <div id='sign-up-message' className={`p-8 bg-orange-500 text-white ${activeDiv === 'sign-in-container' ? 'flex' : 'hidden'}`}>
            <form action="#" className='flex flex-col gap-5 items-center justify-center'>
                <h1 className='font-bold text-3xl'>Hello, Friend!</h1>
                <span className='text-center'>Enter your personal details and start <br /> journey with us</span>
                <button type='button' onClick={toggleDivs} className='bg-white px-4 py-1 rounded-full text-orange-500 font-bold hover:text-white hover:border-white hover:border-2 hover:bg-orange-500'>
                    SIGN UP
                </button>
            </form>
        </div>   
        <div id='sign-in-message' className={`p-8 bg-orange-500 text-white ${activeDiv === 'sign-up-container' ? 'flex' : 'hidden'}`}>
            <form action="#" className='flex flex-col gap-5 items-center justify-center'>
                <h1 className='font-bold text-3xl'>Welcome Back!</h1>
                <span className='text-center'>To keep connected with us please login <br /> with your personal infor</span>
                <button type='button' onClick={toggleDivs}  className='bg-white px-4 py-1 rounded-full text-orange-500 font-bold hover:text-white hover:border-white hover:border-2 hover:bg-orange-500'>
                    SIGN IN
                </button>
            </form>
        </div>
        <div id='sign-up-container' className={`p-8 bg-white text-black ${activeDiv === 'sign-up-container' ? 'flex' : 'hidden'}`}>
            <form action="#" className='flex flex-col gap-5 items-center justify-center'>
                <h1 className='font-bold text-3xl'>Create Account</h1>
                <div className='social-media-container flex flex-row gap-3'>
                    <a href="#" className='w-12 h-12 bg-white flex justify-center items-center border-2 border-gray-300 rounded-full'>
                        <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href="#" className='w-12 h-12 bg-white flex justify-center items-center border-2 border-gray-300 rounded-full'>
                        <i className='fab fa-google'></i>
                    </a>
                    <a href="#" className='w-12 h-12 bg-white flex justify-center items-center border-2 border-gray-300 rounded-full'>
                        <i className='fab fa-linkedin-in'></i>
                    </a>
                </div>
                <span>or use your e-mail for registration</span>
                <input type="text" className='bg-gray-200 px-3 py-1' placeholder='Name' />
                <input type="email" className='bg-gray-200 px-3 py-1' placeholder='E-mail' />
                <input type="password" className='bg-gray-200 px-3 py-1' placeholder='Password' />
                <button className='bg-orange-500 px-4 py-1 rounded-full text-white font-bold hover:text-orange-500 hover:border-orange-500 hover:border-2 hover:bg-white'>
                    SIGN UP
                </button>
            </form>
        </div>       
    </div>

  );
};

export default Login;