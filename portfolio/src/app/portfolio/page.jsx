import React from 'react';
import Image from 'next/image';
import img_20 from '../../../public/img_20.jpeg';
import img_19 from '../../../public/img_19.jpeg';
import img_18 from '../../../public/img_18.jpeg';
import img_17 from '../../../public/img_17.jpeg';
import img_16 from '../../../public/img_16.jpeg';
import img_15 from '../../../public/img_15.jpeg';
import img_14 from '../../../public/img_14.jpeg';
import img_13 from '../../../public/img_13.jpeg';
import img_12 from '../../../public/img_12.jpeg';
import img_11 from '../../../public/img_11.jpeg';
import img_10 from '../../../public/img_10.jpeg';
import img_37 from '../../../public/img_37.jpeg';
import img_38 from '../../../public/img_38.jpeg';
import img_39 from '../../../public/img_39.jpeg';
import img_40 from '../../../public/img_40.jpeg';
import img_41 from '../../../public/img_41.jpeg';
import img_42 from '../../../public/img_42.jpeg';
import img_9 from '../../../public/img_9.jpeg';
import img_8 from '../../../public/img_8.jpeg';
import img_7 from '../../../public/img_7.jpeg';
import img_6 from '../../../public/img_6.jpeg';
import img_5 from '../../../public/img_5.jpeg';
import img_4 from '../../../public/img_4.jpeg';
import img_3 from '../../../public/img_3.jpeg';
import img_2 from '../../../public/img_2.jpeg';
import img_1 from '../../../public/img_1.jpeg';
import img_21 from '../../../public/img_21.png';
import img_22 from '../../../public/img_22.jpg';
import img_23 from '../../../public/img_23.jpg';
import img_24 from '../../../public/img_24.jpg';
import img_25 from '../../../public/img_25.jpg';
import img_26 from '../../../public/img_26.jpg';
import img_27 from '../../../public/img_27.png';
import img_28 from '../../../public/img_28.png';
import img_29 from '../../../public/img_29.jpg';
import img_31 from '../../../public/img_31.png';
import img_32 from '../../../public/img_32.png';
import img_33 from '../../../public/img_33.jpg';
import img_34 from '../../../public/img_34.png';
import img_35 from '../../../public/img_35.png';

const Images = () => {
  const images = [
    { src: img_20, alt: "img_20" },
    { src: img_19, alt: "img_19" },
    { src: img_18, alt: "img_18" },
    { src: img_17, alt: "img_17" },
    { src: img_16, alt: "img_16" },
    { src: img_15, alt: "img_15" },
    { src: img_14, alt: "img_14" },
    { src: img_13, alt: "img_13" },
    { src: img_12, alt: "img_12" },
    { src: img_11, alt: "img_11" },
    { src: img_10, alt: "img_10" },
    { src: img_37, alt: "img_37" },
    { src: img_38, alt: "img_38" },
    { src: img_39, alt: "img_39" },
    { src: img_40, alt: "img_40" },
    { src: img_41, alt: "img_41" },
    { src: img_42, alt: "img_42" },
    { src: img_9, alt: "img_9" },
    { src: img_8, alt: "img_8" },
    { src: img_7, alt: "img_7" },
    { src: img_6, alt: "img_6" },
    { src: img_5, alt: "img_5" },
    { src: img_4, alt: "img_4" },
    { src: img_3, alt: "img_3" },
    { src: img_2, alt: "img_2" },
    { src: img_1, alt: "img_1" },
    { src: img_21, alt: "img_21" },
    { src: img_22, alt: "img_22" },
    { src: img_23, alt: "img_23" },
    { src: img_24, alt: "img_24" },
    { src: img_25, alt: "img_25" },
    { src: img_26, alt: "img_26" },
    { src: img_27, alt: "img_27" },
    { src: img_28, alt: "img_28" },
    { src: img_29, alt: "img_29" },
    { src: img_31, alt: "img_31" },
    { src: img_32, alt: "img_32" },
    { src: img_33, alt: "img_33" },
    { src: img_34, alt: "img_34" },
    { src: img_35, alt: "img_35" },
  ];

  return (
    <div>
      <h1 className="text-lg sm:text-sm md:text-xl lg:text-2xl font-bold">
        Skills
      </h1>
      <div className="flex flex-wrap gap-8 items-center justify-center">
        {images.map((image) => (
          <div
            key={image.alt}
            className="bg-gray-900 p-2 lg:p-4 mt-8 rounded-md cursor-pointer hover:bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center transition-transform duration-500 transform hover:scale-110 hover:rotate-3"
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="w-36 h-36 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-72 lg:h-72 transition-transform duration-500 transform hover:scale-105"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Images;