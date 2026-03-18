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
    <section className="relative px-6 py-20 md:px-16 max-w-7xl mx-auto overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full -z-10"></div>
      
      <div className="flex flex-col items-center mb-16 animate-slide-up">
        <div className="inline-block glass px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-primary border border-primary/20 mb-4">
          Stay Updated
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-gradient-primary tracking-tight">
          LATEST GAMING NEWS
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-4"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Left side */}
        <div className="md:col-span-2 flex flex-col gap-8">
          {latestNews.map((news) => (
            <article key={news.id} className="glass border border-white/5 rounded-[2rem] p-6 hover:border-primary/30 transition-all duration-300 group shadow-lg">
              <div className="relative rounded-2xl overflow-hidden mb-6 h-64 md:h-80">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b13] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 glass px-3 py-1 rounded-full text-xs font-bold text-primary tracking-widest border border-primary/20">
                  {news.time}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors leading-tight mb-3">
                {news.title}
              </h3>
              <p className="text-white/60 line-clamp-2 leading-relaxed">
                Stay tuned for the latest updates, patches, and releases happening in the gaming world. Find out what's new and what's next!
              </p>
            </article>
          ))}
        </div>

        {/* Right side  */}
        <div className="glass border border-white/5 rounded-[2rem] p-6 h-fit sticky top-24 shadow-lg">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
            <h4 className="text-lg font-black text-white tracking-widest uppercase">
              Trending Topics
            </h4>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          </div>
          
          <div className="flex flex-col gap-6">
            {latestNews.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 group cursor-pointer"
              >
                <div className="relative w-24 h-20 shrink-0 rounded-xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h5 className="font-bold text-sm text-white/90 group-hover:text-primary transition-colors leading-snug line-clamp-2 mb-1">
                    {item.title}
                  </h5>
                  <p className="text-secondary/80 text-xs font-medium tracking-wide">{item.time}</p>
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
