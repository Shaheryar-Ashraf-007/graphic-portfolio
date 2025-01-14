import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const Modal = ({ isOpen, onClose }) => {
  const router = useRouter();

  const handleAbout = () => router.push('/about');
  const handlePortfolio = () => router.push('/portfolio');
  const handleContact = () => router.push('/contact');
  const handleHome = () => router.push('/home');
  const handleblogs = () => router.push('/blogs');


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Animation variants
  const variants = {
    hidden: { opacity: 0, scale: 0.5, x: '100%' }, 
    visible: { opacity: 1, scale: 1, x: '0%' }, 
    exit: { opacity: 0, scale: 0.5, x: '100%' },
  };

  return (
    <div className="fixed inset-0 z-50">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
        onClick={onClose}
      />
      <motion.div
        className="fixed inset-y-0 right-0 w-64 bg-[#081629] text-white shadow-lg"
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        exit="exit"
        variants={variants}
        transition={{ duration: 0.3 }}
      >
        <div className="p-4">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-pink-500 transition-colors"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>

          <nav className="mt-8">
            <ul className="space-y-4">
              <li onClick={handleHome} className="block py-2 px-4 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer duration-300 rounded transition-colors">
                Home
              </li>
              <li onClick={handleAbout} className="block py-2 px-4 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-300 cursor-pointer rounded transition-colors">
                About
              </li>
              <li onClick={handlePortfolio} className="block py-2 px-4 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-300 cursor-pointer rounded transition-colors">
                Portfolio
              </li>
              <li onClick={handleContact} className="block py-2 px-4 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-300 cursor-pointer rounded transition-colors">
                Contact
              </li>
              <li onClick={handleblogs} className="block py-2 px-4 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-300 cursor-pointer rounded transition-colors">
                Blogs
              </li>
            </ul>
          </nav>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;