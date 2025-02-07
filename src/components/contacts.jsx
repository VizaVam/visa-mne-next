'use client'

import { useModal } from "@/components/modalcontext";

const CallTooAction = () => {
    const { openModal } = useModal();

    return (
        <div className="py-40 px-[5%] flex flex-col items-center">
            <h2 className="mdd:text-[20px] text-2xl md:text-3xl lg:text-3xl font-medium mb-4 text-center">Остались вопросы?</h2>
            <h2 className="mdd:text-[16px] text-[20px] lg:text-[20px] font-medium mb-6 text-center">
                {`Оформите заявку, и наши специалисты свяжутся `}
                <span className="hidden lg:block lg:h-0"><br/></span>
                с Вами в ближайшее время.
            </h2>
            <button
                onClick={openModal}
                className="w-max text-[18px] lg:w-auto bg-customBlue hover:bg-blue-500 text-white py-4 px-8 rounded-[2px]">
                Оформить заявку
            </button>
        </div>
    );
};

export default CallTooAction;