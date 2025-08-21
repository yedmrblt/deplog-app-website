"use client";

import { motion } from "framer-motion";
import DeplogApp from "@/components/deplog-app";

export default function Desktop() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
      className="relative mt-4 flex w-full flex-col items-center gap-6 pt-5 sm:mt-16 sm:pt-0"
    >
      <DeplogApp></DeplogApp>
    </motion.div>
  );
}
