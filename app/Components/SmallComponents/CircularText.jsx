import "@/app/Style/CircularText.css";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

const TextCircleGenerator = ({ text = "Text", transformOrigin }) => {
  const textArray = text.split("").map((char, i) => {
    return (
      <span
        style={{
          transform: `rotate(${i * (360 / text.length)}deg)`, // Distribute each character evenly around the circle
          position: "absolute",
          left: "50%",
          transformOrigin: transformOrigin,
        }}
        key={i}
      >
        {char}
      </span>
    );
  });

  return textArray;
};

const CircularText = ({
  outerWidthAndHeight = "150px",
  innerWidthAndHeight = "100px",
  transformOrigin = "0 75px",
  animation = true,
  innerText = false,
}) => {
  return (
    <Link href={"#"}>
      <div
        className={`relative w-[${outerWidthAndHeight}] h-[${outerWidthAndHeight}] rounded-full bg-transparent flex justify-center items-center `}
      >
        <div
          className={`absolute w-[${innerWidthAndHeight}] h-[${innerWidthAndHeight}] bg-transparent rounded-full bg-cover flex justify-center items-center`}
        >
          {innerText ? (
            innerText
          ) : (
            <GoArrowUpRight className="text-6xl text-purple" />
          )}
        </div>
        <div
          className={`absolute h-full w-full rounded-full border-2  ${
            animation && "animate-rotate"
          }`}
        >
          <p className="text-lg">
            <TextCircleGenerator
              text="View All Projects . View All Projects . "
              transformOrigin={transformOrigin}
            />
          </p>
          {/* <p>S M Mehedi - Full Stack Web Developer -</p> */}
        </div>
      </div>
    </Link>
  );
};

export default CircularText;
