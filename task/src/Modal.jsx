// Modal.js
import React from "react";

const Modal = ({ isOpen, onClose, candle }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <button onClick={onClose} className="text-gray-600 text-lg">
          &times;
        </button>
        <img
          src={candle.image}
          alt={candle.name}
          className="w-full h-36 object-cover my-4"
        />
        <h3 className="font-semibold text-xl">{candle.name}</h3>
        <p>Diameter: {candle.diameter}</p>
        <p>Height: {candle.height}</p>
        <p>Weight: {candle.weight}</p>
        <p>Burn Time: {candle.burnTime}</p>
        <div className="flex mt-4 space-x-2">
          <button className="flex-1 bg-[#1A1A36] text-[#D7FC51] py-2 rounded">
            Add to Cart
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-300 text-black py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
