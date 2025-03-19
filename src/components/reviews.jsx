'use client'

import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { CarouselButton } from "./icons";
import Image from "next/image";

const reviews = [
    { id: 1, name: "Владимир Зайцев", text: "Выражаю искреннюю признательность за консультации и оформление документов для подачи в визовый центр Польши. \n" +
            "Р.S. Польская гостевая виза получена на срок 1 год при отсутствии визовой истории как таковой.", image: "/1м.png" },
    { id: 2, name: "Игорь Барташов", text: "Сделали по моей готовой записи документы и переводы за 2 часа. Обратился, приехал в офис, сделали и поехал сразу подаваться! Профессионализм! На подаче в немецком посольстве не задали ни одного вопроса!", image: "/2м.png" },
    { id: 3, name: "Дмитрий Вольский", text: "Визу получил, 3 месяца. Думал вообще неделя будет, никогда не открывал визы. \n" +
            "Спасибо!", image: "/3м.png" },
    { id: 4, name: "Аганова Марина", text: "Благодарю менеджеров за профессиональную консультацию по моей нестандартной ситуации. Приехала в Литву в срок, не подвели.", image: "/4м.png" },
    { id: 5, name: "Ирина Васкина", text: "Открыли польскую туристическую визу на 2 года!! обращаюсь в третий раз в компанию. И сестра моя там делала испанскую визу. Мужу сделали рабочую. Искренне благодарю директора, знакомы лично уже, менеджеров, рекомендую всем своим знакомым.", image: "/5м_1.png" },
    { id: 6, name: "Юрий Миксельбурский", text: "Открыли Итальянскую визу на 2 года мне и супруге! Благодарю менеджера Екатерину за подборку вариантов, и Татьяну за чуткость в документах.", image: "/r-2.png" },
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
        <div className="pt-20 px-[7%]" {...swipeHandlers}>
            <h2 className="mdd:text-2xl sm:text-3xl lg:text-4xl font-medium mb-8 lg:mb-16">Отзывы наших клиентов</h2>
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
                            className="w-auto mdd:w-[100%] xl:w-[24.2%] lg:w-[32%] sm:w-[49%] flex-shrink-0 bg-[#FAFAFA] border-[1px] border-[#ECECEC] rounded-[4px] p-6 text-center"
                        >
                            <Image width={1000} height={800}  src={review.image} alt={review.name} className="w-36 h-36 mx-auto rounded-full mb-4 object-cover"/>
                            <h3 className="text-xl font-medium mb-2">{review.name}</h3>
                            <p className="text-[16px] text-gray-600">{review.text}</p>
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
