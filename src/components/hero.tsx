"use client";

import { motion } from "framer-motion";
import ButtonAppStore from "@/components/button-app-store";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-black">
      <motion.p
        initial={{ opacity: 0, y: 10, rotate: 3 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        exit={{ opacity: 0, y: -10, rotate: -3 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="font-serif text-3xl font-semibold"
      >
        Deplog
        <span className="absolute ml-2 rounded-lg border px-1 py-0.5 font-mono text-sm font-semibold text-stone-500">
          v1.2
        </span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20, rotate: 3 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        exit={{ opacity: 0, y: -20, rotate: -3 }}
        style={{ transformOrigin: "top left" }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
        className="pt-5 pb-10"
      >
        <h1 className="font-bricolage relative flex flex-col items-center text-center text-5xl leading-[1.05] font-bold tracking-tight sm:text-8xl sm:leading-none">
          <span className="inline-block">
            <span>
              <span>Vercel</span>
            </span>
            <span> deployments</span>
          </span>
          <span className="flex">
            on your{" "}
            <svg
              className="ml-2 size-[3rem] fill-black sm:ml-3 sm:size-[6.25rem]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19.37 7.648c-.114.088-2.11 1.213-2.11 3.715 0 2.894 2.54 3.918 2.616 3.944-.011.062-.403 1.402-1.34 2.767-.834 1.201-1.706 2.4-3.032 2.4s-1.667-.77-3.198-.77c-1.492 0-2.022.796-3.235.796-1.214 0-2.06-1.112-3.033-2.477C4.911 16.42 4 13.93 4 11.566c0-3.791 2.465-5.802 4.891-5.802 1.29 0 2.364.847 3.173.847.77 0 1.972-.897 3.438-.897.556 0 2.553.05 3.867 1.934Zm-4.564-3.54c.607-.719 1.036-1.718 1.036-2.716 0-.138-.012-.279-.037-.392-.987.037-2.161.657-2.87 1.478-.555.632-1.074 1.63-1.074 2.643 0 .152.026.304.037.353.063.011.164.025.266.025.885 0 1.998-.593 2.642-1.39Z"></path>
            </svg>
            <span className="text-black">Mac</span>
          </span>
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
