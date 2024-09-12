import React, { useState } from "react";
import Slider from "react-slick"; 
import { FaSearch, FaTimes } from "react-icons/fa";
import LOGO from "../public/logo.png";
import CandleImage1 from "../public/1.png";
import CandleImage3 from "../public/3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./custom-slider.css"; // Import the custom CSS
// import Logo from "./Components/Logo";
// import { Carousel } from "./Components/Carousel";
// import Seach from "./Components/Seach";
// import Home from "./Components/Home";

const candles = [
  {
    id: 1,
    name: "Flute Jar Candle",
    diameter: '2.5"',
    height: '2"',
    weight: "80g",
    burnTime: "12+ Hours",
    price: "PKR 800+",
    images: [CandleImage3, CandleImage1, CandleImage3],
    description: "A beautifully crafted candle perfect for any room.",
  },
  {
    id: 2,
    name: "Common Butter Candle",
    diameter: '2.5"',
    height: '2"',
    weight: "80g",
    burnTime: "12+ Hours",
    price: "PKR 800+",
    images: [CandleImage1, CandleImage1, CandleImage3],
    description: "This is premium.",
  },
];

const items = [
  { id: 1, name: "FLUTE JAR" },
  { id: 2, name: "BOWL JAR" },
  { id: 3, name: "TEXTURED JAR" },
  { id: 4, name: "MATCHES" },
];

const Header = () => {
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [selectedCandleId, setSelectedCandleId] = useState(null);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handlePriceClick = (candleId) => {
    setSelectedCandleId(candleId);
  };

  const handleCloseForm = () => {
    setSelectedCandleId(null);
  };

  const handleSearchIconClick = () => {
    setIsSearchVisible((prev) => !prev); // Toggle search input visibility
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "#CEC1BC",
          margin: "0 4px",
        }}
      />
    ),
  };

  return (
    <div className="relative text-center">
       <div className="bg-[#090916] h-[102px] flex items-center justify-center">
        <div className="absolute top-[57px] left-1/2 transform -translate-x-1/2 z-10">
          <img
            src={LOGO}
            alt="Aura Home Stores Logo"
            className="w-[80px] h-[83px] rounded-full"
          />
        </div>
      </div> 
/       <div className="mt-[60px]">
        <h1 className="font-poppins text-[#1A1A36] font-custom-800 text-[16px]">
          AURA HOME STORES
        </h1>
      </div> 
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
       <div className="flex justify-center bg-[#F4F5F8]">
        <div className="relative w-full max-w-screen-sm p-4">
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
      
          <h2 className="text-[#090916] font-extrabold mb-2 text-left mt-4 text-[17px]">
            FLUTE JAR CANDLES
          </h2>
          <div className="mt-2">
            <div className="grid grid-cols-1 gap-4">
              {candles.map((candle) => (
                <div key={candle.id} className="border p-2 bg-[#FFFFFF] flex">
                  {selectedCandleId === candle.id ? (
                    <div className="bg-white w-full">
                      <Slider {...settings} className="carousel relative">
                        {candle.images.map((image, index) => (
                          <div key={index} className="relative">
                            <img
                              src={image}
                              alt={`Candle ${index + 1}`}
                              className="w-full md:h-80 h-60 object-cover"
                            />
                            <button
                              className="absolute top-2 right-2 text-[#A8A39F] bg-white rounded-full p-1"
                              onClick={handleCloseForm}
                            >
                              <FaTimes size={11} />
                            </button>
                          </div>
                        ))}
                      </Slider>
                      <div className="text-left ml-2">
                        <h3 className="font-extrabold mt-2">{candle.name}</h3>
                        <p className="text-[14px]">
                          Diameter: {candle.diameter} / Height: {candle.height}
                        </p>
                        <p className="text-[14px]">
                          Weight: {candle.weight} / Burn Time: {candle.burnTime}
                        </p>
                        <div className="flex mt-4">
                          <div
                            className="w-8 h-8 rounded-full border-2 border-gray-300 bg-[#1A1A36] cursor-pointer"
                            title="Color 1"
                          ></div>
                          <div
                            className="w-8 h-8 rounded-full border-2 border-gray-300 bg-[#CE1C1C] cursor-pointer ml-2"
                            title="Color 2"
                          ></div>
                          <div
                            className="w-8 h-8 rounded-full border-2 border-gray-300 bg-[#FFF9F4] cursor-pointer ml-2"
                            title="Color 3"
                          ></div>
                          <div
                            className="w-8 h-8 rounded-full border-2 border-gray-300 bg-[#FFFFFF] cursor-pointer ml-2"
                            title="Color 4"
                          ></div>
                        </div>
                        <div className="dropdown-container">
                          <label
                            htmlFor="color-select"
                            className="block text-[16px] font-medium text-[#C4C4C4] mt-3"
                          >
                            Choose Fragrance
                          </label>
                          <div className="select-wrapper">
                            <select
                              id="fragrance"
                              name="fragrance"
                              className="dropdown w-full mt-1 block py-3 px-3 border border-gray-300 bg-[#F4F5F8] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              <option className="text-[10px] truncate">
                                VANILLA AND CARDAMOM
                              </option>
                              <option className="text-[10px] truncate">
                                POMEGRANATE AND NOIR
                              </option>
                              <option className="text-[10px] truncate">
                                LAVENDER
                              </option>
                            </select>
                          </div>
                        </div>

                        <button className="bg-[#1A1A36] text-[#D7FC51] py-3 px-4 mt-4 w-full mb-3">
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex w-full">
                      <img
                        src={candle.images[0]}
                        alt={candle.name}
                        className="w-[40%] h-36 object-cover mr-3"
                      />
                      <div className="text-left ml-2">
                        <h3 className="font-semibold mt-2">{candle.name}</h3>
                        <p className="text-[14px]">
                          Diameter: {candle.diameter} Height: {candle.height}
                        </p>
                        <p className="text-[14px]">Weight: {candle.weight}</p>
                        <p className="text-[14px]">
                          Burn Time: {candle.burnTime}
                        </p>
                        <button
                          className="bg-[#1A1A36] text-[#D7FC51] py-1 px-2 mt-2"
                          onClick={() => handlePriceClick(candle.id)}
                        >
                          {candle.price}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
