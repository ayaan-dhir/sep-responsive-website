"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";

export default function Hero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center justify-center px-4"
      >
        <div className="text-4xl md:text-7xl font-bold text-white text-center pb-3">
          Sigma Eta Pi
        </div>
        <div className="font-light text-xl md:text-3xl text-[#8787ff]">
          The future is here...
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
