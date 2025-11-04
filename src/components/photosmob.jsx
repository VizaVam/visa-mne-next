import React from 'react';
import Image from "next/image";

const PhotosMob = () => {

    return (
        <div className="hidden mdd:!flex w-full mt-[20px] flex-row relative max-h-[400px]">
            <div className='relative w-[50%] aspect-square mr-[10px]'> 
                <Image
                    src="/okompanii1.webp"
                    alt="Оформление виз с VisaVam.by – Легко и Доступно"
                    width={850}
                    height={827}
                    className={`object-cover h-[100%]`}
                    unoptimized
                />
            </div>
            <div className='relative w-[50%] aspect-square max-h-[100%]'>
                <Image
                    src="/okompanii2.webp"
                    alt="Оформление виз с VisaVam.by – Легко и Доступно"
                    width={850}
                    height={827}
                    className={`relative h-[100%] object-cover`}
                    unoptimized
                />
            </div>
        </div>
    );
};

export default PhotosMob;