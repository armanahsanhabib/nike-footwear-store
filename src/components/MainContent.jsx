import React from 'react';

const MainContent = (props) => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-8'>
                {props.productCards}
            </div>
            {props.pagination}
        </div>
    );
};

export default MainContent;
