// import React from "react";
// import { useModal } from '@/components/modalcontext';
// import Image from 'next/image';

// const countries = [
//   {
//     name: "Греция",
//     price: "450 бел. руб.",
//     days: "45 дней",
//     link: "/shengenskie-vizy/viza-v-grecziyu ",
//     image:
//       "/greece.png",
//   },
//   {
//     name: "Испания",
//     price: "от 790 бел. руб.",
//     days: "до 60 дней",
//     link: "/shengenskie-vizy/viza-v-ispaniyu ",
//     image:
//       "/spain.png",
//   },
//   {
//     name: "Италия",
//     price: "от 350 бел. руб.",
//     days: "до 14 дней",
//     link: "/shengenskie-vizy/viza-v-italiyu ",
//     image:
//       "/italy.png",
//   },
//   {
//     name: "Франция",
//     price: "от 650 бел. руб.",
//     days: "до 14 дней",
//     link: "/shengenskie-vizy/viza-vo-francziyu",
//     image:
//       "/france.png",
//   },
// ];

// export default function CountryCards() {
//     const { openModal } = useModal();
//   return (
//     <div className="grid 1024m:grid-cols-2 grid-cols-4 gap-6">
//       {countries.map((country, index) => (
//         <a
//           key={index}
//           href={country.link}
//           className="relative rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
//         >
//           <div
//             className="h-[300px] bg-cover bg-center"
//             style={{ backgroundImage: `url(${country.image})` }}
//           ></div>

//           <div className="absolute inset-0 bg-black/40 flex flex-col justify-start p-4 text-white">
//             <h2 className="text-xl font-bold mb-[80px]">{country.name}</h2>
//             <div className="flex mb-[10px] h-[80px]">
//                 <div className="w-[50%]">
//                     <Image
//                         width={24}
//                         height={24}
//                         src="/walletwhite.svg"
//                         alt="Преимущество работы с VisaVam.by"
//                         className="h-[40px] w-[40px] mr-2"
//                         loading="lazy" // Хорошо для некритических изображений
//                     />
//                     <p className="text-sm">{country.price}</p>
//                 </div>
//                 <div className="w-[50%] ml-[10px]">
//                     <Image
//                         width={24}
//                         height={24}
//                         src="/timewhite.svg"
//                         alt="Преимущество работы с VisaVam.by"
//                         className="h-[40px] w-[40px] mr-2"
//                         loading="lazy" // Хорошо для некритических изображений
//                     />
//                     <p className="text-sm mb-3">{country.days}</p>
//                 </div>
//             </div>
//             <button
//                 onClick={(e) => {
//                     e.preventDefault(); 
//                     e.stopPropagation(); 
//                     openModal(); 
//                   }}
//                 className="w-full bg-customBlue hover:bg-blue-600 text-white 1024m:py-[5px] py-3 rounded-full shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] active:scale-95 transition-transform duration-150 ease-in-out"
//             >
//                 Получить консультацию
//             </button>
//           </div>
//         </a>
//       ))}
//     </div>
//   );
// }

// "use client"

// import React, { useState, useEffect, useRef } from "react";
// import { useModal } from '@/components/modalcontext';
// import Image from 'next/image';
// import { useSwipeable } from "react-swipeable";

// const countries = [
//   { name: "Греция", price: "450 бел. руб.", days: "45 дней", link: "/shengenskie-vizy/viza-v-grecziyu", image: "/greece.png" },
//   { name: "Испания", price: "от 790 бел. руб.", days: "до 60 дней", link: "/shengenskie-vizy/viza-v-ispaniyu", image: "/spain.png" },
//   { name: "Италия", price: "от 350 бел. руб.", days: "до 14 дней", link: "/shengenskie-vizy/viza-v-italiyu", image: "/italy.png" },
//   { name: "Франция", price: "от 650 бел. руб.", days: "до 14 дней", link: "/shengenskie-vizy/viza-vo-francziyu", image: "/france.png" },
// ];

