import { BsFillStarFill, BsStar } from 'react-icons/bs';

const RenderStarRating = (props) => {
    const rating = parseInt(props.rating);
    if (rating >= 1 && rating <= 5) {
        const filledStars = Array(rating).fill(null).map((_, index) => (
            <BsFillStarFill key={`filled-${index}`} className='text-amber-500' />
        ));
        const emptyStars = Array(5 - rating).fill(null).map((_, index) => (
            <BsStar key={`empty-${index}`} className='text-amber-500' />
        ));
        return (
            <div className='flex items-center gap-x-1'>
                {filledStars}
                {emptyStars}
            </div>
        );
    }
    return null;
};

export default RenderStarRating;