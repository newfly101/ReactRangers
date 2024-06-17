import React from "react";
import { storyMainImages } from "./StoryMainImagesDummy";
import Slider from "react-slick";
import classes from "./StoryMainHeader.module.css";

const StoryMainHeader = () => {
  const CustomPrevArrow = ({ currentSlide, slideCount, ...props }) => (
    <button {...props} className={`${classes.arrow} ${classes.prev}`}>
      {"◀"}
    </button>
  );

  const CustomNextArrow = ({ currentSlide, slideCount, ...props }) => (
    <button {...props} className={`${classes.arrow} ${classes.next}`}>
      {"▶"}
    </button>
  );

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
    <div>
      <Slider {...settings}>
        {storyMainImages.map((image, index) => (
          <div key={index}>
            <div>
              <img
                src={image.src}
                alt={`Slide ${index}`}
                className={classes.image}
              />
              <div className={classes.CustomContainer}>
                <h1 className={classes.title}>
                  <div>{image.title1}</div>
                  <div>{image.title2}</div>
                </h1>
                <p>{image.description}</p>
                <a href={image.link}>
                  <button className={classes.buttonTop}>
                    {image.buttonLabel}
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StoryMainHeader;
