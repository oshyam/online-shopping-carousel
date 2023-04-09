// Carousel.js
import React, { useState, useEffect } from "react";
import "./Carousel.css";

const NUM_IMAGES_SHOWN = 3; // Change this to adjust the number of images shown at once

const Carousel = ({ imageUrls }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(NUM_IMAGES_SHOWN - 1);
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(true);

  useEffect(() => {
    // Update the start and end indices when the current image changes
    const newStartIndex = Math.max(currentImage - Math.floor(NUM_IMAGES_SHOWN / 2), 0);
    const newEndIndex = Math.min(newStartIndex + NUM_IMAGES_SHOWN - 1, imageUrls.length - 1);
    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);

    // Show/hide the up/down arrows based on the current position
    setShowUpArrow(newStartIndex > 0);
    setShowDownArrow(newEndIndex < imageUrls.length - 1);
  }, [currentImage]);

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

  const handleUp = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
      setEndIndex(endIndex - 1);
    }
  };

  const handleDown = () => {
    if (endIndex < imageUrls.length - 1) {
      setStartIndex(startIndex + 1);
      setEndIndex(endIndex + 1);
    }
  };

  return (
    <div className="carousel">
      <div className="carousel-images">
        {imageUrls.slice(startIndex, endIndex + 1).map((imageUrl, index) => (
          <img
            key={startIndex + index}
            className="carousel-image"
            src={imageUrl}
            alt={`Carousel image ${startIndex + index}`}
          />
        ))}
      </div>
      <div className="carousel-buttons">
        <button
          className="carousel-button"
          onClick={handleUp}
          disabled={!showUpArrow}
        >
          &uarr;
        </button>
        <button
          className="carousel-button"
          onClick={handlePrev}
          disabled={imageUrls.length === 1}
        >
          Prev
        </button>
        <button
          className="carousel-button"
          onClick={handleNext}
          disabled={imageUrls.length === 1}
        >
          Next
        </button>
        <button
          className="carousel-button"
          onClick={handleDown}
          disabled={!showDownArrow}
        >
          &darr;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
