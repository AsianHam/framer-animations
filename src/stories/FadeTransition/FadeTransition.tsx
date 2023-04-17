import React from "react";
import { motion } from "framer-motion";

const FadeTransition = () => {
  return (
    <motion.div
      className="w-[200px] h-[200px] rounded-full bg-blue-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2 } }}
      // transition={{ duration: 2 }} // alternative method of adding duration
    />
  );
};

export default FadeTransition;
