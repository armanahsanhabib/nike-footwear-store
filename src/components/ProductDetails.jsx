import React, { useState } from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { FaCartPlus } from 'react-icons/fa';
import RenderStarRating from './RenderStarRating';

const ProductDetails = (props) => {
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState(null);

    const sizes = ["3.5Y", "4Y", "4.5Y", "5Y", "5.5Y", "6Y", "6.5Y", "7Y"];
    const SizeItem = (props) => {
        return (
            <div
                className={`flex items-center justify-center w-[60px] cursor-pointer text-sm h-[50px] bg-[#fff] rounded-lg ${size === props.size ? "bg-blue-100 text-blue-600 font-semibold" : ""}`}
                onClick={() => setSize(props.size)}
            >{props.size}</div>
        );
    }
    return (
        <div className='max-w-[1200px] w-[96%] mx-auto mt-20'>
            <div className='mb-8'>
                <a
                    href='#shop-now'
                    className='flex items-center gap-x-1 hover:gap-x-2 transition-all cursor-pointer text-gray-500 hover:text-[#8932ff]'
                    onClick={() => props.handleBackToProducts()}
                >
                    <BiLeftArrowAlt /> Back to Home
                </a>
            </div>
            <div className='flex items-start gap-x-10'>
                <div className='max-w-[50%] overflow-hidden'>
                    <img className='hover:scale-[115%] transition-all duration-300 cursor-zoom-in' src={`./images/${props.product.image}`} alt={props.product.name} />
                </div>
                <div className='text-[#4b5d80]'>
                    <RenderStarRating rating={props.product.rating} />
                    <h1 className='mt-2 mb-1 text-3xl font-bold'>{props.product.name}</h1>
                    <h3 className='text-lg mb-3'>Category: {props.product.category}</h3>
                    <h3 className='text-2xl font-semibold'>Price: $ {parseInt(props.product.price).toFixed(2)}</h3>
                    <div className='mt-5'>
                        <h2 className='mb-3 text font-semibold text-[#7885a1]'>Select Size:</h2>
                        <div className='w-max grid grid-cols-4 gap-3 items-center'>
                            {sizes.map((size, index) => (
                                <SizeItem key={index} size={size} />
                            ))}
                        </div>
                    </div>
                    <div className='mt-5'>
                        <h2 className='mb-3 text font-semibold text-[#7885a1]'>Select Quantity:</h2>
                        <div className='flex items-center text-sm font-semibold'>
                            <span
                                className='h-[45px] text-lg flex items-center px-6 rounded-s border border-gray-300 bg-[#fff] hover:bg-gray-50 select-none cursor-pointer'
                                onClick={() => (quantity > 1) ? setQuantity(quantity - 1) : null}
                            >-</span>
                            <input
                                className='h-[45px] bg-[#fff] text-center w-[70px] border-t border-b border-gray-300 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                                type="number"
                                name="qty"
                                id="qty"
                                value={quantity}
                            />
                            <span
                                className='h-[45px] text-lg flex items-center px-6 rounded-e border border-gray-300 bg-[#fff] hover:bg-gray-50 select-none cursor-pointer'
                                onClick={() => setQuantity(quantity + 1)}
                            >+</span>
                        </div>
                        <button className='mt-8 bg-[#8932ff] hover:bg-[#5e00dd] transition hover:shadow-lg text-gray-50 font-bold rounded-full px-6 py-3 flex items-center gap-x-2'>
                            <FaCartPlus /> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProductDetails;
