"use client";
import React, {useState } from 'react';
import { LuList } from "react-icons/lu";
import Modal from "../../app/components/Modal.jsx";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useRouter } from 'next/navigation.js';

const Navbar = () => {


  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);
  const router = useRouter();
  const handleBlog=()=>{
    router.push("/blogs")
  }

  const handleHome=()=>{
    router.push("/home")
  }

  return (
    <div className='text-white flex flex-col md:flex-row items-center justify-between w-full px-4'>
      <div className="relative w-full md:w-1/2">
        <div className="absolute right-4 top-4 md:hidden">
          <LuList onClick={handleOpenModal} className='text-white hover:text-pink-500
         cursor-pointer text-2xl' />
        </div>

        <ul className='hidden md:flex items-center gap-8 pt-8 pb-4 ml-28 mr-8 text-md'>
          <li onClick={handleHome} className='border-none hover:bg-transparent hover:text-pink-500 cursor-pointer transform hover:scale-95 px-3 py-2 border rounded-md'>
            Home 
          </li>
          <li onClick={() => scrollToSection("about-section")} className='border-none hover:bg-transparent hover:text-pink-500 cursor-pointer transform hover:scale-95 px-3 py-2 border rounded-md'>
            About
          </li>
          <li onClick={() => scrollToSection("portfolio-section")} className='border-none hover:bg-transparent hover:text-pink-500 cursor-pointer transform hover:scale-95 px-3 py-2 border rounded-md'>
            Portfolio
          </li>
          <li onClick={() => scrollToSection("contact-section")} className='border-none hover:bg-transparent hover:text-pink-500 cursor-pointer transform hover:scale-95 px-3 py-2 border rounded-md'>
            Contact
          </li>
          <li onClick={handleBlog}  className='border-none hover:bg-transparent hover:text-pink-500 cursor-pointer transform hover:scale-95 px-3 py-2 border rounded-md'>
            Blogs
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-6 justify-center md:justify-center md:w-1/3 py-4">
        <a href="https://github.com/Shaheryar-Ashraf-007" target="_blank" rel="noopener noreferrer">
          <FaGithub size={28} className='text-white cursor-pointer border-none lg:hover:text-pink-500 
          md:hover:text-pink-500 hover:cursor-pointer transform hover:scale-95 border rounded-md' />
        </a>
        <a href="https://www.linkedin.com/in/muhammad-shaheryar-bb0542314/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn size={28} className='text-white cursor-pointer border-none lg:hover:text-pink-500 
          md:hover:text-pink-500 hover:cursor-pointer transform hover:scale-95 border rounded-md' />
        </a>
        <a href="https://leetcode.com/u/Muhammad-Shaheryar/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode size={28} className='text-white cursor-pointer border-none lg:hover:text-pink-500 md:hover:text-pink-500 hover:cursor-pointer transform hover:scale-95 border rounded-md' />
        </a>
      </div>

      <Modal
        isOpen={isOpenModal}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default Navbar;