import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export interface TypingProps {
  /**
   * The text to be animated
   */
  textContent: string;
}

const Typing = ({ textContent }: TypingProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 200);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex leading-none">
      <motion.span>{textContent.substring(0, index)}</motion.span>
      <motion.span
        className="w-[1.5px] bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.53,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
};

export default Typing;
