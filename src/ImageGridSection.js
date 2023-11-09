import React from 'react';
import './ImageGridSection.css'; // Ensure this is the correct path
import image1 from './gridimages/image1.jpg';
import image2 from './gridimages/image2.jpg';
import image3 from './gridimages/image3.jpg';
import image4 from './gridimages/image4.jpg';

const ImageGridSection = () => {
  const images = [image1, image2, image3, image4];

  return (
    <div className="image-grid-section">
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img src={image} alt={`Image ${index + 1}`} className="diamond-image" />
        </div>
      ))}
    </div>
  );
};

export default ImageGridSection;
