import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi excepturi dicta voluptatem rerum totam neque praesentium laborum labore. Atque cum vitae architecto sapiente voluptate nisi similique molestias aliquam autem enim. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio explicabo exercitationem nisi possimus suscipit veniam autem, nam dolorum iste sit et sequi vero ipsam quaerat ea corrupti soluta. Error, praesentium.";

const ScrollColorText = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <p ref={container} className="text-xl max-w-95 md:text-3xl leading-relaxed md:max-w-310 mx-auto flex flex-wrap mt-20 md:mt-25">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

const Word = ({ children, progress, range }) => {
  const color = useTransform(progress, range, ["#1b4332", "#74d795"]);
  return (
    <motion.span style={{ color }} className="mr-2">
      {children}
    </motion.span>
  );
};

export default ScrollColorText;