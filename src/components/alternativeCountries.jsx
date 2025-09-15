import React from "react";
import { useModal } from '@/components/modalcontext';
import Image from 'next/image';

const countries = [
  {
    name: "Греция",
    price: "450 бел. руб.",
    days: "45 дней",
    link: "/shengenskie-vizy/viza-v-grecziyu ",
    image:
      "/greece.png",
  },
  {
    name: "Испания",
    price: "от 790 бел. руб.",
    days: "до 60 дней",
    link: "/shengenskie-vizy/viza-v-ispaniyu ",
    image:
      "/spain.png",
  },
  {
    name: "Италия",
    price: "от 350 бел. руб.",
    days: "до 14 дней",
    link: "/shengenskie-vizy/viza-v-italiyu ",
    image:
      "/italy.png",
  },
  {
    name: "Франция",
    price: "от 650 бел. руб.",
    days: "до 14 дней",
    link: "/shengenskie-vizy/viza-vo-francziyu",
    image:
      "/france.png",
  },
];

export default function CountryCards() {
    const { openModal } = useModal();
  return (
    <div className="grid 1024m:grid-cols-2 grid-cols-4 gap-6">
      {countries.map((country, index) => (
        <a
          key={index}
          href={country.link}
          className="relative rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <div
            className="h-[300px] bg-cover bg-center"
            style={{ backgroundImage: `url(${country.image})` }}
          ></div>

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-start p-4 text-white">
            <h2 className="text-xl font-bold mb-[80px]">{country.name}</h2>
            <div className="flex mb-[10px] h-[80px]">
                <div className="w-[50%]">
                    <Image
                        width={24}
                        height={24}
                        src="/walletwhite.svg"
                        alt="Преимущество работы с VisaVam.by"
                        className="h-[40px] w-[40px] mr-2"
                        loading="lazy" // Хорошо для некритических изображений
                    />
                    <p className="text-sm">{country.price}</p>
                </div>
                <div className="w-[50%] ml-[10px]">
                    <Image
                        width={24}
                        height={24}
                        src="/timewhite.svg"
                        alt="Преимущество работы с VisaVam.by"
                        className="h-[40px] w-[40px] mr-2"
                        loading="lazy" // Хорошо для некритических изображений
                    />
                    <p className="text-sm mb-3">{country.days}</p>
                </div>
            </div>
            <button
                onClick={(e) => {
                    e.preventDefault(); 
                    e.stopPropagation(); 
                    openModal(); 
                  }}
                className="w-full bg-customBlue hover:bg-blue-600 text-white 1024m:py-[5px] py-3 rounded-full shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] active:scale-95 transition-transform duration-150 ease-in-out"
            >
                Получить консультацию
            </button>
          </div>
        </a>
      ))}
    </div>
  );
}