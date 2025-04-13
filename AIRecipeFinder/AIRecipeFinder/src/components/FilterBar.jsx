import React from 'react';

const FilterBar = ({ filter, setFilter }) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Filter recipes by title..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full p-2 rounded-xl border border-gray-300 shadow-sm"
      />
    </div>
  );
};

export default FilterBar;