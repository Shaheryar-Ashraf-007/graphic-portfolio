import React from 'react'
import amplify from "../../../public/amplify.png";
import azure from "../../../public/azure.png";
import boostrap from "../../../public/boostrap.png";
import css from "../../../public/css.png";
import express from "../../../public/express.png";
import figma from "../../../public/figma.png";
import gcp from "../../../public/gcp.png";
import git from "../../../public/git.png";
import github from "../../../public/github.png";
import gitlab from "../../../public/gitlab.png";
import html from "../../../public/html.png";
import javascript from "../../../public/javascript.png";
import mongoose from "../../../public/mongoose.png";
import netlify from "../../../public/netlify.png";
import next from "../../../public/next.png";
import nodejs from "../../../public/nodejs.png";
import nuxt from "../../../public/nuxt.png";
import postgresql from "../../../public/postgresql.png";
import prisma from "../../../public/prisma.png";
import python from "../../../public/python.png";
import react from "../../../public/react.png";
import redux from "../../../public/redux.png";
import tailwind from "../../../public/tailwind.png";
import typescript from "../../../public/typescript.png";
import vercel from "../../../public/vercel.png";
import vue from "../../../public/vue.png";
import mongodb from "../../../public/mongodb.png";
import mysql from "../../../public/mysql.png";
import Image from 'next/image';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Images = () => {

  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });

    const images = [
        { src: html, alt: "HTML", text: "HTML" },
        { src: css, alt: "CSS", text: "CSS" },
        { src: javascript, alt: "JavaScript", text: "Javascript" },
        { src: boostrap, alt: "Bootstrap", text: "Boostrap" },
        { src: tailwind, alt: "Tailwind CSS", text: "Tailwind Css" },
        { src: react, alt: "React", text: "React Js" },
        { src: next, alt: "Next.js", text: "Next Js" },
        { src: express, alt: "Express", text: "Express js" },
        { src: git, alt: "Git", text: "Git" },
        { src: github, alt: "GitHub", text: "GitHub" },
        { src: gitlab, alt: "GitLab", text: "GitLab" },
        { src: mongoose, alt: "Mongoose", text: "Mongoose" },
        { src: mongodb, alt: "MongoDB", text: "Mongodb" },
        { src: prisma, alt: "Prisma", text: "Prisma ORM" },
        { src: postgresql, alt: "PostgreSQL", text: "Postgresql" },
        { src: mysql, alt: "Mysql", text: "MySql" },
        { src: figma, alt: "Figma", text: "Figma" },
        { src: amplify, alt: "Amplify", text: "Amplify" },
        { src: azure, alt: "Azure", text: "Azure" },
        { src: gcp, alt: "GCP", text: "GCP" },
        { src: netlify, alt: "Netlify", text: "Netlify" },
        { src: nodejs, alt: "Node.js", text: "Node js" },
        { src: nuxt, alt: "Nuxt", text: "Nuxt js" },
        { src: python, alt: "Python", text: "Python" },
        { src: redux, alt: "Redux", text: "Redux" },
        { src: typescript, alt: "TypeScript", text: "TypeScript" },
        { src: vercel, alt: "Vercel", text: "Vercel" },
        { src: vue, alt: "Vue.js", text: "Vue js" },
      ];
  return (
    <div>
        <motion.h1 className="text-lg sm:text-sm md:text-xl lg:text-2xl font-bold"
        ref={ref}
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}>
          Skills
        </motion.h1>
        <motion.div className="flex flex-wrap gap-4 items-center justify-center"
        ref={ref}
        initial={{ opacity: 0, y: 80 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}>
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
  )
}

export default Images


