import React, { useState } from 'react';
import Posts from '../../Components/Websites/page/Posts';
import CategoryNavbar from '../../Components/Websites/Header/CategoryNavbar';
import SubNavbar from '../../Components/Websites/Header/SubNavbar';

const Landing = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [visibleCount, setVisibleCount] = useState(2);

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 2);
    };

    return (
        <div className='flex flex-col gap-[10px] md:gap-5 xl:gap-7'>
            <SubNavbar />
            <CategoryNavbar
            />
            <div className="min-h-[50vh] container flex gap-[10px] md:gap-5 xl:gap-7">
                <div className="w-full lg:w-2/3">
                    <Posts
                        selectedCategory={selectedCategory}
                        selectedBrand={selectedBrand}
                        setVisibleCount={setVisibleCount}
                        visibleCount={visibleCount}
                    />
                </div>
                <div className="hidden lg:block bg-bgsecondary w-1/3 "></div>
            </div>

            <div className="text-center mb-[5px] md:mb-[10px] lg:mb-[2px] mt-[15px] md:mt-[30px] w-full">
                <div
                    onClick={handleShowMore}
                    className="ring-2 ring-border text-[10px] md:text-[13px] lg:text-[17px] mx-auto h-[40px] md:h-[60px] lg:h-[76px] w-[110px] md:w-[150px] lg:w-[250px] rounded-10px flex justify-center items-center font-semibold text-placeholder cursor-pointer"
                >
                    مشاهدة المزيد ...
                </div>
            </div>
        </div>
    );
};

export default Landing;
