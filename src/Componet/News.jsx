import React, { useEffect, useState } from "react";

const News = () => {
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setLatestNews(data))
      .catch((err) => console.error("Failed to load news:", err));
  }, []);

  return (
    <section className="bg-[#121212] text-white px-6 py-10  md:px-16">
      <h2 className="text-4xl font-bold text-pink-500 text-center mb-10">
        📰 News
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Left side */}
        <div className="md:col-span-2 flex flex-col gap-10">
          {latestNews.map((news) => (
            <div key={news.id} className="border-b border-gray-700 pb-6">
              <img
                src={news.image}
                alt={news.title}
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold hover:text-pink-400 cursor-pointer mt-2">
                {news.title}
              </h3>
              <p className="text-sm mt-3 text-gray-500">{news.time}</p>
            </div>
          ))}
        </div>

        {/* Right side  */}
        <div className="border-l border-gray-700 pl-6">
          <h4 className="text-pink-400 font-bold text-lg border-b border-gray-600 pb-2 mb-4 w-fit">
            LATEST
          </h4>
          <div className="flex flex-col gap-5">
            {latestNews.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 border-b border-gray-800 pb-3"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-14 rounded-md object-cover"
                />
                <div>
                  <p className="font-semibold hover:text-pink-400 cursor-pointer leading-tight">
                    {item.title}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
