"use client"

import Contacts from "@/components/contacts";
import Link from "next/link";
import {notFound, useParams} from 'next/navigation';
import { countries } from '@/components/serviceson';
import Steps from "@/components/steps";
import Docs from "@/components/docs";

export default function CountryPage({params}) {
    const { country } = useParams();
    const selectedCountry = countries.find(c => c.url === country);

    if (!selectedCountry) {
        return notFound();
    }

    return(
        <div>
            <div className={"w-full relative flex justify-between"}>
                <div
                    className="lg:absolute left-0 top-1/2 w-full lg:w-1/2 text-left lg:text-left z-10 px-[7%] flex flex-col gap-24">
                    <nav className="mb-4 flex items-center space-x-2 text-gray-600 gap-2">
                        <Link href="/" className="text-orange-500 hover:underline">Главная</Link>
                        <span><img className={"w-2"} src={"/nav-icon.png"} alt={""}/></span>
                        <Link href="/visa" className="text-orange-500 hover:underline">Визы</Link>
                        <span><img className={"w-2"} src={"/nav-icon.png"} alt={""}/></span>
                        <Link href="/visa/" className={""}>{selectedCountry.name}</Link>
                    </nav>
                    <h1 className="text-7xl lg:text-7xl font-semibold text-black uppercase">
                        Виза в {selectedCountry.name}
                    </h1>
                </div>
                <div className="w-full lg:flex items-center -mt-[30%] lg:mt-0 relative z-5">
                    <img
                        src="/visa-c.png"
                        alt=""
                        className="relative lg:top-[10%] lg:w-[50%] lg:left-[45%]"
                    />
                </div>
            </div>
            <Steps />
            <div>
                asd
            </div>
            <Docs />
            <Contacts/>
        </div>
    );
}
