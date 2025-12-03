import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Developers = () => {
  return (
   <div>
    <header className="">
      <Navbar></Navbar> 
      </header>
      <main>
         <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-6 text-green-400">Meet the Developers</h1>
      <p className="max-w-2xl text-center text-gray-300 mb-10">
        GameHub is powered by a passionate team of indie game creators and developers
        from around the world. Discover who’s behind your favorite games!
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-md hover:scale-105 duration-300">
          <img
            src="https://alex-carter.co.uk/wp-content/uploads/2020/10/Profile-Pic-e1673905603272.png"
            alt="Dev 1"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-center">Alex Carter</h2>
          <p className="text-gray-400 text-center">Lead Game Designer</p>
        </div>
        <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-md hover:scale-105 duration-300">
          <img
            src="https://img.freepik.com/free-vector/woman-with-braided-hair-illustration_1308-174675.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Dev 2"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-center">Maya Kim</h2>
          <p className="text-gray-400 text-center">Frontend Developer</p>
        </div>
        <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-md hover:scale-105 duration-300">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0CyOY3q6NHfFuMQVCtNQ0cKYounLNx_BxuA&s"
            alt="Dev 3"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-center">Ryan Lee</h2>
          <p className="text-gray-400 text-center">Backend Engineer</p>
        </div>
      </div>
    </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
   </div>
  );

};

export default Developers;
