// import React from "react";

import React, { useState } from "react";
const items = [
  { id: 1, name: "FLUTE JAR" },
  { id: 2, name: "BOWL JAR" },
  { id: 3, name: "TEXTURED JAR" },
  { id: 4, name: "MATCHES" },
];

export const Carousel = () => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <>
      <div className="flex justify-center mt-2">
        <div className="relative w-full max-w-screen-sm mt-3">
          <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
            {items.map((item) => (
              <button
                key={item.id}
                className={`inline-block px-3 py-2 mx-2 relative text-[11px] font-extrabold ${
                  selectedItem.id === item.id
                    ? "font-poppins text-[#1A1A36] font-custom-700"
                    : "font-poppins text-[#1A1A36] font-custom-700"
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item.name}
                {selectedItem.id === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#090916] font-custom-800" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#BCC1CA]"></div>

    </>
  );
};
