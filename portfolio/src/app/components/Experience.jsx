import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Experience = () => {

  const [ref, inView] = useInView({
    triggerOnce: true, 
  });

  return (
    <div className="">
  <motion.h3 className="mt-28 ml-8 lg:ml-16 sm:text-sm md:text-xl lg:text-2xl font-bold"
  ref={ref}
  initial={{ opacity: 0, x: -40 }}
  animate={inView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.5, delay: 0.2 }}>
    Experience
</motion.h3>
      <div className="container mx-auto px-4 py-12 ">
        <div className="max-w-3xl mx-auto">
          <h2 className="lg:text-3xl md:text-xl sm:text-md font-bold text-center mb-12 text-gray-800">
            Journey
          </h2>

          {/* Timeline container with vertical line */}
          <div className="timeline-container relative before:absolute before:left-2 before:h-full before:w-0.5 before:bg-gradient-to-r from-cyan-800 via-purple-800 to-pink-800 mr-8">
            {/* 2020 */}
            <motion.div className="timeline-item relative pl-12 pb-12"
            ref={ref}
            initial={{ opacity: 0, x: -80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}>
              {/* Timeline dot */}
              <div className="absolute left-2 -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full shadow-lg border-2 border-gray-900" />
              <div className=" bg-gray-900 hover:bg-gradient-to-r from-cyan-800 via-purple-800 to-pink-800 cursor-pointer rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-3 hover:-translate-y-2 hover:animate-pulse">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">
                    Graphic Designer
                  </h3>

                  <span className=" px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-blue-500 rounded-full">
                    Bookme.pk
                  </span>
                </div>
                <div className="mb-4 mt-0">Sep 2024 - Dec 2024</div>
                <p className="text-white mb-4">
                I am a graphic designer with experience working on many real-world projects. At Bookme.pk, I contribute to UI/UX design, ensuring intuitive and visually appealing user experiences.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Figma
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Illustrator
                  </span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                    Photoshop
                  </span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                    Lightroom
                  </span>
                  <span className="px-2 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">
                    Adobe XD
                  </span>
                  <span className="px-2 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">
                    TeamWork
                  </span>
                  <span className="px-2 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">
                    Leadership
                  </span>
                  <span className="px-2 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">
                    Time Management
                  </span>
                </div>
              </div>
            </motion.div>

            {/* 2021 */}
            <motion.div className="timeline-item relative pl-12 pb-12"
            ref={ref}
            initial={{ opacity: 0, x: -80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="absolute left-2 -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full shadow-lg border-2 border-gray-900" />
              <div className="bg-gray-900 hover:bg-gradient-to-r from-cyan-800 via-purple-800 to-pink-800  cursor-pointer rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-3 hover:-translate-y-2 hover:animate-pulse">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Tech Intern</h3>
                  <span className="px-3 py-1 text-sm text-white bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full">
                    Bookme.pk
                  </span>
                </div>
                <div className="mb-4 mt-0">Jul 2024 - Sep 2024</div>

                <p className="text-white mb-4">
                I worked as a Tech Intern at Bookme.pk, contributing to graphic design projects and honing my skills in creating visually appealing designs. During this time, I also mastered the complete Adobe Suite, enhancing my ability to deliver high-quality, professional designs.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Photoshop
                  </span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                    Illustrator
                  </span>
                  <span className="px-2 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">
                    Figma
                  </span>
                  <span className="px-2 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">
                    Adobe XD
                  </span>
                  
                </div>
              </div>
            </motion.div>

            {/* 2022 */}
            <div className="timeline-item relative pl-12 pb-12"
            >
              <div className="absolute left-2 -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full shadow-lg border-2 border-gray-900" />
              <div className="bg-gray-900 hover:scale-105 hover:shadow-2xl hover:rotate-3 hover:-translate-y-2 hover:animate-pulse hover:bg-gradient-to-r from-cyan-800 via-purple-800 to-pink-800  cursor-pointer rounded-lg shadow-lg p-6 transform transition duration-300 ">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Election Compaign of PP-115</h3>
                </div>
                <div className="mb-4 mt-0">2022 - Feb 2024</div>
                <p className="text-white mb-4">
                As a freelancer, I have worked on numerous real-world projects, demonstrating adaptability and delivering solutions tailored to diverse client requirements. Notably, I contributed to the election campaign of PP-115, leveraging my expertise in CorelDRAW, Illustrator, and Photoshop to create impactful designs.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Photoshop
                  </span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                    Corel Draw
                  </span>
                  <span className="px-2 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">
                    Illustror 
                  </span>
                  
                </div>
              </div>
            </div>

            {/* 2023 */}
            <div className="timeline-item relative pl-12"
            >
              <div className="absolute left-2 -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg border-2 border-gray-900" />
              <div className="bg-gray-900 hover:bg-gradient-to-r from-cyan-800 via-purple-800 to-pink-800 hover:shadow-2xl hover:rotate-3 hover:-translate-y-2 hover:animate-pulse cursor-pointer rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">
                    Certified from SMIT-FSD
                  </h3>
                  <span className="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-blue-500 rounded-full">
                    SMIT
                  </span>
                </div>
                <p className="text-white mb-4">
                I am a certified graphic designer from SMIT FSD, equipped with professional training and expertise in creating impactful designs. My certification reflects a strong foundation in design principles and proficiency in tools like CorelDRAW, Illustrator, Photoshop, and the Adobe Suite.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white text-blue-500 rounded-full text-sm">
                    Photoshop
                  </span>
                  <span className="px-2 py-1 bg-white text-pink-500  rounded-full text-sm">
                    Illustrator
                  </span>
                  <span className="px-2 py-1 bg-white text-pink-500  rounded-full text-sm">
                    Lightroom
                  </span>
                  <span className="px-2 py-1 bg-white text-pink-500  rounded-full text-sm">
                    Adobe Indesign
                  </span>
                  <span className="px-2 py-1 bg-white text-pink-500  rounded-full text-sm">
                    Adobe XD
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
