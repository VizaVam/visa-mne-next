import { useEffect, useState } from "react";
import Image from "next/image";

export default function ScrollToTop({ showFloatingButton, isFloatingMenuOpen, isMenuOpen }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 750);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`fixed 
                ${isFloatingMenuOpen ? "bottom-[420px]" : "bottom-[120px]"}  
                right-7 sm:bottom-6 sm:right-6 
                text-gray-600 transition-opacity cursor-pointer z-50 
                ${isVisible && !isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
        >
            <Image src={"/scroll.svg"} alt={"Scroll to Top"} width={50} height={50} />
        </div>
    );
}
