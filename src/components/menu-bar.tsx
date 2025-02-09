"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { TriangleIcon } from "lucide-react";

export default function MenuBar() {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
    >
      <div className="start-2/4 top-8 z-10 flex h-12 items-center justify-center rounded-[1.25rem] bg-neutral-800 pr-5 pl-3 text-orange-50 backdrop-blur-3xl md:ml-[220px]">
        <div className="pointer-events-none mr-3 cursor-pointer rounded-l-[0.625rem] rounded-r px-2 py-1 transition sm:pointer-events-auto">
          <TriangleIcon className="h-5 w-5 fill-current"></TriangleIcon>
        </div>
        <div className="mr-5">
          <svg
            className="h-5 w-5 fill-current text-orange-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28 28"
            aria-hidden="true"
          >
            <path d="M14.4901 23.4883C14.7479 23.4883 14.9705 23.3711 15.4276 22.9258L18.2869 20.1836C18.4627 20.0078 18.5096 19.75 18.3455 19.5391C17.5838 18.5547 16.1424 17.6992 14.4901 17.6992C12.7908 17.6992 11.3494 18.5898 10.5877 19.6094C10.4705 19.7969 10.5174 20.0078 10.7049 20.1836L13.5526 22.9258C14.0096 23.3594 14.2323 23.4883 14.4901 23.4883ZM7.6346 17.1133C7.89241 17.3594 8.20882 17.3242 8.44319 17.0664C9.84944 15.5078 12.1463 14.3711 14.4901 14.3828C16.8573 14.3711 19.1541 15.543 20.5838 17.1016C20.7948 17.3477 21.0877 17.3359 21.3455 17.1016L23.1619 15.2969C23.3494 15.1094 23.3729 14.8516 23.1971 14.6406C21.4276 12.4727 18.1463 10.8438 14.4901 10.8438C10.8338 10.8438 7.55257 12.4727 5.78303 14.6406C5.60725 14.8516 5.61897 15.0859 5.81819 15.2969L7.6346 17.1133ZM2.77132 12.2148C3.00569 12.4375 3.33382 12.4375 3.55647 12.2031C6.43928 9.14453 10.2362 7.52734 14.4901 7.52734C18.7674 7.52734 22.5877 9.15625 25.4471 12.2148C25.658 12.4258 25.9744 12.4141 26.2088 12.1914L27.826 10.5742C28.0369 10.3633 28.0252 10.1055 27.8612 9.90625C25.1073 6.50781 19.9276 4.01172 14.4901 4.01172C9.06428 4.01172 3.86116 6.50781 1.11897 9.90625C0.954909 10.1055 0.954909 10.3633 1.15413 10.5742L2.77132 12.2148Z"></path>
          </svg>
        </div>
        <div className="mr-5">
          <svg
            className="h-5 w-5 fill-current text-orange-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28 28"
            aria-hidden="true"
          >
            <path d="M7.496 13.688h12.961c3.023 0 5.484-2.157 5.484-5.344 0-3.188-2.46-5.344-5.484-5.344H7.497C4.472 3 2 5.156 2 8.344c0 3.187 2.473 5.344 5.496 5.344Zm0-1.77c-1.969 0-3.726-1.441-3.726-3.574S5.527 4.77 7.496 4.77h12.961c1.957 0 3.715 1.44 3.715 3.574 0 2.133-1.758 3.574-3.715 3.574H7.497Zm0-.797c1.547.012 2.777-1.254 2.79-2.8.01-1.536-1.243-2.766-2.79-2.766A2.768 2.768 0 0 0 4.72 8.332a2.778 2.778 0 0 0 2.777 2.79Zm-.48 14.004h13.921c2.778 0 5.004-1.945 5.004-4.816 0-2.872-2.226-4.817-5.003-4.817H7.015C4.238 15.492 2 17.437 2 20.31c0 2.87 2.238 4.816 5.016 4.816Zm14.214-1.77a3.048 3.048 0 0 1-3.035-3.058 3.028 3.028 0 0 1 3.035-3.035c1.688 0 3.06 1.347 3.047 3.023-.011 1.7-1.359 3.082-3.047 3.07Z"></path>
          </svg>
        </div>
        <div className="mr-3 text-[15px] font-medium tabular-nums select-none">
          {format(date, "EEE MMM d")}
        </div>
        <div className="text-[15px] font-medium tabular-nums select-none">
          {format(date, "HH:mm")}
        </div>
      </div>
    </motion.div>
  );
}