// export default function CountryCards() {
//     const { openModal } = useModal();
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isLgScreen, setIsLgScreen] = useState(false);
//     const intervalRef = useRef(null);

//     // Определяем размер экрана
//     useEffect(() => {
//         const handleResize = () => setIsLgScreen(window.innerWidth >= 1024);
//         handleResize();
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     // Автопрокрутка на мобильных
//     useEffect(() => {
//         if (!isLgScreen) {
//             intervalRef.current = setInterval(() => {
//                 setCurrentIndex((prev) => (prev < countries.length - 1 ? prev + 1 : 0));
//             }, 3000);
//         }
//         return () => {
//             if (intervalRef.current) clearInterval(intervalRef.current);
//         };
//     }, [isLgScreen]);

//     const stopAutoPlay = () => {
//         if (intervalRef.current) {
//             clearInterval(intervalRef.current);
//             intervalRef.current = null;
//         }
//     };

//     const handlePrev = () => {
//         stopAutoPlay();
//         setCurrentIndex((prev) => (prev > 0 ? prev - 1 : countries.length - 1));
//     };

//     const handleNext = () => {
//         stopAutoPlay();
//         setCurrentIndex((prev) => (prev < countries.length - 1 ? prev + 1 : 0));
//     };

//     const swipeHandlers = useSwipeable({
//         onSwipedLeft: handleNext,
//         onSwipedRight: handlePrev,
//         trackMouse: true,
//     });

//     const renderCard = (country, index) => (
//         <a
//             key={index}
//             href={country.link}
//             className="relative rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
//         >
//             <div className="h-[300px] bg-cover bg-center" style={{ backgroundImage: `url(${country.image})` }}></div>
//             <div className="absolute inset-0 bg-black/40 flex flex-col justify-start p-4 text-white">
//                 <h2 className="text-xl font-bold mb-[80px]">{country.name}</h2>
//                 <div className="flex mb-[10px] h-[80px]">
//                     <div className="w-[50%]">
//                         <Image width={24} height={24} src="/walletwhite.svg" alt="" className="h-[40px] w-[40px] mr-2" loading="lazy" />
//                         <p className="text-sm">{country.price}</p>
//                     </div>
//                     <div className="w-[50%] ml-[10px]">
//                         <Image width={24} height={24} src="/timewhite.svg" alt="" className="h-[40px] w-[40px] mr-2" loading="lazy" />
//                         <p className="text-sm mb-3">{country.days}</p>
//                     </div>
//                 </div>
//                 <button
//                     onClick={(e) => {
//                         e.preventDefault();
//                         e.stopPropagation();
//                         openModal();
//                     }}
//                     className="w-full bg-customBlue hover:bg-blue-600 text-white py-3 rounded-full shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] active:scale-95 transition-transform duration-150 ease-in-out"
//                 >
//                     Получить консультацию
//                 </button>
//             </div>
//         </a>
//     );

//     if (isLgScreen) {
//         // Десктопная сетка
//         return (
//             <div className="grid grid-cols-4 1024m:grid-cols-2 gap-6">
//                 {countries.map(renderCard)}
//             </div>
//         );
//     } else {
//         // Мобильный слайдер
//         return (
//             <div className="relative w-full overflow-hidden" {...swipeHandlers}>
//                 <div
//                     className="flex transition-transform duration-700"
//                     style={{ transform: `translateX(-${currentIndex * 90}%)` }}
//                 >
//                     {countries.map((country, index) => (
//                         <div key={index} className="w-[90%] flex-shrink-0 mr-4">
//                             {renderCard(country, index)}
//                         </div>
//                     ))}
//                 </div>

//                 {/* Кнопки */}
//                 <div className="flex justify-center items-center mt-4 space-x-4">
//                     <button onClick={handlePrev} className="text-4xl text-[#F86F00]">‹</button>
//                     <button onClick={handleNext} className="text-4xl text-[#F86F00]">›</button>
//                 </div>
//             </div>
//         );
//     }
// }

