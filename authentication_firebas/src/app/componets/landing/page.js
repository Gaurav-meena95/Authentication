import React from "react";

const Landing = () => {
  return (
    <section className="bg-[#a78cb3fe] h-screen text-white py-20 text-center">
      <div className="max-w-4xl h-full mx-auto  px-4">
        <div>
          <h2 className="text-4xl font-extrabolmb-4">Welcome to Necxis</h2>
          <p className="text-xl text-gray-300 mt-10 mb-8">
           Preserving your best moments, beautifully and effortlessly.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img className="w-150" src="https://i.imghippo.com/files/bibH8472LAA.png" alt="" />
        </div>

        <a href="#"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition" >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Landing;
