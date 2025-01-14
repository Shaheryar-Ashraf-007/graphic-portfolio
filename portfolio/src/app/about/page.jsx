"use client";
import React from "react";
import Image from "next/image";
import signatures from "../../../public/signatures.png";
import Images from "../components/Images.jsx";
import { useEffect } from "react";
import Brain from "../components/Brain.jsx";
import { useScroll } from "framer-motion";
import Experience from "../components/Experience";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Page = () => {

   const [ref, inView] = useInView({
      triggerOnce: true, 
      threshold: 0.2, 
    });
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="about-section" className="relative min-h-screen w-full overflow-hidden mb-12">
      <div className="px-4 lg:px-16 flex">
        {/* Text Container */}
        <div className="w-full h-full lg:w-1/2 flex flex-col pt-6 sm:pt-8 lg:pt-16"
        >
          {/* Biography */}
          <div>
            <motion.h1 className=" mt-12 sm:text-sm md:text-xl lg:text-2xl font-bold "
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}>
              Biography
            </motion.h1>
            <motion.div className="mt-8 ml-8 space-y-4 text-sm sm:text-base lg:text-md font-light pr-0 lg:pr-8"
            ref={ref}
            initial={{ opacity: 0, x: -80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="transition-opacity duration-500 hover:opacity-80">
              I am a passionate Graphic Designer with a strong foundation in computer science, holding a BS degree from
                <span className="font-bold bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"> Government College University Faisalabad (GCUF)
                </span>
                , I have honed my technical expertise through both academic and
                practical pursuits.
              </p>
              <p className="transition-opacity duration-500 hover:opacity-80">
                Currently, I work at
                <span className="font-bold bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"> Bookme.pk</span>
                , Pakistan&apos;s first ticketing platform, I have contributed to enhancing user experiences by designing intuitive interfaces and innovative visual solutions. My expertise spans branding, UI/UX design, and digital art, enabling me to craft designs that resonate with audiences and align with strategic objectives.
              </p>
              <p className="transition-opacity duration-500 hover:opacity-80">
              Driven by a commitment to excellence and lifelong learning, I continually refine my skills to stay at the forefront of design trends and technologies. My goal is to create visuals that not only captivate but also make a meaningful impact.
              </p>
            </motion.div>
          </div>

          {/* Quote Section */}
          <div className="mt-8 sm:mt-4 lg:mt-12 space-y-6">
            <blockquote className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-sm sm:text-base lg:text-lg font-bold pr-0 lg:pr-8 transition-transform duration-500 hover:scale-105">
            Graphic design is more than just art; it&apos;s the visual language that connects ideas with emotions, transforming creativity into communication.
            </blockquote>
            <div className="flex justify-end pr-0 lg:pr-8">
              <Image
                className="w-28 mt-4 sm:mt-[-21px] md:mt-2 lg:mt-4 h-8 mr-12 transition-transform duration-500 hover:scale-105"
                src={signatures}
                alt="signatures"
                priority
              />
            </div>
          </div>
        </div>

        {/* SVG Container */}
        <div className="hidden lg:flex w-full lg:w-1/2 py-8 lg:py-0">
          <div className="w-full h-full transition-transform duration-500 hover:scale-110">
            <Brain scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-12 ml-8 mr-4 md:ml-8 md:mr-8 sm:mr-8 lg:ml-16 lg:mr-20">
        <Images />
      </div>
      <Experience />
    </div>
  );
};

export default Page;
