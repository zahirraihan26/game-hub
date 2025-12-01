import React from 'react';
import errorimg from "../assets/404-illustration (1).jpg";

const Errorpage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <img
        src={errorimg}
        alt="404 Error"
        className="w-[400px] max-w-full mb-6"
      />
      <h1 className="text-4xl font-bold mb-2">Oops! Page Not Found</h1>
      <p className="text-lg mb-6 text-gray-300">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a
        href="/"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default Errorpage;