"use client";

import { motion } from "framer-motion";
import MenuBar from "@/components/menu-bar";
import DeplogApp from "@/components/deplog-app";

export default function Desktop() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
      className="relative mt-24 flex w-full flex-col items-center gap-6 pt-5 sm:pt-0"
    >
      <MenuBar></MenuBar>
      <DeplogApp></DeplogApp>
    </motion.div>
  );
}
