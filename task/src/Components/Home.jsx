import React, { useState } from "react";
import Slider from "react-slick"; // Import react-slick
// import { FaSearch, FaTimes } from "react-icons/fa";
// import LOGO from "../public/logo.png";
import CandleImage1 from "../assets/1.png";
import CandleImage3 from "../assets/2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Seach from "./Seach";
// import "../Components/"; // Import the custom CSS
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
  
const Home = () => {
    const [selectedCandleId, setSelectedCandleId] = useState(null);

  const handlePriceClick = (candleId) => {
    setSelectedCandleId(candleId);
  };

  const handleCloseForm = () => {
    setSelectedCandleId(null);
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
    <div className="flex justify-center bg-[#F4F5F8]">
      <div className="relative w-full max-w-screen-sm p-4">
        <Seach/>
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
  );
};

export default Home;
