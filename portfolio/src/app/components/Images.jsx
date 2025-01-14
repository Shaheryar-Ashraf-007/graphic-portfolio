import React from 'react';
import photoshop from '../../../public/photoshop.png';
import illustrator from '../../../public/illustrator.png';
import indesign from '../../../public/indesign.png';
import xd from '../../../public/xd.png';
import lightroom from '../../../public/lightroom.png';
import firefly from '../../../public/firefly.png';
import figma from '../../../public/figma.png';
import power from '../../../public/power.png';
import word from '../../../public/word.png';
import excel from '../../../public/excel.png';
import capcut from '../../../public/capcut.jpg';
import corel from '../../../public/corel.png';


import Image from 'next/image';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Images = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });

  const images = [
    { src: photoshop, alt: "Adobe Photoshop", text: "Adobe Photoshop" },
    { src: illustrator, alt: "Adobe Illustrator", text: "Adobe Illustrator" },
    { src: lightroom, alt: "Adobe Lightroom", text: "Adobe Lightroom" },
    { src: indesign, alt: "Adobe Indesign", text: "Adobe Indesign" },
    { src: xd, alt: "Adobe XD", text: "Adobe XD" },
    { src: figma, alt: "Figma", text: "Figma" },
    { src: power, alt: "Power", text: "Power" },
    { src: word, alt: "Word", text: "Word" },
    { src: excel, alt: "Excel", text: "Excel" },
    { src: firefly, alt: "Firefly", text: "Firefly" },
    { src: capcut, alt: "Capcut", text: "Capcut" },
    { src: corel, alt: "Corel", text: "Corel" },
  ];

  return (
    <div>
      <motion.h1 
        className="text-lg sm:text-sm md:text-xl lg:text-2xl font-bold"
        ref={ref}
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Skills
      </motion.h1>
      <motion.div 
        className="flex flex-wrap gap-4 items-center justify-center"
        ref={ref}
        initial={{ opacity: 0, y: 80 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {images.map((image) => (
          <div
            key={image.alt}
            className="bg-gray-900 p-2 lg:p-4 mt-8 rounded-md cursor-pointer hover:bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center transition-transform duration-500 transform hover:scale-110 hover:rotate-3"
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="w-12 h-12 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 transition-transform duration-500 transform hover:scale-125"
              priority
            />
            <span className="absolute top-20 lg:top-32 md:top-24 sm:top-20 text-xs text-center text-white font-semibold">
              {image.text}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Images;