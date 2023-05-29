import React, { useState, useEffect } from 'react';
import image1 from '../Images/screenshot1-2x.png';
import image2 from '../Images/screenshot2-2x.png';
import image3 from '../Images/screenshot3-2x.png';
import image4 from '../Images/screenshot4-2x.png';
import imageBack from "../Images/capture2.png";

const LoginPic = () => {
  const images = [image1, image2, image3, image4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-[400px] relative border-none rounded-xl">
      <img className="w-full border-none " src={imageBack} alt="Background" />
      <img
        className="absolute top-7 right-5 w-[260px] h-[570px] transition-opacity duration-300"
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        style={{ opacity: 1 }}
      />
    </div>
  );
};

export default LoginPic;
