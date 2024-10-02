'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import slider1 from '../assets/bg-img1.png';
import slider2 from '../assets/bg-img2.png';
import slider3 from '../assets/bg-img3.png';

import classes from '../styles/image-slideshow.module.css';

const images = [
  { image: slider1, alt: 'slider1' },
  { image: slider2, alt: 'slider2' },
  { image: slider3, alt: 'slider3' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}