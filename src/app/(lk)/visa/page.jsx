import Link from "next/link";
import Services from "@/components/services";
import Docs from "@/components/docs";
import Reviews from "@/components/reviews";
import Fag from "@/components/fag";
import Contacts from "@/components/contacts";

export default function VisaPage() {
    return (
        <div>
            <div className={"w-full relative flex justify-between"}>
                <div className="lg:absolute left-0 top-1/2 w-full lg:w-1/2 text-left lg:text-left z-10 px-[7%] flex flex-col gap-24">
                    <nav className="mb-4 flex items-center space-x-2 text-gray-600 gap-2">
                        <Link href="/" className="text-orange-500 hover:underline">Главная</Link>
                        <span><img className={"w-2"} src={"/nav-icon.png"} alt={""} /></span>
                        <span className="font-semibold">Визы</span>
                    </nav>
                    <h1 className="text-7xl lg:text-7xl font-semibold text-black">
                        ВИЗЫ
                    </h1>
                </div>
                <div className="w-full lg:flex items-center -mt-[30%] lg:mt-0 relative z-5">
                    <img
                        src="/visa-banner-new.png"
                        alt="Оформление виз с VisaVam.by – Легко и Доступно"
                        className="relative lg:top-[10%] lg:w-[50%] lg:left-[45%]"
                    />
                </div>
            </div>
            <Services />
            <Docs />
            <Reviews />
            <Fag />
            <Contacts />
        </div>
    );
};