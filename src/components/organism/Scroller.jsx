import Card from "../molecule/Card.jsx";
import { useDragScroll } from "../../libs/useDraggingScroll.jsx";

const Scroller = () => {
  const [refs] = useDragScroll();
  return (
    <div
      className="scroller mt-5 cursor-grab touch-none flex flex-1 flex-col gap-[50px]"
      ref={refs}
      style={{
        overflow: "hidden",
        overflowY: scroll,
        height: "98vh",
      }}
    >
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Scroller;
