import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

const Seach = () => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearchIconClick = () => {
        setIsSearchVisible((prev) => !prev); // Toggle search input visibility
      };
    
      const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
      };
  return (
    <div className="flex items-center justify-end mt-2">
      {isSearchVisible && (
        <input
          type="text"
          className="p-2 border border-gray-300 rounded-md mr-2"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      )}
      <button
        className="p-2 bg-black rounded-[5px] flex items-center justify-center"
        onClick={handleSearchIconClick}
      >
        <FaSearch className="text-white" />
      </button>
    </div>
  );
};

export default Seach;
