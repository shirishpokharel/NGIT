import Card from "../molecule/Card.jsx";
import { createRef, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Scroller = () => {
  const newArr = [1, 2, 3, 4, 5, 6, 7];
  const itemsRef = useRef([]);
  let settings = {
    axis: true,
    centerSlidePercentage: 30,
    emulateTouch: true,
    infiniteLoop: true,
    swipeable: true,
    verticalSwipe: true,

    centerMode: true,
    dynamicHeight: true,
    arrows: false,
    showArrows: false,
    showStatus: false,
    showIndicators: false,
    showThumbs: false,
  };

  if (itemsRef.current.length !== newArr.length) {
    itemsRef.current = Array(newArr.length)
      .fill()
      .map((_, i) => itemsRef.current[i] || createRef());
  }

  return (
    <div id="scroller" className="">
      <Carousel
        {...settings}
        centerSlidePercentage={10}
        className="slider-container mx-auto sliderOverflow m-h-screen"
      >
        {newArr?.map((item) => {
          return (
            <div className="!my-5" key={item}>
              <Card ref={itemsRef.current[item]} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Scroller;
