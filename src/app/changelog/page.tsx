"use client";

import { useState } from "react";
import { META } from "@/lib/meta";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUpIcon, ChevronDownIcon } from "lucide-react";
import ChangelogHeadline from "./headline";

interface IChangeLog {
  id: number;
  version: string;
  media?: string;
  date: string;
  changes: { title?: string; text: string }[];
}

const snapshots: IChangeLog[] = [
  {
    id: 1,
    version: "v1.0",
    media: "/changelog/v1-0.mp4",
    date: "Jan 16, 2025",
    changes: [
      {
        title: "Deplog is live!",
        text: "Monitor your Vercel deployments real-time on your Mac—no need to open the web app!",
      },
    ],
  },
  {
    id: 2,
    media: "/changelog/v1-1.mp4",
    version: "v1.1",
    date: "Jan 27, 2025",
    changes: [
      {
        title: "Team accounts support",
        text: "You can monitor your team account's deployments by logging in with your Vercel Team ID.",
      },
    ],
  },
  {
    id: 3,
    media: "/changelog/v1-2.mp4",
    version: "v1.2",
    date: "Feb 4, 2025",
    changes: [
      {
        title: "Elapsed build time",
        text: "Now, you can see the elapsed time for the deployments that are still building. No more guessing how long it's been!",
      },
      {
        title: "Improved user experience",
        text: "The popover now closes when you click outside, keeping your workflow smooth and distraction-free.",
      },
    ],
  },
];

