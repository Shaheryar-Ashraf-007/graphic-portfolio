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
                I am a passionate Software Engineer with 2 years of experience
                in the tech industry. As a graduate of BS Computer Science from
                <span className="font-bold bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"> Government College University Faisalabad (GCUF)
                </span>
                , I have honed my technical expertise through both academic and
                practical pursuits.
              </p>
              <p className="transition-opacity duration-500 hover:opacity-80">
                Currently, I work at
                <span className="font-bold bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"> Bookme.pk</span>
                , Pakistan&apos;s first ticketing platform, where I contribute
                to developing innovative solutions that streamline online
                ticketing services. My experience includes building real-world
                projects, collaborating with teams, and addressing complex
                technical challenges.
              </p>
              <p className="transition-opacity duration-500 hover:opacity-80">
                Beyond my professional role, I am deeply invested in enhancing
                my problem-solving skills, continually striving to write
                efficient, scalable, and impactful code. With a strong
                foundation in software development and a commitment to lifelong
                learning, I aim to create technology that makes a difference.
              </p>
            </motion.div>
          </div>

          {/* Quote Section */}
          <div className="mt-8 sm:mt-4 lg:mt-12 space-y-6">
            <blockquote className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-sm sm:text-base lg:text-lg font-bold pr-0 lg:pr-8 transition-transform duration-500 hover:scale-105">
              &quot;As a software engineer, I believe in the power of technology to
              transform ideas into reality. Every challenge is an opportunity to
              learn, grow, and create solutions that make a difference.&quot;
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
