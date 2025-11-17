'use client'

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const year = new Date().getFullYear();

const PolInfoTr = () => {
    return (
        <div className="flex flex-col gap-4 pt-32 mdd:pt-20">
            <h2 className=" px-[7%] text-[18px] md:text-[28px] sm:text-[22px] font-semibold mb-8 lg:mb-16 mdd:mb-4">
                Полезная информация
            </h2>

            <Link href="/poleznaya-informasia/kak-polochit-turisticheskyu-visy" 
            className="px-[7%] w-full relative left-0  pb-4">
                <div style={{
                    boxShadow: '3px 2px 8px 1px #FFEEDB',
                    backdropFilter: 'blur(200px)'
                }}
                    className="flex flex-col md:flex-row md:gap-4 items-center bg-white border border-[#FFEEDB] rounded-lg shadow-md p-0 md:p-4 hover:shadow-lg transition-shadow">
                    <Image src={"/topic11.webp"} alt={"Полезная информация"} width={1000} height={1000}
                            className={"w-[191px] h-[124px] dm:hidden rounded-none md:rounded-tl-none md:rounded-tr-none rounded-tl-lg rounded-tr-lg"}/>
                    <Image src={"/topic11.webp"} alt={"Полезная информация"} width={1000} height={1000}
                            className={"md:hidden rounded-none md:rounded-tl-none md:rounded-tr-none rounded-tl-lg rounded-tr-lg"}/>
                    <div className={"dm:p-4"}>
                        <h3 className="text-base dm:font-medium md:text-xl text-black mb-1">
                            Как получить туристическую визу в {year}: полное руководство по оформлению
                        </h3>
                        <p className="dm:text-base text-[#595959] mb-4">
                            В этой статье мы подробно разберем, <b>как оформить туристическую визу</b> самостоятельно, 
                            и дадим пошаговую инструкцию, которая поможет вам избежать распространенных ошибок 
                            и сэкономить время.
                        </p>
                        <div className="flex justify-between items-center">
                            <span
                                className="dm:text-base text-[#F86F00] font-medium"
                            >
                                Читать полностью
                            </span>
                            <span className="text-[#FA9D3E] text-sm md:hidden">14.11.2025</span>
                        </div>
                    </div>
                    <span className="text-[#FA9D3E] text-sm self-start dm:hidden">14.11.2025</span>
                </div>
            </Link>
            
            <Link href="/poleznaya-informasia/kak-poluchit-rabochyu-vizy" target="_blank" 
            className="px-[7%] w-full relative left-0  pb-4">
                <div style={{
                    boxShadow: '3px 2px 8px 1px #FFEEDB',
                    backdropFilter: 'blur(200px)'
                }}
                    className="flex flex-col md:flex-row md:gap-4 items-center bg-white border border-[#FFEEDB] rounded-lg shadow-md p-0 md:p-4 hover:shadow-lg transition-shadow">
                    <Image src={"/topic10.webp"} alt={"Полезная информация"} width={1000} height={1000}
                            className={"w-[191px] h-[124px] dm:hidden rounded-none md:rounded-tl-none md:rounded-tr-none rounded-tl-lg rounded-tr-lg"}/>
                    <Image src={"/topic10.webp"} alt={"Полезная информация"} width={1000} height={1000}
                            className={"md:hidden rounded-none md:rounded-tl-none md:rounded-tr-none rounded-tl-lg rounded-tr-lg"}/>
                    <div className={"dm:p-4"}>
                        <h3 className="text-base dm:font-medium md:text-xl text-black mb-1">
                            Как получить рабочую визу: полное руководство для белорусов в {year} году
                        </h3>
                        <p className="dm:text-base text-[#595959] mb-4">
                            Хотите работать в другой стране? Чтобы всё было легально, нужна рабочая виза. 
                            С ней Вы сможете устроиться на работу официально, а значит, Ваши права будут защищены. 
                            Давайте лучше разберёмся, как правильно получить рабочую визу.
                        </p>
                        <div className="flex justify-between items-center">
                            <span
                                className="dm:text-base text-[#F86F00] font-medium"
                            >
                                Читать полностью
                            </span>
                            <span className="text-[#FA9D3E] text-sm md:hidden">01.11.2025</span>
                        </div>
                    </div>
                    <span className="text-[#FA9D3E] text-sm self-start dm:hidden">01.11.2025</span>
                </div>
            </Link>

            <Link href="/poleznaya-informasia/viza-v-kitay-dlya-belorusov" target="_blank" className="px-[7%] w-full relative left-0 pb-4">
                <div style={{
                    boxShadow: '3px 2px 8px 1px #FFEEDB',
                    backdropFilter: 'blur(200px)'
                }}
                    className="flex flex-col md:flex-row md:gap-4 items-center bg-white border border-[#FFEEDB] rounded-lg shadow-md p-0 md:p-4 hover:shadow-lg transition-shadow">
                    <Image src={"/topic9.png"} alt={"Полезная информация"} width={1000} height={1000}
                            className={"w-[191px] h-[124px] dm:hidden rounded-none md:rounded-tl-none md:rounded-tr-none rounded-tl-lg rounded-tr-lg"}/>
                    <Image src={"/topic9.png"} alt={"Полезная информация"} width={1000} height={1000}
                            className={"md:hidden rounded-none md:rounded-tl-none md:rounded-tr-none rounded-tl-lg rounded-tr-lg"}/>
                    <div className={"dm:p-4"}>
                        <h3 className="text-base dm:font-medium md:text-xl text-black mb-1">
                            Виза в Китай для белорусов в {year} году: когда можно ехать без визы, а когда она необходима
                        </h3>
                        <p className="dm:text-base text-[#595959] mb-4">
                            Главный вопрос, который волнует каждого путешественника: нужна 
                            ли виза в Китай для белорусов? Ответ не так однозначен, как кажется. 
                            Благодаря соглашению между странами, во многих случаях можно поехать 
                            в Китай без визы, но существуют важные правила и исключения.
                        </p>
                        <div className="flex justify-between items-center">
                            <span
                                className="dm:text-base text-[#F86F00] font-medium"
                            >
                                Читать полностью
                            </span>
                            <span className="text-[#FA9D3E] text-sm md:hidden">01.10.2025</span>
                        </div>
                    </div>
                    <span className="text-[#FA9D3E] text-sm self-start dm:hidden">01.10.2025</span>
                </div>
            </Link>

            <div className="flex justify-center px-[7%]">
                <Link
                        href={`/poleznaya-informasia`}
                        className="mt-[10px] px-[7%] sm:w-full mdd:w-full text-[16px] text-center lg:w-72 bg-customBlue text-white py-3 px-8 rounded-full shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] hover:bg-blue-600 active:scale-95 transition-transform duration-150 ease-in-out"
                    >
                        Все статьи
                </Link>
            </div>
        </div>
  );
};

export default PolInfoTr;