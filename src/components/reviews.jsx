'use client'

import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { CarouselButton } from "./icons";
import Image from "next/image";

const reviews = [
    { id: 1, name: "Юлия Мазур", text: "Благодарю менеджеров Анну и Диану! Быстро, четко, профессионально! Помогли составить маршрутный лист, оперативно записали, виза получена своевременно.", image: "/1м.png" },
    { id: 2, name: "Валентина Киричок", text: "Добрый день. Обратились в Вашу фирму за оформлением визы в Испанию. Отношение и обслуживание было замечательное. Все документы были собраны в срок. Визу получила. Огромное Вам спасибо.", image: "/2м.png" },
    { id: 3, name: "Леонид Чайковский", text: "Спасибо за высокий профессионализм и внимательное отношение к клиентам, особенно хотим поблагодарить менеджера Татьяну, которая сопровождала нас на всех этапах!", image: "/3м.png" },
    { id: 4, name: "Юрий Миксельбурский", text: "Открыли Итальянскую визу на 2 года мне и супруге! Благодарю менеджера Екатерину за подборку вариантов, и Татьяну за чуткость в документах.", image: "/4м.png" },
    { id: 5, name: "Федор А.", text: "Большое спасибо Анне и Диане за оформление визы! Было всё сделано четко и правильно! Буду рекомендовать всем вашу компанию!", image: "/5м_1.png" },
    { id: 6, name: "Николай Подгол", text: "Хочу поблагодарить Анну и Диану за проделанную работу, сервис на высоте, все документы были сделаны быстро визу сделали за короткий срок, Советую всем обращаться в эту фирму.", image: "/r-2.png" },
];

const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(1);
    const gap = 16;

    useEffect(() => {
        const handleResize = () => {
            setVisibleCards(Math.floor(window.innerWidth >= 1024 ? 3.5 : 1));
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = Math.max(reviews.length - visibleCards, 0);

    const nextSlide = () => setCurrentIndex((prev) => Math.min(prev + visibleCards, maxIndex));
    const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - visibleCards, 0));

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex)),
        onSwipedRight: () => setCurrentIndex((prev) => Math.max(prev - 1, 0)),
        trackMouse: true,
    });

    return (
        <div className="pt-16 mdd:pt-10 px-[7%]" {...swipeHandlers}>
            <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-medium mb-8 lg:mb-16">Отзывы наших клиентов</h2>
            <div className="relative overflow-hidden">
                <div
                    className="flex gap-4 transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(calc(-${currentIndex * (100 / visibleCards)}% - ${currentIndex * gap}px))`,
                    }}
                >
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="w-auto mdd:w-[100%] xl:w-[24.2%] lg:w-[32%] sm:w-[49%] flex-shrink-0 bg-[#FAFAFA] border-[1px] border-[#ECECEC] rounded-[4px] p-6"
                        >
                            <p className="text-[18px] mdd:text-[16px] font-medium">{review.name}</p>
                            <div className="flex mb-4">
                                <span className="text-yellow-400 text-3xl mdd:text-2xl">★★★★★</span>
                            </div>
                            <p className="text-[16px] mdd:text-[14px] font-medium text-gray-600">{review.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center items-center mt-8 space-x-4">
                <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    aria-label="Назад"
                    className={`text-gray-600 hover:text-orange-500 transition-colors duration-300 ${currentIndex === 0 && "opacity-50 cursor-not-allowed"}`}
                >
                    <CarouselButton color={currentIndex > 0 ? "#F86F00" : "#595959"} />
                </button>
                <button
                    onClick={nextSlide}
                    disabled={currentIndex >= maxIndex}
                    aria-label="Вперед"
                    className={`text-orange-500 hover:text-orange-600 transition-colors duration-300 ${currentIndex >= maxIndex && "opacity-50 cursor-not-allowed"}`}
                >
                    <CarouselButton isRight={true} color={currentIndex < maxIndex ? "#F86F00" : "#595959"} />
                </button>
            </div>
        </div>
    );
};

export default Reviews;
