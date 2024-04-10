import { cn } from "../../libs";

function Rectangle({ className, width, height }) {
  return (
    <div
      className="rectangleBorder"
      style={{
        width: width ? width : null,
      }}
    >
      <div
        className={cn(
          "rounded-xl shrink-0 grow-0 xl backdrop-blur-lg w-20 h-20",
          className
        )}
        style={{
          width: width ? width : null,
          height: height ? height : null,
        }}
      ></div>
    </div>
  );
}

export default Rectangle;
