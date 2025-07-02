import React, { useState } from "react";
import "./dress.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const Faq = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of all images with their properties
  const galleryImages = [
    {
      src: "https://media-api.xogrp.com/images/ff661f15-6eba-4009-ab85-bfa2298636b6~rt_auto-cr_0.265.1500.1765-rs_510.h?ordering=explicit",
      alt: "Wedding memory 1",
      className: "o"
    },
    {
      src:"https://i.imgur.com/tQZxv7G.png",
      alt: "Wedding memory 2"
    },
    {
      src:"https://i.imgur.com/aqE700p.png",
      alt: "Wedding memory 3",
      className: "t"
    },
    {
      src: "https://i.imgur.com/UNRF32h.jpeg",
      alt: "Wedding memory 4",
      className: "f"
    },
    {
      src:"https://i.imgur.com/FUWYnHy.png",
      alt: "Wedding memory 5",
      className: "fi"
    },
    {
      src:"https://i.imgur.com/iZZejD5.png",
      alt: "Wedding memory 6",
      className: "s"
    },
    {
      src:"https://i.imgur.com/KMJPH2D.png",
      alt: "Wedding memory 7"
    },
    {
      src:"https://i.imgur.com/oA1qHoY.png",
      alt: "Wedding memory 8",
      className: "e"
    },
    {

      src:"https://i.imgur.com/8Jm025v.png",
      alt: "Wedding memory 9",
      className:"nv"
    }
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

   return (
    <div className="faq_container">
      <div className="faq_cover">
        <h2 className="faq_title">Our Beautiful Memories</h2>
      </div>

      <div className="gallery_viewer">
        {galleryImages.map((image, index) => (
          <div 
            key={index}
            className={`gallery_suber ${image.className || ""}`}
            onClick={() => openLightbox(index)}
          >
            <div className="image-container">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="gallery-image"
              />
              <div className="image-overlay">
                <div className="view-full">Click to view full size</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={galleryImages.map(img => ({ 
          src: img.src,
          title: img.caption 
        }))}
        index={currentImageIndex}
        plugins={[Zoom]}
        animation={{ fade: 300 }}
      />
    </div>
  );
};

export default Faq;