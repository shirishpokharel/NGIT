import Circle from "../atoms/Circle";
import Rectangle from "../atoms/Rectangle";

function Card() {
  return (
    <div className="mx-auto flex flex-col justify-start align-middle gap-5 p-5 w-[350px] h-[280px] bg-white/20 rounded-xl ">
      <Rectangle width={"auto"} height={100} className={""} />
      <div className="flex flex-1 justify-center align-middle gap-2">
        <Circle />
        <div className="flex flex-1 flex-col gap-3">
          <Rectangle width={"auto"} height={16} />
          <Rectangle width={"80px"} height={9} />
        </div>
      </div>
    </div>
  );
}

export default Card;
