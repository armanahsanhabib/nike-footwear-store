import React from 'react';
import CoverPic from '../assets/images/cover-pic.png';
import CurvyBg from '../assets/images/curvy.svg';

const HeroMain = () => {
    return (
        <div
            className='relative h-[380px] flex items-center justify-center'
            style={{
                backgroundImage: `url(${CurvyBg}), url(${CoverPic})`,
                backgroundSize: "105%, cover",
                backgroundPosition: "bottom, center",
                backgroundRepeat: "no-repeat, no-repeat"
            }}
        >
            <span className='text-6xl font-bold drop-shadow-xl text-gray-50'>Men's Shoes</span>
            <a
                className='absolute -bottom-5 left-[50%] translate-x-[-50%] drop-shadow text-md font-semibold bg-gray-50 rounded-full px-6 py-3 text-[#435579]'
                href='#shop-now'
            >
                Shop Now
            </a>
            <span id='shop-now' className='absolute bottom-[20px]'></span>
        </div>
    );
};

export default HeroMain;
