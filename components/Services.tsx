"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { services } from "../data.json";

export const Services = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 1500);
  }, []);

  return (
    <div className="flex w-full justify-center xl:w-[900px] mx-auto">
      <ul className="mt-3 w-full grid grid-cols-1 gap-5 md:grid-cols-2 xl:gap-6">
        {services.map(({ name, description }) => {
          return (
            <motion.li
              className="rounded-xl bg-white/5 p-3 shadow-sm shadow-white"
              key={name}
              layout
              transition={{ layout: { duration: 1 } }}
            >
              <div className="rounded-md p-3 text-sm/6 transition hover:bg-white/5">
                <motion.h2
                  layout="position"
                  className="font-semibold text-white flex gap-4 items-center justify-center text-base xl:text-xl mb-3"
                >
                  <span>{name}</span>
                  <FaCode />
                </motion.h2>
                {isOpen && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-sm xl:text-lg"
                  >
                    {description}
                  </motion.p>
                )}
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};
