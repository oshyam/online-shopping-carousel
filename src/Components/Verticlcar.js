import React, { useState } from "react";
import "./Carousel.css";

const Verticlcar = ({ imageUrls }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  const handleNext = () => {
    setCurrentImage(
      currentImage === imageUrls.length - 1 ? 0 : currentImage + 1
    );
  };

  const handlePrev = () => {
    setCurrentImage(
      currentImage === 0 ? imageUrls.length - 1 : currentImage - 1
    );
  };

  const handleImageClick = () => {
    setIsImagePopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsImagePopupOpen(false);
  };

  return (
    <div className="carousel">
      <div className="carousel-vertical">
        <button
          className="carousel-button"
          onClick={handlePrev}
          disabled={imageUrls.length === 1}
        >
          {"🔼"}
        </button>
         <img
          className="carousel-image"
          src={imageUrls[currentImage]}
          alt={`Carousel image ${currentImage}`}
          onClick={handleImageClick}
        />
        <img
          className="carousel-image"
          src={imageUrls[currentImage]}
          alt={`Carousel image ${currentImage}`}
          onClick={handleImageClick}
        />
        <button
          className="carousel-button"
          onClick={handleNext}
          disabled={imageUrls.length === 1}
        >
          {"🔽"}
        </button>
      </div>
      {isImagePopupOpen && (
        <div className="carousel-image-popup">
          <button
            className="carousel-popup-close crssbtnClass"
            onClick={handlePopupClose}
          >
            X
          </button>
          <img
            className="carousel-popup-image"
            src={imageUrls[currentImage]}
            alt={`Carousel image ${currentImage}`}
          />
        </div>
      )}
    </div>
  );
};

export default Verticlcar;
