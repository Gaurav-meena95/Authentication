import React from "react";
import Navbar from "../navar/page";
import SingButton from "./compo/singButton";

const Login = () => {
  return (
    <>
      <Navbar />
          <div className="min-h-screen flex items-center justify-center bg-[#a78cb3fe]">
      <div className="bg-[#c1abc2f0] p-8 rounded-lg shadow-md w-full max-w-md">
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
        <SingButton/>
      </div>
    </div>
    </>
  );
};

export default Login;
