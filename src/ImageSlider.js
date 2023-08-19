import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 3 + images.length) % images.length
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 3) % images.length
    );
  };

  return (
    <div className="image-slider">
      <button className="slider-button prev" onClick={prevImage}>
        &lt;
      </button>
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            className={`slider-image ${index === currentImageIndex ? 'active' : ''}`}
            src={image}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
      <button className="slider-button next" onClick={nextImage}>
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