"use client"

import React, { useState, useEffect, useRef } from "react";
import { useModal } from '@/components/modalcontext';
import Image from 'next/image';
import { useSwipeable } from "react-swipeable";

const countries = [
  { name: "Греция", price: "450 бел. руб.", days: "45 дней", link: "/shengenskie-vizy/viza-v-grecziyu", image: "/greece.png" },
  { name: "Испания", price: "от 790 бел. руб.", days: "до 60 дней", link: "/shengenskie-vizy/viza-v-ispaniyu", image: "/spain.png" },
  { name: "Италия", price: "от 350 бел. руб.", days: "до 14 дней", link: "/shengenskie-vizy/viza-v-italiyu", image: "/italy.png" },
  { name: "Франция", price: "от 650 бел. руб.", days: "до 14 дней", link: "/shengenskie-vizy/viza-vo-francziyu", image: "/france.png" },
];

export default function CountryCards() {
    const { openModal } = useModal();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLgScreen, setIsLgScreen] = useState(false);
    const intervalRef = useRef(null);

    // Определяем размер экрана
    useEffect(() => {
        const handleResize = () => setIsLgScreen(window.innerWidth >= 1024);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Автопрокрутка на мобильных
    useEffect(() => {
        if (!isLgScreen) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prev) => (prev < countries.length - 1 ? prev + 1 : 0));
            }, 3000);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isLgScreen]);

    const stopAutoPlay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const handlePrev = () => {
        stopAutoPlay();
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : countries.length - 1));
    };

    const handleNext = () => {
        stopAutoPlay();
        setCurrentIndex((prev) => (prev < countries.length - 1 ? prev + 1 : 0));
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        trackMouse: true,
    });

    const renderCard = (country) => (
        <a
            href={country.link}
            className="relative block rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer w-full"
        >
            <div
                className="h-[300px] w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${country.image})` }}
            ></div>
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-start p-4 text-white">
                <h2 className="text-xl font-bold mb-[80px]">{country.name}</h2>
                <div className="flex mb-[10px] h-[80px]">
                    <div className="w-[50%]">
                        <Image width={24} height={24} src="/walletwhite.svg" alt="" className="h-[40px] w-[40px] mr-2" loading="lazy" />
                        <p className="text-sm">{country.price}</p>
                    </div>
                    <div className="w-[50%] ml-[10px]">
                        <Image width={24} height={24} src="/timewhite.svg" alt="" className="h-[40px] w-[40px] mr-2" loading="lazy" />
                        <p className="text-sm mb-3">{country.days}</p>
                    </div>
                </div>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        openModal();
                    }}
                    className="w-full bg-customBlue hover:bg-blue-600 text-white py-3 rounded-full shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] active:scale-95 transition-transform duration-150 ease-in-out"
                >
                    Получить консультацию
                </button>
            </div>
        </a>
    );

    if (isLgScreen) {
        // Сетка для десктопа
        return (
            <div className="grid grid-cols-4 1024m:grid-cols-2 gap-6">
                {countries.map((country, index) => renderCard(country))}
            </div>
        );
    } else {
        // Мобильный слайдер
        return (
            <div className="relative w-full overflow-hidden" {...swipeHandlers}>
                <div
                    className="flex transition-transform duration-700"
                    style={{ transform: `translateX(-${currentIndex * 95}%)` }}
                >
                    {countries.map((country) => (
                        <div key={country.name} className="flex-shrink-0 w-[95%] mr-4">
                            {renderCard(country)}
                        </div>
                    ))}
                </div>

                {/* Кнопки */}
                <div className="flex justify-center items-center mt-4 space-x-4">
                    <button onClick={handlePrev} className="text-4xl text-[#F86F00]">‹</button>
                    <button onClick={handleNext} className="text-4xl text-[#F86F00]">›</button>
                </div>
            </div>
        );
    }
}

