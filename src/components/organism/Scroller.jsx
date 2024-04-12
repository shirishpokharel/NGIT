import Card from "../molecule/Card.jsx";
import { useDragScroll } from "../../libs/useDraggingScroll.jsx";
import { createRef, useCallback, useEffect, useRef, useState } from "react";

const Scroller = () => {
  const [currentActiveCard, setCurrentActiveCard] = useState(2);
  const [refs, index] = useDragScroll(currentActiveCard);

  console.log(index, "Index");
  const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const itemsRef = useRef([]);

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
        "#scroller .card:nth-child(" +
        currentActiveCard +
        ")  { transform: scale(1.4,1.4); animation: 1s ease-out }";
      styleSheet.insertRule(rule, 1);

      itemsRef?.[currentActiveCard]?.current?.scrollIntoView();
    },
    [currentActiveCard]
  );

  useEffect(() => {
    handleScrollWithAnimation();
  }, [handleScrollWithAnimation]);

  return (
    <div
      id="scroller"
      className=" mt-5 cursor-grab touch-none flex flex-col gap-[100px]"
      ref={refs}
      style={{
        overflow: "hidden",
        overflowY: scroll,
        height: "98vh",
      }}
    >
      {newArr?.map((item) => {
        return <Card key={item} ref={itemsRef.current[item]} />;
      })}
    </div>
  );
};

export default Scroller;
