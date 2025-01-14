"use client";
import { Inter } from "next/font/google";
// import Image from "next/image";
import "../../styles/global.css";
import Navbar from "./components/Navbar";
import SplashScreen from "./components/SplashScreen";
// import gcp from '../../public/gcp.png'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// const metadata = {
//   title: "Shaheryar's Portfolio",
//   description: "Created By Shaheryar",
//   image: <Image src={gcp} alt={gcp}/>
// };


export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden`}>
        <div key={pathname} className=" w-full h-full overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="splash"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <SplashScreen />
              </motion.div>
            ) : (
              <motion.div 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                exit={{ scale: 0 }} 
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
              >
                <Navbar />
                {children}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </body>
    </html>
  );
}