export default function Changelog() {
  const [currentIndex, setCurrentIndex] = useState(snapshots.length - 1);

  const navigate = (newDirection: "prev" | "next") => {
    setCurrentIndex((prevIndex) => {
      if (newDirection === "prev") {
        return prevIndex > 0 ? prevIndex - 1 : prevIndex;
      } else {
        return prevIndex < snapshots.length - 1 ? prevIndex + 1 : prevIndex;
      }
    });
  };

  return (
    <>
      <section className="text-black sm:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: 3 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          exit={{ opacity: 0, y: -20, rotate: -3 }}
          style={{ transformOrigin: "top left" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mx-auto w-max"
        >
          <ChangelogHeadline />
        </motion.div>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex w-[300px] flex-col flex-wrap items-start justify-center sm:mt-16 sm:w-full sm:flex-row sm:gap-24 md:flex-nowrap"
        >
          <div className="relative flex flex-col items-center justify-center gap-16 sm:flex-row">
            <div className="relative h-[700px] w-[300px] overflow-hidden sm:min-w-[400px]">
              <div className="absolute inset-0 flex items-center justify-center perspective-[1000px]">
                <AnimatePresence>
                  {snapshots.map((snapshot, index) => {
                    const offset = index - currentIndex;
                    const isVisible = offset <= 0;
                    return (
                      <motion.div
                        key={snapshot.id}
                        className="absolute h-[500px] w-[300px] sm:w-[400px]"
                        initial={{ opacity: 0, y: 50, rotateX: -10, z: -1000 }}
                        animate={{
                          opacity: isVisible
                            ? offset === 0
                              ? 1
                              : 1 - Math.abs(offset) * 0.1
                            : 0,
                          y: Math.abs(offset) * -80,
                          rotateX: 0,
                          z: -Math.abs(offset) * 100,
                          scale: 1 - Math.abs(offset) * 0.1,
                        }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                        }}
                        style={{
                          zIndex: snapshots.length - Math.abs(offset),
                        }}
                      >
                        <div className="h-[380px] w-[300px] rounded-2xl bg-black sm:h-full sm:w-[400px]">
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: currentIndex === index ? 1 : 0,
                              y: 0,
                            }}
                            exit={{ opacity: 0 }}
                            transition={{
                              duration: 0.1,
                              ease: "easeOut",
                              delay: 0.3,
                            }}
                          >
                            <video
                              key={`${snapshot.id}-${currentIndex}`}
                              autoPlay={currentIndex === index}
                              playsInline={currentIndex === index}
                              muted
                              src={snapshot.media}
                              className="w-[300px] rounded-2xl sm:w-[400px]"
                            ></video>
                          </motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
            <div>
              <div className="absolute bottom-32 left-1/2 flex -translate-x-1/2 transform items-center gap-4 sm:relative sm:bottom-0 sm:left-0 sm:translate-x-0 sm:flex-col">
                <motion.div
                  whileTap={{ scale: currentIndex !== 0 ? 0.95 : 1 }}
                  transition={{ duration: 0.1 }}
                >
                  <button
                    className={`flex size-[3rem] items-center justify-center rounded-2xl border border-2 bg-white ${currentIndex === 0 ? "opacity-50" : "cursor-pointer"}`}
                    disabled={currentIndex === 0}
                    onClick={() => navigate("prev")}
                  >
                    <ChevronUpIcon className="h-6 w-6" />
                  </button>
                </motion.div>
                <span className="font-mono text-lg font-semibold text-black">
                  {snapshots[currentIndex].version}
                </span>
                <motion.div
                  whileTap={{
                    scale: currentIndex !== snapshots.length - 1 ? 0.95 : 1,
                  }}
                  transition={{ duration: 0.1 }}
                >
                  <button
                    className={`flex size-[3rem] items-center justify-center rounded-2xl border border-2 bg-white ${currentIndex === snapshots.length - 1 ? "opacity-50" : "cursor-pointer"}`}
                    disabled={currentIndex === snapshots.length - 1}
                    onClick={() => navigate("next")}
                  >
                    <ChevronDownIcon className="h-6 w-6" />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="-mt-[40px] w-full gap-8 sm:mt-24 sm:w-lg">
            <AnimatePresence>
              <div>
                <div className="pb-4 font-mono text-sm font-semibold">
                  {snapshots[currentIndex].date}
                </div>
                {snapshots[currentIndex].changes.map((change, index) => {
                  return (
                    <motion.div
                      key={`${currentIndex}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="pb-12"
                    >
                      {change.title && (
                        <h2 className="text-dark pb-2 font-[Bricolage_Grotesque] text-2xl font-bold sm:text-4xl">
                          {change.title}
                        </h2>
                      )}
                      <p className="max-w-lg text-justify font-mono text-xl leading-relaxed font-semibold text-black sm:text-2xl">
                        {change.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatePresence>
          </div>
        </motion.section>
        <footer className="mt-24 flex w-full flex-col items-center justify-center gap-12 sm:gap-4">
          <p className="font-serif text-4xl font-semibold text-stone-400 sm:text-3xl sm:text-black">
            Deplog
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="/"
              className="text-lg font-semibold text-[#0b0b0b] hover:text-[#000000] sm:text-base"
            >
              Home
            </a>
            <div className="hidden h-1 w-1 rounded-full bg-stone-300 sm:block"></div>
            <a
              href={META.links.appstore}
              target="_blank"
              className="text-lg font-semibold text-[#0b0b0b] hover:text-[#000000] sm:text-base"
            >
              App Store
            </a>
            <div className="hidden h-1 w-1 rounded-full bg-stone-300 sm:block"></div>
            <a
              href="mailto:y.emre.demirbulut@gmail.com"
              className="text-lg font-semibold text-[#0b0b0b] hover:text-[#000000] sm:text-base"
            >
              Contact
            </a>
            <div className="hidden h-1 w-1 rounded-full bg-stone-300 sm:block"></div>
            <a
              href={META.links.x}
              target="_blank"
              className="text-lg font-semibold text-[#0b0b0b] hover:text-[#000000] sm:text-base"
            >
              X (a.k.a Twitter)
            </a>
            <div className="hidden h-1 w-1 rounded-full bg-stone-300 sm:block"></div>
            <a
              href="/privacy"
              className="text-lg font-semibold text-[#0b0b0b] hover:text-[#000000] sm:text-base"
            >
              Privacy Policy
            </a>
          </div>
          <div>
            <p className="font-semibold text-stone-400">
              Crafted by Emre Demirbulut
            </p>
            <p className="text-center font-semibold text-stone-400">©2025</p>
          </div>
        </footer>
      </section>
    </>
  );
}
