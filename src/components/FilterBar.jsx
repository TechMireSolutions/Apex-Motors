import React, { useState } from "react";

const categories = ["All", "Luxury", "SUV", "EV", "Sedan"];

const FilterBar = ({ activeCategory, setActiveCategory, totalResults }) => {
  return (
    <div className="px-6 mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      {/* Google-style Chips */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors border ${
                isActive
                  ? "text-blue-700 bg-blue-50 border-blue-200"
                  : "text-gray-600 hover:bg-gray-50 bg-white border-gray-200 hover:border-gray-300"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Results Count */}
      <div className="text-sm text-gray-500 font-medium bg-white px-4 py-1.5 rounded-full border border-gray-200 shadow-sm">
        Showing <span className="text-gray-900 font-bold">{totalResults}</span>{" "}
        vehicles
      </div>
    </div>
  );
};

export default FilterBar;
