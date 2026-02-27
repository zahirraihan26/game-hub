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
            src="https://i.ibb.co.com/fzBXnDM6/612467302-122098275855204152-450226571964542052-n.jpg"
            alt="Dev 1"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-center">Raikb Hassan </h2>
          <p className="text-gray-400 text-center">Lead Game Designer</p>
        </div>
        <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-md hover:scale-105 duration-300">
          <img
            src="https://i.ibb.co.com/wh0HWzDg/499928082-707433948343599-8738779232707403970-n.jpg"
            alt="Dev 2"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-center">Abdullahal Shafi</h2>
          <p className="text-gray-400 text-center">Frontend Developer</p>
        </div>
        <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-md hover:scale-105 duration-300">
          <img
            src="https://i.ibb.co.com/gZbgnkTq/604776255-1188980826700151-5105081073829710808-n.jpg"
            alt="Dev 3"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-center">Sadman Farazi</h2>
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
