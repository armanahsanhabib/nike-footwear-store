import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { IoMdMail } from 'react-icons/io';
import FilterItem from './FilterItem';

const FilterRow = (props) => {
    const filters = ["Newest", "Highest Rated", "Price Low to High", "Price High to Low"];

    return (
        <div className='pb-6 mb-6 border-b-[1px] flex items-center justify-between'>
            <h3 className='text-lg font-bold text-[#435579]'>Mens Shoe and Sneakers</h3>
            <ul className='flex items-center gap-x-8 text-sm text-[#8293b6]'>
                {filters.map((filter, index) => (
                    <FilterItem
                        selectedFilter={props.selectedFilter}
                        handleFilterClick={props.handleFilterClick}
                        filter={filter}
                        key={index} />
                ))}
            </ul>
            <h3
                className='flex items-center gap-x-2 text-[#c2c9d8] text-md cursor-pointer'
                onClick={() => window.alert("Do you want to send mail?")}
            >
                <IoMdMail /> Your Mail <HiArrowRight />
            </h3>
        </div>
    );
};

export default FilterRow;