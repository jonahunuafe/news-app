'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import designo from "../../assets/designo_img.png";
import payapi from "../../assets/payapi_img.png";
import placepicker from "../../assets/placepicker.png";
import projects from "../../assets/projects.png";
import tvshow from "../../assets/tvshow_img.png";
import classes from "./image-slideshow.module.css";


const images = [
    {pix: designo, alt: "A seven page website"},
    {pix: payapi, alt: "A four page website"},
    {pix: placepicker, alt: "A place picker app"},
    {pix: projects, alt: "A project register"},
    {pix: tvshow, alt: "Your favorite television show"}
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
            src={image.pix}
            className={index === currentImageIndex ? classes.active : ''}
            alt={image.alt}
          />
        ))}
      </div>
    );
  }