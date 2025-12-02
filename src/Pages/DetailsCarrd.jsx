import React from "react";

const DetailsCard = ({ detal = {} }) => {
  const {
    coverPhoto = "",
    title = "Unknown",
    category = "Unknown",
    ratings = 0,
    description = "No description available.",
    developer = "Unknown",
    downloadLink = "#",
    languages = [],
    platforms = [],
    releaseDate = "Unknown",
    price = "Free",
    genres = [],
    systemRequirements = {},
    screenshots = [],
    trailerLink = "#",
    multiplayerModes = [],
    achievements = [],
    website = "#",
    ageRating = "N/A",
  } = detal;

  return (
    <div className="mx-auto p-6 bg-gray-900 text-white rounded-xl shadow-lg">
      {/* Cover and Title */}
      <div className="flex flex-col md:flex-row gap-6">
        <img src={coverPhoto} alt={title} className="w-full md:w-1/3 rounded-lg object-cover" />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-sm text-gray-400 mb-2">{category}</p>
          <p className="mb-2">Rating: {ratings} ⭐</p>
          <p className="mb-2">Developer: {developer}</p>
          <p className="mb-2">Release Date: {releaseDate}</p>
          <p className="mb-2">Price: {price}</p>
          <p className="mb-2">Age Rating: {ageRating}</p>
          <p className="mb-4">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {languages.map((lang) => (
              <span key={lang} className="bg-gray-700 px-2 py-1 rounded">
                {lang}
              </span>
            ))}
            {platforms.map((plat) => (
              <span key={plat} className="bg-gray-700 px-2 py-1 rounded">
                {plat}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
            >
              Download
            </a>
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
            >
              Website
            </a>
            {trailerLink && (
              <a
                href={trailerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
              >
                Watch Trailer
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Screenshots */}
      {screenshots.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Screenshots</h2>
          <div className="flex overflow-x-auto gap-4">
            {screenshots.map((shot, index) => (
              <img
                key={index}
                src={shot}
                alt={`${title} screenshot ${index + 1}`}
                className="w-64 rounded-lg object-cover"
              />
            ))}
     
         </div>
        </div>
      )}

      {/* Other Info */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {genres.length > 0 && (
          <div>
            <h3 className="font-semibold">Genres</h3>
            <p>{genres.join(", ")}</p>
          </div>
        )}
        {multiplayerModes.length > 0 && (
          <div>
            <h3 className="font-semibold">Multiplayer Modes</h3>
            <p>{multiplayerModes.join(", ")}</p>
          </div>
        )}
        {achievements.length > 0 && (
          <div>
            <h3 className="font-semibold">Achievements</h3>
            <p>{achievements.join(", ")}</p>
          </div>
        )}
        {systemRequirements.minimum && (
          <div>
            <h3 className="font-semibold">System Requirements</h3>
            <p>Minimum: {systemRequirements.minimum}</p>
            {systemRequirements.recommended && <p>Recommended: {systemRequirements.recommended}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsCard;
