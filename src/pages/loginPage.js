import React from 'react';
import Login from "../component/Login";
import LoginPic from '../component/LoginPic';
import Footer from "../component/Footer"

const LoginPage = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <div className='grid grid-cols-1 justify-center items-center sm:grid-cols-2 gap-5'>
        <LoginPic/>
        <Login/>
      </div>
      <Footer/>
    </div>
  );
}

export default LoginPage;
