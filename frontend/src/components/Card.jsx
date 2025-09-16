import React, { useContext } from "react";
import { userDataContext } from "../context/UserContext";

function Card({ image }) {
  const {
    setBackendImage,
    setFrontendImage,
    selectedImage,
    setSelectedImage,
  } = useContext(userDataContext);

  return (
    <div
      className={`relative group cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 ease-in-out
        ${selectedImage === image
          ? "ring-4 ring-white shadow-2xl shadow-blue-900 scale-105"
          : "ring-2 ring-blue-500/40 hover:ring-4 hover:ring-blue-400/80 hover:scale-105"
        }`}
      onClick={() => {
        setSelectedImage(image);
        setBackendImage(null);
        setFrontendImage(null);
      }}
    >
      {/* Image */}
      <img
        src={image}
        alt="preview"
        className="h-30 w-18 lg:h-44 lg:w-44 object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
      />

      {/* Overlay (glass effect on hover) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-3">
        <p className="text-white text-sm font-semibold">Private</p>
        <p className="text-orange-400 text-xs">Mission to MARS</p>
      </div>
    </div>
  );
}

export default Card;
