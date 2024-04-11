import Card from "../molecule/Card.jsx";
import { useDragScroll } from "../../libs/useDraggingScroll.jsx";
import { createRef, useCallback, useEffect, useRef, useState } from "react";

const Scroller = () => {
  const [refs] = useDragScroll();
  const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const itemsRef = useRef([]);

  const [currentActiveCard, setCurrentActiveCard] = useState(2);

  if (itemsRef.current.length !== newArr.length) {
    // add or remove refs
    itemsRef.current = Array(newArr.length)
      .fill()
      .map((_, i) => itemsRef.current[i] || createRef());
  }

  const handleScrollWithAnimation = useCallback(
    (index) => {
      const i = index ? index + 1 : currentActiveCard;
      setCurrentActiveCard(i);

      var styleSheet = document.styleSheets[0];
      var rule =
        "#scroller .card:nth-child(" + i + ")  { transform: scale(1.4,1.4); }";
      styleSheet.insertRule(rule, 1);
    },
    [currentActiveCard]
  );
  useEffect(() => {
    handleScrollWithAnimation();
  }, [handleScrollWithAnimation]);

  // useEffect(() => {
  //   window.addEventListener("scroll", ()=>{
  //     handleScrollWithAnimation
  //   });

  //   return () => {
  //     window.removeEventListener("scroll", ()=>{
  //       handleScrollWithAnimation
  //     });
  //   };
  // }, [handleScrollWithAnimation]);

  return (
    <div
      id="scroller"
      className=" mt-5 cursor-grab touch-none flex flex-1 flex-col gap-[80px]"
      ref={refs}
      style={{
        overflow: "hidden",
        overflowY: scroll,
        height: "98vh",
      }}
    >
      {newArr?.map((item) => {
        return (
          <Card
            key={item}
            ref={itemsRef.current[item]}
            onClick={(e) => {
              handleScrollWithAnimation();
            }}
          />
        );
      })}
    </div>
  );
};

export default Scroller;
