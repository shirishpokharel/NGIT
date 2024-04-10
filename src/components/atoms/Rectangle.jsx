import { cn } from "../../libs";

function Rectangle({ className, width, height, ...props }) {
  console.log(height, width, "Height");

  return (
    <div
      className={cn(
        "rounded-xl bg-white/20 shrink-0 grow-0 xl backdrop-blur-md w-20 h-20",
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
