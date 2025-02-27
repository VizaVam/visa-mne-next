"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`fixed bottom-14 right-14 p-3 text-gray-600 transition-opacity ${
                isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
            <Image src={"/scroll.svg"} alt={"Scroll to Top"} width={50} height={50} />
        </button>
    );
}
