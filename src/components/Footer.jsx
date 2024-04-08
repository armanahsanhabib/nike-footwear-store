import React from 'react';
import { HiArrowRight } from 'react-icons/hi';

const Footer = () => {
    return (
        <footer className='max-w-[1200px] w-[96%] mx-auto'>
            <div className='flex items-start justify-between pt-[80px] text-[#7c8eb2]'>
                <div className='flex items-start justify-between gap-x-[180px]'>
                    <div className='flex flex-col items-start justify-between gap-y-4'>
                        <a href="#">Customer Service</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Store Policies</a>
                    </div>
                    <div className='flex flex-col items-start justify-between gap-y-4'>
                        <a href="#">More about us</a>
                        <a href="#">Join our affiliate program</a>
                        <a href="#">Share your experience</a>
                    </div>
                    <div className='flex flex-col items-start justify-between gap-y-4'>
                        <a href="#">Shipping Rates</a>
                        <a href="#">Return & Exchange</a>
                    </div>
                </div>
                <div>
                    <h2 className='text-xl font-bold mb-6 text-[#36496f]'>Nike Store</h2>
                    <p>12 Water St. Vacouver, BC <br /> V6B 132 United States</p>
                </div>
            </div>
            <div className='flex justify-between items-center py-[50px] text-[#7c8eb2]'>
                <h3>&copy; 2023 Step Style. All rights reserved.</h3>
                <a href="#">Terms and Conditions</a>
                <a href="#">Privacy Policy</a>
                <a href="#" className='flex items-center'>Email <HiArrowRight className='ml-2' /></a>
            </div>
        </footer>
    );
};

export default Footer;