import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import RenderStarRating from './RenderStarRating';

const ProductCard = (props) => {
    return (
        <div
            className='bg-gray-50 rounded-lg shadow-[0_5px_10px_#eee] overflow-hidden cursor-pointer hover:scale-105 transition-all duration-150'
            onClick={props.handleProductClick}
        >
            <div className='relative'>
                <img className='' src={props.src} alt={props.name} />
                <button
                    className='absolute p-5 rounded-full bg-gray-50 right-8 -bottom-5 shadow-md text-xl text-[#c3cad9] hover:text-violet-500 hover:scale-105 transition-all duration-150'
                // onClick={() => console.log(props.name + " Added to cart!")}
                >
                    <FaCartPlus />
                </button>
                <span className='absolute flex items-center left-5 top-5 text-gray-400 gap-x-2'>
                    <RenderStarRating rating={props.rating} />
                </span>
            </div>
            <section className='p-6 mt-3'>
                <h2 className='text-md font-bold mb-3 text-[#435579]'>{props.name}</h2>
                <h3 className='flex justify-between text-md text-gray-400'>
                    <span>{props.category}</span>
                    <span>${props.price}</span>
                </h3>
            </section>
        </div>
    );
};

export default ProductCard;