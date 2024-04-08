import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const LeftMenu = () => {
    const [categoriesOpen, setCategoriesOpen] = useState(true);
    const [priceOpen, setPriceOpen] = useState(true);
    const [colorsOpen, setColorsOpen] = useState(true);
    const [sizeOpen, setSizeOpen] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedPriceRange, setSelectedPriceRange] = useState(null);
    const [activeColor, setActiveColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    const onMenuClick = (menu) => {
        switch (menu) {
            case 'categories':
                setCategoriesOpen(!categoriesOpen);
                break;
            case 'price':
                setPriceOpen(!priceOpen);
                break;
            case 'colors':
                setColorsOpen(!colorsOpen);
                break;
            case 'size':
                setSizeOpen(!sizeOpen);
                break;
            default:
                break;
        }
    };

    const resetFilters = () => {
        setSelectedCategory(null);
        setSelectedPriceRange(null);
        setActiveColor(null);
        setSelectedSize(null);
        const shopNowElement = document.getElementById("shop-now");
        shopNowElement.scrollIntoView({ behavior: "smooth" });
    }

    // Price Range Select item
    const RoundCheckbox = (props) => {
        const onPriceRangeSelect = (label) => {
            setSelectedPriceRange(label)
        }

        return (
            <label
                className="flex items-center gap-x-2 cursor-pointer text-sm"
                onClick={() => onPriceRangeSelect(props.label)}
            >
                <span className={`inline-block w-4 h-4 rounded-full border border-gray-300 ${selectedPriceRange === props.label ? 'bg-violet-500' : 'bg-white'}`}></span>
                <span className={`${selectedPriceRange === props.label ? 'font-bold text-violet-600' : ''}`}>{props.label}</span>
            </label>
        );
    };

    // Categories Item List
    const CategoriesItem = (props) => {
        const onCategoryClick = (category) => {
            setSelectedCategory(category);
        }

        return (
            <li
                className={`flex justify-between cursor-pointer ${selectedCategory === props.category ? 'font-bold text-violet-500' : ''}`}
                onClick={() => onCategoryClick(props.category)}
            >
                <h3 className="mr-3">{props.category}</h3>
                <h3>{props.number}</h3>
            </li>
        );
    };

    // Colors item list
    const ColorsItem = (props) => {
        const onColorClick = (color) => {
            setActiveColor(color);
        }

        return (
            <li
                className={`h-6 w-6 rounded-full cursor-pointer ${activeColor === props.color ? 'outline outline-blue-300' : ''}`}
                style={{ background: `#${props.color}` }}
                onClick={() => onColorClick(props.color)}
            ></li>
        );
    };

    // size selecting squares
    const SizeSquare = (props) => {
        const onSizeClick = (size) => {
            setSelectedSize(size);
        };

        return (
            <td
                className={`w-1/4 hover:bg-[#fff] text-center py-4 text-sm border-[2px] border-gray-300 cursor-pointer 
                ${selectedSize === props.size ? 'bg-[#ffffff] font-bold text-violet-500' : ''}`}
                onClick={() => onSizeClick(props.size)}
            >
                {props.size}
            </td>
        );
    };

    return (
        <div className="flex flex-col gap-y-6">
            <section>
                <h3
                    className="text-[#435579] font-bold flex justify-between items-center cursor-default"
                    onClick={() => onMenuClick('categories')}
                >
                    Categories
                    {categoriesOpen ? (
                        <FiChevronDown className="text-gray-400" />
                    ) : (
                        <FiChevronUp className="text-gray-400" />
                    )}
                </h3>
                {categoriesOpen && (
                    <ul className="mt-4 flex flex-col gap-y-3 text-sm text-gray-500 transition-all duration-300">
                        <CategoriesItem category="Lifestyle" number="367" />
                        <CategoriesItem category="Running" number="76" />
                        <CategoriesItem category="Basketball" number="65" />
                        <CategoriesItem category="Football" number="21" />
                        <CategoriesItem category="Soccer" number="12" />
                        <CategoriesItem category="Training & Gym" number="54" />
                    </ul>
                )}
            </section>
            <section>
                <h3
                    className="text-[#435579] font-bold flex justify-between items-center cursor-default"
                    onClick={() => onMenuClick('price')}
                >
                    Price
                    {priceOpen ? (
                        <FiChevronDown className="text-gray-400" />
                    ) : (
                        <FiChevronUp className="text-gray-400" />
                    )}
                </h3>
                {priceOpen && (
                    <ul className="text-gray-500 grid grid-cols-2 mt-4 gap-y-3">
                        <li><RoundCheckbox label="Under 50" /></li>
                        <li><RoundCheckbox label="51 to 100" /></li>
                        <li><RoundCheckbox label="101 to 150" /></li>
                        <li><RoundCheckbox label="151 to 200" /></li>
                        <li><RoundCheckbox label="201 to 250" /></li>
                        <li><RoundCheckbox label="Over 250" /></li>
                    </ul>
                )}
            </section>
            <section>
                <h3
                    className="text-[#435579] font-bold flex justify-between items-center cursor-default"
                    onClick={() => onMenuClick('colors')}
                >
                    Colors
                    {colorsOpen ? (
                        <FiChevronDown className="text-gray-400" />
                    ) : (
                        <FiChevronUp className="text-gray-400" />
                    )}
                </h3>
                {colorsOpen && (
                    <ul className="grid grid-cols-6 mt-4 gap-y-3">
                        <ColorsItem color="ffffff" />
                        <ColorsItem color="e5e5e5" />
                        <ColorsItem color="ebe1be" />
                        <ColorsItem color="ffcb33" />
                        <ColorsItem color="f36a26" />
                        <ColorsItem color="29cc39" />
                        <ColorsItem color="7c8aa6" />
                        <ColorsItem color="d3c8b4" />
                        <ColorsItem color="e62e7b" />
                        <ColorsItem color="e62e2e" />
                        <ColorsItem color="8833ff" />
                        <ColorsItem color="cc7429" />
                    </ul>
                )}
            </section>
            <section>
                <h3
                    className="text-[#435579] font-bold flex justify-between items-center cursor-default"
                    onClick={() => onMenuClick('size')}
                >
                    Size
                    {sizeOpen ? (
                        <FiChevronDown className="text-gray-400" />
                    ) : (
                        <FiChevronUp className="text-gray-400" />
                    )}
                </h3>
                {sizeOpen && (
                    <table className="text-gray-500 mt-4 w-full border-collapse rounded-lg border-2 outline outline-gray-300 overflow-hidden">
                        <tbody>
                            <tr>
                                <SizeSquare size="4" />
                                <SizeSquare size="4.5" />
                                <SizeSquare size="5" />
                                <SizeSquare size="5.5" />
                            </tr>
                            <tr>
                                <SizeSquare size="6" />
                                <SizeSquare size="6.5" />
                                <SizeSquare size="7" />
                                <SizeSquare size="7.5" />
                            </tr>
                            <tr>
                                <SizeSquare size="8" />
                                <SizeSquare size="8.5" />
                                <SizeSquare size="9" />
                                <SizeSquare size="9.5" />
                            </tr>
                            <tr>
                                <SizeSquare size="10" />
                                <SizeSquare size="10.5" />
                                <SizeSquare size="11" />
                                <SizeSquare size="11.5" />
                            </tr>
                            <tr>
                                <SizeSquare size="12" />
                                <SizeSquare size="12.5" />
                                <SizeSquare size="13" />
                                <SizeSquare size="13.5" />
                            </tr>
                            <tr>
                                <SizeSquare size="14" />
                                <SizeSquare size="14.5" />
                                <SizeSquare size="15" />
                                <SizeSquare size="15.5" />
                            </tr>
                            <tr>
                                <SizeSquare size="16" />
                                <SizeSquare size="3.5Y" />
                                <SizeSquare size="4Y" />
                                <SizeSquare size="5Y" />
                            </tr>
                            <tr>
                                <SizeSquare size="6Y" />
                                <SizeSquare size="6.5Y" />
                                <SizeSquare size="7Y" />
                            </tr>
                        </tbody>
                    </table>
                )}
            </section>
            <section>
                <button
                    className='w-full rounded-lg text-center text-gray-500 hover:text-violet-500 border-[3px] border-gray-300 hover:border-violet-500 font-bold py-2'
                    onClick={() => resetFilters()}
                >
                    Reset all filter
                </button>
            </section>
        </div>
    );
};

export default LeftMenu;
