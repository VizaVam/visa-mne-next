'use client'

import { useModal } from "@/components/modalcontext";

const CallTooAction = () => {
    const { openModal } = useModal();

    return (
        <div className="py-40 px-[5%] flex flex-col items-center">
            <h2 className="mdd:text-xl sm:text-2xl md:text-3xl lg:text-3xl font-medium mb-4 text-center">Остались вопросы?</h2>
            <h2 className="mdd:text-[16px] sm:text-[20px] md:text-[20px] lg:text-[20px] font-medium mb-6 text-center">
                {`Оформите заявку, и наши специалисты свяжутся `}
                <span className="hidden lg:block lg:h-0"><br/></span>
                с Вами в ближайшее время.
            </h2>
            <button
                onClick={openModal}
                className="w-max text-[16px] lg:w-auto bg-customBlue hover:bg-blue-500 text-white py-4 px-8 rounded-[2px] active:scale-95 transition-transform duration-150 ease-in-out">
                Оформить заявку
            </button>
        </div>
    );
};

export default CallTooAction;