



import React from "react";

const DetailsCard = ({ detal = {} }) => {
  const {
    coverPhoto = " ",
    title = " ",
    category = "Unknown",
    ratings = 0,
    description = "No description available.",
    developer = "Unknown",
    downloadLink = "#",
  } = detal;

  return (
    <div className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-3xl shadow-xl overflow-hidden p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 transition duration-300 ease-in-out hover:shadow-2xl">
      {/* Left: Game Cover */}
      <div className="md:col-span-1 relative">
        <img
          src={coverPhoto}
          alt={`${title} cover`}
          className="w-full h-64 md:h-full object-cover rounded-2xl shadow-md hover:scale-105 transform transition duration-300"
        />
        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide">
          {category}
        </div>
      </div>

      {/* Right: Details Section */}
      <div className="md:col-span-2 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white drop-shadow-sm">{title}</h2>

          <div className="mt-2 flex items-center gap-2 text-yellow-500 font-semibold">
            <span className="text-lg">{ratings}</span>
            <span className="text-base">⭐</span>
          </div>

          <h2 className="mt-2 text-sm text-gray-600 dark:text-gray-300 italic">Developed by {developer}</h2>

          <p className="mt-4 text-base text-gray-700 dark:text-gray-200 leading-relaxed border-l-4 border-indigo-500 pl-4">
            {description}
          </p>
        </div>

        {/* Bottom Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <a href={downloadLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm shadow-md hover:bg-indigo-700 hover:scale-105 transform transition duration-300">
              Download Now
            </button>
          </a>

          <button className="px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            Add to Wishlist
          </button>
        </div>

        <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-right">
          Updated on <time dateTime={new Date().toISOString()}>{new Date().toLocaleDateString()}</time>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
