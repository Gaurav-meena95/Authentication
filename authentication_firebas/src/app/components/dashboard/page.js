'use client'
import React from 'react'
import Navbar from '../navar/page'
import { useAuth } from '../../../../library/context'
import { useRouter } from 'next/navigation'

const Dashbord = () => {
  const {handelLogout}= useAuth();
  const router = useRouter();
  
  function handelbutn(){
    handelLogout()
    router.push('/components/login')
  }
  return (
    <div>
      <Navbar/>
       <div className="flex h-screen bg-[#c7a9e1]">
      
      <div className="w-64 bg-purple-800 text-white flex flex-col p-6">
        <div className="text-2xl font-bold mb-8">Necxis</div>
        <div className="flex flex-col gap-4">
          <a className="hover:underline cursor-pointer">Dashboard</a>
          <a className="hover:underline cursor-pointer">Profile</a>
          <a className="hover:underline cursor-pointer">Settings</a>
          <a  onClick={handelbutn} className="hover:underline text-red-300 cursor-pointer">Logout</a>
        </div>
      </div>

      <div className="flex-1 p-6 overflow-auto">
        <div className="mb-6">
          <div className="text-3xl font-semibold text-purple-800">Welcome to Your Dashboard</div>
          <div className="text-gray-600">Here's a quick overview of your activity.</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-4">
            <div className="text-xl font-bold">Total Photos</div>
            <div className="text-3xl text-purple-700 mt-2">245</div>
          </div>

          <div className="bg-white rounded-xl shadow p-4">
            <div className="text-xl font-bold">Shared Albums</div>
            <div className="text-3xl text-purple-700 mt-2">12</div>
          </div>

          <div className="bg-white rounded-xl shadow p-4">
            <div className="text-xl font-bold">Storage Used</div>
            <div className="text-3xl text-purple-700 mt-2">2.4 GB</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Dashbord