import React, { useState } from 'react';
import { MdOutlineClose, MdShoppingCartCheckout } from 'react-icons/md';

const MyCart = () => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className='fixed right-0 top-[69.1px] p-5 h-[calc(100vh-69.1px)] bg-gray-50 w-[450px] text-[#4b5d80] shadow-xl flex flex-col justify-between h-full'>
            <div>
                <div className='text-xl border-b pb-2 mb-2'>
                    <h2 className='font-bold'>Cart Details</h2>
                </div>
                <div className='flex gap-x-2'>
                    <div
                        className='w-[80px] h-[80px]'
                        style={{
                            backgroundImage: `url("http://localhost:5173/images/shoe-image%20(1).jpg")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                        }}
                    ></div>
                    <div>
                        <h1 className='text-lg font-semibold'>Nike Shoe: Model 6465</h1>
                        <h2>Price: $62.00</h2>
                        <div className='flex items-center text-sm font-semibold'>
                            <span
                                className='flex items-center px-3 rounded-s border border-gray-300 bg-[#fff] hover:bg-gray-50 select-none cursor-pointer'
                                onClick={() => (quantity > 1) ? setQuantity(quantity - 1) : null}
                            >-</span>
                            <input
                                className='bg-[#fff] text-center w-[50px] border-t border-b border-gray-300 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                                type="number"
                                name="qty"
                                id="qty"
                                value={quantity}
                            />
                            <span
                                className='flex items-center px-3 rounded-e border border-gray-300 bg-[#fff] hover:bg-gray-50 select-none cursor-pointer'
                                onClick={() => setQuantity(quantity + 1)}
                            >+</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-lg'>
                <div
                    className="cursor-pointer rounded-lg font-bold py-2 bg-[#8932ff] hover:bg-[#5e00dd] transition text-gray-50 flex justify-center mb-3 items-center gap-x-2"
                >
                    Checkout <MdShoppingCartCheckout />
                </div>
                <div
                    className="cursor-pointer transition rounded-lg text-rose-500 bg-rose-100 hover:bg-rose-200 py-2 flex justify-center mb-3 items-center gap-x-2"
                >
                    Close <MdOutlineClose />
                </div>
            </div>
        </div>
    );
};

export default MyCart;