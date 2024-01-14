/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] flex max-w-7xl mx-auto flex-row items-start gap-5`}
      >
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915eff]"> Nikhil</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Part time Developer, <br className="sm:block hidden" />
              Full time Masti
            </p>
          </div>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute flex justify-center items-center w-full xs:bottom-10 bottom-32">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
