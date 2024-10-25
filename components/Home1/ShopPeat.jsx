import React from 'react';
import HeadingLeft from '../Common/HeadingLeft';
import Image from 'next/image';


const ShopPeat = () => {
    return (
        <div className='max-w-[1320px] mx-auto'>
            <HeadingLeft heading='Shop by Peat' />
            <div className="flex flex-col max-w-[182px]">
                <div className=" ">
                    <Image
                        className="h-[148px] w-[182px] bg-red-300 object-cover rounded-full"
                        src="/home1/dog4.svg"
                        width={182}
                        height={148}
                        alt="dog"
                    />
                </div>
                <h1 className="font-laila text-[28px] font-bold text-center capitalize pt-6 ">
                    Dog
                </h1>
            </div>
        </div>
    );
};

export default ShopPeat;