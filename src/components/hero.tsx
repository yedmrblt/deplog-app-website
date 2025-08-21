"use client";

import { motion } from "framer-motion";
import ButtonAppStore from "@/components/button-appstore";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-black">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="font-serif text-3xl font-semibold"
      >
        Deplog
        <span className="absolute ml-2 rounded-lg border px-1 py-0.5 font-mono text-sm font-semibold text-stone-500">
          v1.2
        </span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        style={{ transformOrigin: "top" }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
        className="pt-5 pb-10"
      >
        <h1 className="flex flex-col items-center text-center font-[Bricolage_Grotesque] text-5xl font-bold sm:text-8xl">
          <span>Monitor Vercel deployments</span>
          <span>from your menu bar</span>
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
      >
        <div>
          <ButtonAppStore />
        </div>
      </motion.div>
    </section>
  );
}
