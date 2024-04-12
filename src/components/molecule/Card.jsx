import { forwardRef } from "react";
import Circle from "../atoms/Circle";
import Rectangle from "../atoms/Rectangle";

const Card = forwardRef(() => {
  return (
    <div className="mx-auto rectangleBorder p-[2px]  bg-[rgba(227,115,123,0.5)] backdrop-blur-2xl !rounded-[30px] ">
      <div className="flex flex-col h-[18em] w-[19rem] gap-3 p-[20px]">
        <Rectangle width={"auto"} height={100} className={""} />
        <div className="flex  justify-start align-middle gap-2">
          <Circle />
          <div className="flex flex-1 flex-col gap-3">
            <Rectangle width={"auto"} height={16} />
            <Rectangle
              width={"80px"}
              height={9}
              outerClass={"rectangleBorder2"}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Card;
