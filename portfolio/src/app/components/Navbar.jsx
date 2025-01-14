import React, {useState } from 'react';
import { LuList } from "react-icons/lu";
import Modal from "../../app/components/Modal.jsx";
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


      <Modal
        isOpen={isOpenModal}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default Navbar;