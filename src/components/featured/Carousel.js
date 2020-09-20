import React from "react";
import Slider from "react-slick";
import slide_one from "../../resources/images/g.jpg";
import slide_two from "../../resources/images/mulatto.jpg";
import slide_three from "../../resources/images/polo.jpg";
import slide_four from "../../resources/images/camila.jpg";
import slide_five from "../../resources/images/jack.jpg";
import slide_six from "../../resources/images/khalid.jpg";
import slide_eight from "../../resources/images/drake.jpg";
import slide_nine from "../../resources/images/madison.jpg";
import slide_ten from "../../resources/images/shawn.jpg";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 100,
  };

  return (
    <div
      className="carousel_wrapper"
      style={{
        height: `${window.innerHeight}px`,
        overflow: "hidden",
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide_one})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide_two})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>

        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide_three})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>

        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide_four})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>

        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide_five})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>

        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide_six})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
  
        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide_eight})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>

        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide_nine})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>

        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide_ten})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
