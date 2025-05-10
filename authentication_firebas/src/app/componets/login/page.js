import React from "react";
import Navbar from "../navar/page";

const Login = () => {
  return (
    <>
      <Navbar />
          <div className="min-h-screen flex items-center justify-center bg-[#a78cb3fe]">
      <div className="bg-[#dec1dff0] p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Login to Necxis</h2>
        
        <form  className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
          >
            Login
          </button>
        </form>

        <div className="text-center my-4 text-gray-500">or</div>

        <button
          className="w-full flex items-center justify-center border py-2 rounded-lg bg-[#9f76b24b] hover:bg-gray-100 hover:text-gray-800"
        >
          <img
            src="https://i.imghippo.com/files/wbei7195DUA.png"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Sign up with Google
        </button>
      </div>
    </div>
    </>
  );
};

export default Login;
