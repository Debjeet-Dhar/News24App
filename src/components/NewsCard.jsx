import React from "react";

const NewsCard = ({ article }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-5 snap-start">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-3/4 object-cover rounded-3xl mb-4"
          loading="lazy"
        />
      )}
      <h2 className="text-xl font-bold text-center">{article.title}</h2>
      <p className="text-gray-700 mt-2 text-center">{article.description}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Read More
      </a>
    </div>
  );
};

export default NewsCard;
