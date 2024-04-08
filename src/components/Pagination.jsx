import React from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

const Pagination = (props) => {
    const handlePageClick = (page) => {
        props.setSelectedPage(page);
        const shopNowElement = document.getElementById("shop-now");
        shopNowElement.scrollIntoView({ behavior: "smooth" });
    }

    const PaginationItem = (props) => {
        return (
            <li
                className={`${props.selectedPage === props.page ? 'bg-violet-100 border border-violet-500 text-violet-500' : 'bg-[#fff]'} h-10 w-10 rounded-lg flex items-center justify-center cursor-pointer`}
                onClick={() => handlePageClick(props.page)}
                href="#shop-now"
            >
                {props.page}
            </li>
        );
    }

    const calculateTotalPages = () => {
        return Math.ceil(props.totalItems / props.itemsPerPage);
    }

    const generatePageNumbers = () => {
        const totalPages = calculateTotalPages();
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <PaginationItem
                    key={i}
                    selectedPage={props.selectedPage}
                    page={i}
                />
            );
        }
        return pageNumbers;
    }

    return (
        <div className='mt-8 mx-auto'>
            <ul className='flex items-center justify-center gap-x-2 select-none'>
                <li
                    className={`${props.selectedPage === 1 ? 'invisible' : ''} h-10 w-10 hover:bg-[#fff] rounded-lg flex items-center justify-center cursor-pointer`}
                    onClick={() => props.setSelectedPage(props.selectedPage - 1)}
                >
                    <BiLeftArrowAlt />
                </li>
                {generatePageNumbers()}
                <li
                    className={`${props.selectedPage === calculateTotalPages() ? 'invisible' : ''} h-10 w-10 hover:bg-[#fff] rounded-lg flex items-center justify-center cursor-pointer`}
                    onClick={() => props.setSelectedPage(props.selectedPage + 1)}
                >
                    <BiRightArrowAlt />
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
