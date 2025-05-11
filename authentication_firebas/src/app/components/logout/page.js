'use client'
import Link from "next/link";
import React from "react";
import { useAuth } from "../../../../library/context";
import { useRouter } from "next/navigation";

const Logout = () => {
  const { user, handelLogout } = useAuth();
  const router = useRouter(); 

  const handleLogoutClick = async () => {
    await handelLogout();         
    router.push('/components/login');        
  };

  return (
    <div>
      {!user && (
          <button  onClick={() => router.push('/components/login')} className="bg-purple-500 p-1 px-5 rounded-lg border-none hover:bg-purple-700 transition hover:cursor-pointer ">
            Login
          </button>

      )}
      {user && (
        <button 
          onClick={handleLogoutClick} 
          className="bg-purple-500 p-1 px-5 rounded-lg border-none hover:bg-purple-700 transition hover:cursor-pointer "
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Logout;
