import React from "react";

const categories = [
  "general",
  "business",
  "sports",
  "technology",
  "health",
  "science",
  "entertainment",
  "world",
  "politics",
  "fashion",
  "travel",
  "food",
];

const Navbar = ({ category, setCategory }) => {
  return (
    <div className="fixed top-0 w-full bg-white shadow-md z-10">
      <div className="flex gap-2 overflow-x-auto py-2 px-4 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm whitespace-nowrap ${
              category === cat ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
