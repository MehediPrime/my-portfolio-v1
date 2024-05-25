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
  circleText = "View All Projects . View All Projects . ",
  link = "#",
}) => {
  return (
    <Link href={link}>
      <div
        className={`relative rounded-full bg-transparent flex justify-center items-center `}
        style={{ width: outerWidthAndHeight, height: outerWidthAndHeight }}
      >
        <div
          className={`absolute  bg-transparent rounded-full bg-cover flex justify-center items-center`}
          style={{ width: innerWidthAndHeight, height: innerWidthAndHeight }}
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
              text={circleText}
              transformOrigin={transformOrigin}
            />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CircularText;
