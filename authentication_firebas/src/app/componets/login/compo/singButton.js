"use client";
import React, { use, useEffect } from 'react';
import { useAuth } from '../../../../../library/context';

import { useRouter } from 'next/navigation';

const SingButton = () => {
  const router = useRouter();
  const { 
    user, 
    isloading, 
    error, 
    handelGoogleSingUp, 
    handelLogout 

  } = useAuth();
  useEffect(()=>{
    if (user){
      router.push('dashboard')
    }
  },[user,router])

  if (isloading){
    return <h1>Loading...</h1>
  }
  return (
    <div>
      {error && <p className='text-red-700'>{error}</p>}
      <button
        onClick={handelGoogleSingUp}
        disabled={isloading}
        className="w-full flex items-center justify-center border py-2 rounded-lg bg-[#9f76b24b] hover:bg-gray-100 hover:text-gray-800 disabled:opacity-50"
      >
        <img
          src="https://i.imghippo.com/files/wbei7195DUA.png"
          alt="Google"
          className="w-5 h-5 mr-2"
        />
        {isloading ? "Signing in..." : "Sign up with Google"}
      </button>
    </div>
  );
};

export default SingButton;
