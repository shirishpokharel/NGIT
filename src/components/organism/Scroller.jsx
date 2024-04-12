import Card from "../molecule/Card.jsx";
import { useDragScroll } from "../../libs/useDraggingScroll.jsx";
import { createRef, useCallback, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const Scroller = () => {
  const [currentActiveCard, setCurrentActiveCard] = useState(2);
  const [refs, index] = useDragScroll(currentActiveCard);

  // console.log(index, "Index");
  const newArr = [1, 2, 3, 4, 5, 6, 7];
  const itemsRef = useRef([]);
  let settings = {
    vertical: true,
    dots: false,
    // infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "120px",
    verticalSwiping: true,
    swipeToSlide: true,
    adaptiveHeight: true,
    variableHeight: false,

    beforeChange: (oldIndex, newIndex) => {
      console.log(newIndex, "New");
      // handleScrollWithAnimation(newIndex);
      // setTimeout(() => {
      //   const sample = document.querySelectorAll(".card");
      //   console.log(sample, "Sample");
      //   for (let i = 0; i < sample.length; i++) {
      //     sample[i].classList.remove("content_animation");
      //     console.log("beforeChange", oldIndex, newIndex);
      //   }
      // });
    },
    afterChange: (currentSlide) => {
      setCurrentActiveCard(currentSlide + 1);
    },
  };

  if (itemsRef.current.length !== newArr.length) {
    // add or remove refs
    itemsRef.current = Array(newArr.length)
      .fill()
      .map((_, i) => itemsRef.current[i] || createRef());
  }

  const handleScrollWithAnimation = useCallback(
    (index) => {
      var styleSheet = document.styleSheets[0];
      var rule =
        "#scroller .slider-container .card:nth-child(" +
        index +
        ")  { transform: scale(1.2,1.2);  }";
      styleSheet.insertRule(rule, 1);

      itemsRef?.[currentActiveCard]?.current?.scrollIntoView();
    },
    [currentActiveCard]
  );

  return (
    <div
      id="scroller"
      className="cursor-grab touch-none flex flex-col gap-[100px] relative"
      ref={refs}
    >
      <Slider
        {...settings}
        className="slider-container mx-auto sliderOverflow p-10"
      >
        {newArr?.map((item) => {
          return (
            <div className="!my-5" key={item}>
              <Card ref={itemsRef.current[item]} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Scroller;
