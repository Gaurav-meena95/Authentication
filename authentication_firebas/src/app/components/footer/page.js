import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#654781]  text-white py-8">
  <div className="max-w-7xl mx-auto px-4 md:flex md:justify-between md:items-center">
    
    <div className="mb-6 md:mb-0">
      <h2 className="text-2xl font-bold">Necxis</h2>
      <p className="text-gray-300 mt-2 text-sm">
        Empowering Innovation Through Technology
      </p>
    </div>

    <div className="space-x-6">
      <a href="#" className="text-gray-100 hover:text-white transition">About</a>
      <a href="#" className="text-gray-100 hover:text-white transition">Careers</a>
      <a href="#" className="text-gray-100 hover:text-white transition">Contact</a>
    </div>
  </div>

  <div className="mt-8 border-t border-gray-900 pt-4 text-center text-md text-gray-900">
    © 2025 Necxis. All rights reserved.
  </div>
</footer>

  )
}

export default Footer