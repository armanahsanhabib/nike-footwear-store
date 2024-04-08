import React from 'react';

const FilterItem = (props) => {
    return (
        <li
            className={`cursor-pointer ${props.selectedFilter === props.filter ? 'text-violet-500 font-bold' : ''}`}
            onClick={() => props.handleFilterClick(props.filter)}
        >
            {props.filter}
        </li>
    );
};

export default FilterItem;