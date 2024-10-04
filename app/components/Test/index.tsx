"use client";

import { motion } from "framer-motion";

export default function Test() {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
    //   animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, scale:1 }}
      className="w-full bg-slate-600 h-20"
    />
    </>
  );
}
