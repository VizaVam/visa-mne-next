"use client"

import {useEffect, useState} from "react";
import {useSwipeable} from "react-swipeable";
import {CarouselButton} from "./icons";
import Image from "next/image";

const slides = [
    {
        id: 2,
        image: "/1.jpg",
        text: 'Хочешь в Испанию? Испанская виза с <span class="underline">безличной подачей в Минске</span>'
    },
    {
        id: 3,
        image: "/444.png",
        text: "5% скидка при повторном обращении",
    },
    {
        id: 4,
        image: "/2.png",
        text: "11% семье из 3-х человек",
    },
    {
        id: 5,
        image: "/33.png",
        text: "13% скидка для семьи от 4-х человек",
    },
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLgScreen, setIsLgScreen] = useState(false);

    // Обновление состояния для экранов
    useEffect(() => {
        const handleResize = () => setIsLgScreen(window.innerWidth >= 1024);
        handleResize(); // Проверяем при загрузке
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const nextSlide = () => {
        if (currentIndex < slides.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: nextSlide,
        onSwipedRight: prevSlide,
        trackMouse: true,
    });

    return (
        <div className="relative w-full mx-auto overflow-hidden pl-[7%] sm:px-[7%]" {...swipeHandlers}>
            {/* Слайд */}
            <div className="relative lg:h-96 md:h-60 sm:h-52 mdd:h-52 w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-700 rounded-lg shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)]"
                    style={{
                        transform: `translateX(calc(-${currentIndex * (isLgScreen ? 100 : 85)}% - ${
                            currentIndex * 8
                        }px))`,
                    }}
                >
                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            className={`${
                                isLgScreen ? "w-[100%]" : "w-[85%]"
                            } sm:min-w-full lg:h-96 md:h-60 sm:h-52 mdd:h-52 flex-shrink-0 relative mr-2 rounded-lg shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)]`}
                        >
                            <Image
                                src={slide.image}
                                alt={`Slide ${slide.id}`}
                                width={800}
                                height={600}
                                loading="lazy"
                                className={`w-full lg:h-96 md:h-60 sm:h-52 mdd:h-52 object-cover rounded-lg`}
                                style={{
                                    objectPosition: slide.id === 1 ? "50% 15%" :
                                        slide.id === 2 ? "50% 71%" :
                                            slide.id === 4 ? "50% 73%" :
                                                slide.id === 5 ? "50% 43%" : "center",
                                }}
                            />
                            <div
                                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
                                <h4 className="text-white text-center mdd:text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold"
                                    dangerouslySetInnerHTML={{__html: slide.text}}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Кнопки переключения */}
            <div className="flex justify-center items-center mt-4 space-x-4">
                <button
                    onClick={prevSlide}
                    className={`text-4xl transition-all duration-300 ${
                        currentIndex > 0 ? "text-[#F86F00] text-5xl" : "text-[#595959]"
                    }`}
                    aria-label="Назад"
                >
                    <CarouselButton color={currentIndex > 0 ? "#F86F00" : "#595959"}/>
                </button>
                <button
                    onClick={nextSlide}
                    className={`text-4xl transition-all duration-300 ${
                        currentIndex < slides.length - 1 ? "text-[#F86F00] text-5xl" : "text-[#595959]"
                    }`}
                    aria-label="Вперед"
                >
                    <CarouselButton
                        isRight={true}
                        color={currentIndex < slides.length - 1 ? "#F86F00" : "#595959"}
                    />
                </button>
            </div>
        </div>
    );
};

export default Slider;
