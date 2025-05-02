import React from 'react';
import { CgClose } from 'react-icons/cg';
import searchIcon from '../../../assets/HeadersIcon/1.svg'; // adjust path
import { IoSearchOutline } from 'react-icons/io5';

const SearchBox = ({
    searchQuery,
    setSearchQuery,
    searchHistory,
    showHistory,
    setShowHistory,
    onSearch,
    onDeleteHistoryItem,
    classNameBox,
    className,
    classNameIcon
    , iconSearch
}) => {

    const handleSearch = () => {
        if (searchQuery.trim() !== '') {
            onSearch(searchQuery);
        } else {
            onSearch('');
        }
        setShowHistory(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSearch();
    };

    return (
        <div className={`${classNameBox}`}>
            <input
                type='search'
                className={`${className}`}
                placeholder='ابحث عن أي عقار أو سلعة أو خدمة في سوريا...'
                value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowHistory(true);
                }}
                onKeyPress={handleKeyPress}
                onFocus={() => setShowHistory(true)}
                onBlur={() => setTimeout(() => setShowHistory(false), 200)}
            />
            <button onClick={handleSearch}>
                {iconSearch ?
                    (
                        <IoSearchOutline className='bg-white text-primary h-[25px] md:h-[35px]  w-[30px] md:w-[35px] lg:hidden absolute left-[1px] top-[4px] py-1 md:p-2  cursor-pointer' />

                    )
                    : (
                        <img
                            src={searchIcon}
                            alt=''
                            className={`${classNameIcon}`}
                        />)}
            </button>

            {showHistory && searchHistory.length > 0 && (
                <div className="absolute w-full bg-white lg:border border-border rounded-md lg:rounded-10px mt-1 z-10 max-h-[200px] custom-scrollbar overflow-y-auto">
                    {searchHistory.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between last:border-0 border-b-2 p-2 hover:bg-gray-200 cursor-pointer text-[12px] md:text-[14px] lg:text-[17px]"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => {
                                setSearchQuery(item);
                                onSearch(item);
                                setShowHistory(false);
                            }}
                        >
                            <span>{item}</span>
                            <CgClose
                                className='text-placeholder text-[23px] md:text-[30px] font-bold'
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onDeleteHistoryItem(item);
                                }}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBox;
