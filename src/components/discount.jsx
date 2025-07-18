import React from 'react';

const Discount = () => {
    const currentDate = new Date();
    const discountEndDate = new Date('2025-07-26T00:00:00+05:00');

    if (currentDate >= discountEndDate) {
        return null; // Hide the component after the discount end date
    }

    return (
        <div className="sm:hidden -mt-20 mb-5 px-[7%] bg-orange-500 text-lg font-medium text-white py-1.5 text-center">
            <p>
                <span className="font-bold text-blue-950 underline">АКЦИЯ до 25.07.2025!</span>
                <br />
                Испанская безличная виза -{' '}
                <span className="font-bold text-blue-950 underline">1600 BYN</span>{' '}
                (<span className="line-through">1850 BYN</span>)
            </p>
        </div>
    );
};

export default Discount;