import Services from "@/components/services";
import Slider from "@/components/slider";
import Docs from "@/components/docs";
import Reviews from "@/components/reviews";
import Fag from "@/components/fag"
import Contacts from "@/components/contacts";
import Steps from "@/components/steps";

export default function HomePage({onOpenModal}) {
    return (
        <div>
            <section
                className="lg:px-16 lg:mt-[80px] mt-[200px] pb-32 lg:pb-0 z-0 flex flex-col lg:flex-row items-center lg:items-start relative">
                {/* Левая часть */}
                <div className="px-[7%] lg:absolute left-0 top-1/2 w-full lg:w-1/2 text-left lg:text-left z-10">
                    <h1 className="text-3xl lg:text-6xl font-semibold text-black">
                        КОМПАНИЯ<span className="text-6xl">“VISA VAM”</span>
                    </h1>
                    <p
                        className="lg:mt-4 pl-6 text-2xl lg:text-3xl text-[#F86F00] font-caveat transform rotate-[-5deg] opacity-65"
                    >
                        Помогаем превратить мечты в реальность
                    </p>
                </div>

                {/* Правая часть */}
                <div className="w-full lg:flex items-center -mt-[30%] lg:mt-0 relative z-5">
                    {/* Изображение */}
                    <img
                        src="/banner-hero.svg"
                        alt="Оформление виз с VisaVam.by – Легко и Доступно"
                        className="relative lg:top-0 lg:left-[30%] lg:w-[55%]"
                    />

                    <div className="lg:hidden w-full px-[5%] pb-20">
                        <button
                            className="relative w-[100%] bg-customBlue hover:bg-blue-500 text-white py-3 rounded-[2px]">
                            Оформить заявку
                        </button>
                    </div>

                    {/* Список преимуществ */}
                    <ul
                        className="lg:absolute top-1/2 right-[7%] lg:transform lg:-translate-y-1/2 space-y-4 text-left p-4 rounded-md">
                        <li className="flex items-center text-lg">
                            <img src="/check.svg" alt="Преимущество работы с VisaVam.by" className="h-5 w-5 mr-2"/>
                            <p className="font-[500] text-[20px]">
                                Более 10 лет <br/>
                                <span className="text-[16px] text-[#808080]">на рынке</span>
                            </p>
                        </li>
                        <li className="flex items-center text-lg">
                            <img src="/check.svg" alt="Преимущество работы с VisaVam.by" className="h-5 w-5 mr-2"/>
                            <p className="font-[500] text-[20px]">
                                20 000+<br/>
                                <span className="text-[16px] text-[#808080]">успешных кейсов</span>
                            </p>
                        </li>
                        <li className="flex items-center text-lg">
                            <img src="/check.svg" alt="Преимущество работы с VisaVam.by" className="h-5 w-5 mr-2"/>
                            <p className="font-[500] text-[20px]">
                                10 000+<br/>
                                <span className="text-[16px] text-[#808080]">довольных клиентов</span>
                            </p>
                        </li>
                        <li className="flex items-center text-lg font-[500] text-[20px]">
                            <img src="/check.svg" alt="Преимущество работы с VisaVam.by" className="h-5 w-5 mr-2"/>
                            Персональный подход
                        </li>
                    </ul>
                </div>
            </section>
            <Slider/>
            <Services/>
            <Steps />
            <Docs/>
            <Reviews/>
            <Fag/>
            <Contacts/>
        </div>
    );
};