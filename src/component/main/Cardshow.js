import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Main.module.css';

const CustomPrevArrow = ({ currentSlide, slideCount, ...props }) => (
  <button {...props} className={`${styles.arrow} ${styles.prev}`}>
    {'◀'}
  </button>
);

const CustomNextArrow = ({ currentSlide, slideCount, ...props }) => (
  <button {...props} className={`${styles.arrow} ${styles.next}`}>
    {'▶'}
  </button>
);

const Cardshow = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    draggable: false,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <div className={styles.ImageContainer}>
            <img
              src={image.src}
              alt={`Slide ${index}`}
              className={styles.image}
            />
            <div className={styles.CustomContainer}>
              <h1 className={styles.title}>
                <div className={styles.line}>{image.title1}</div>
                <div className={styles.line}>{image.title2}</div>
              </h1>
              <p className={styles.description}>{image.description}</p>
              <a href={image.link}>
                <button className={styles.buttonTop}>
                  {image.buttonLabel}
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Cardshow;
