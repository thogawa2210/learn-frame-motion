"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IMotionDiv {
  height?: number;
  width?: number;
  className?: string;
  children?: ReactNode;
  duration?: number;
  initalScacle?: number;
  inViewScacle?: number;
  initalOpacity?: number;
  inViewOpacity?: number;
}
export default function ScaleInView({
  initalOpacity = 0,
  inViewOpacity = 1,
  initalScacle = 0.5,
  inViewScacle = 1,
  duration = 0.5,
  className,
  children,
}: IMotionDiv) {
  return (
    <>
      <motion.div
        initial={{ opacity: initalOpacity, scale: initalScacle }}
        transition={{ duration }}
        whileInView={{ opacity: inViewOpacity, scale: inViewScacle }}
        className={className}
      >
        {children}
      </motion.div>
    </>
  );
}
