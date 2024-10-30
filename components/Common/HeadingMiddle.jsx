import React from 'react';

const HeadingMiddle = ({heading , description }) => {
    return (
        <div className='mx-auto max-w-[685px]'>
            <h1 className='text-[48px] capitalize text-center font-laila font-bold text-textMain'> {heading} </h1>
            <p className='text-[16px] font-lora text-center leading-[170%] text-textBody mt-3 '> {description} </p>
        </div>
    );
};

export default HeadingMiddle;