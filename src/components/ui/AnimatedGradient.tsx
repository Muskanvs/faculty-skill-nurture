
import React from "react";
import { motion } from "framer-motion";

interface AnimatedGradientProps {
  className?: string;
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({ className }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden -z-10 ${className}`}>
      <motion.div
        className="absolute top-[-20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px] opacity-50"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[5%] w-[400px] h-[400px] rounded-full bg-blue-400/20 blur-[100px] opacity-40"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full bg-indigo-500/10 blur-[100px] opacity-30"
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default AnimatedGradient;
