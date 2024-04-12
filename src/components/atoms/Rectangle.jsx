import { cn } from "../../libs";

function Rectangle({ className, width, height, outerClass }) {
  return (
    <div
      className={cn(
        "rounded-xl shrink-0 grow-0 xl backdrop-blur-lg w-20 h-20 bg-[rgb(235,131,123)]/20 rectangleBorder",
        className
      )}
      style={{
        width: width ? width : null,
        height: height ? height : null,
      }}
    ></div>
  );
}

export default Rectangle;
