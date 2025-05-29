import React, { useState, useEffect } from 'react';
import Posts from '../../Components/Websites/page/Posts';
import CategoryNavbar from '../../Components/Websites/Header/CategoryNavbar';
import SubNavbar from '../../Components/Websites/Header/SubNavbar';
import axios from 'axios';
import { baseUrl } from '../../Api/Api';
import { motion } from 'framer-motion';
import MainHeader from '../../Components/Websites/Header/MainHeader';
import ButtonAddMobile from '../../Components/Websites/UI/ButtonAddMobile';

const Landing = () => {
    const [ads, setAds] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [visibleCount, setVisibleCount] = useState(10);
    const [sponsorImages, setSponsorImages] = useState(null);
    const [loading, setLoading] = useState(false)

    const fetchAds = async (query = '', location = 'جميع المناطق') => {
        setLoading(true)
        try {
            const response = await axios.get(`${baseUrl}/ad`, {
                params: {
                    search: query,
                    category: selectedCategory === "used" ? undefined : selectedCategory,
                    location: location !== 'جميع المناطق' ? location : undefined,
                },
                withCredentials: true,
            });
            setAds(response.data.ads);
            setVisibleCount(10);
        } catch (err) {
            console.error('Error fetching ads:', err);
        }
        finally {
            setLoading(false)
        }
    };

    const fetchSponsorImages = async () => {
        try {
            const response = await axios.get(`${baseUrl}/img/sponsor-image`);
            if (response.data && response.data.imageUrl) {
                setSponsorImages(response.data);
            } else {
                setSponsorImages(null);
            }
        } catch (err) {
            console.error('Error fetching sponsor images:', err);
        }
    };

    useEffect(() => {
        fetchAds(searchQuery, selectedLocation);
        fetchSponsorImages();
    }, [searchQuery, selectedCategory, selectedBrand, selectedLocation]);

    const handleSearch = (query) => setSearchQuery(query);
    const handleLocationChange = (loc) => setSelectedLocation(loc);
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setSelectedBrand('');
    };
    const handleBrandChange = (brand) => {
        setSelectedBrand(brand);
    };
    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 10);
    };

    return (
        <div className='min-h-screen flex flex-col gap-[10px] md:gap-5 xl:gap-7 md:pb-0 pb-[30px]'>
            <MainHeader
                onSearch={handleSearch}
            />
            <div className='mt-[70px] md:mt-[80px] lg:mt-[100px] mb-[38px] md:mb-0'>
                <SubNavbar onSearch={handleSearch} onLocationChange={handleLocationChange} />
                <CategoryNavbar onCategoryChange={handleCategoryChange} onBrandChange={handleBrandChange} />
                <div className="min-h-[100vh] container flex gap-[10px] md:gap-5 xl:gap-7">
                    <div className="w-full md:w-[1138px]">
                        <Posts
                            selectedCategory={selectedCategory}
                            selectedBrand={selectedBrand}
                            visibleCount={visibleCount}
                            ads={ads}
                            sponsorImages={sponsorImages}
                            loading={loading}
                        />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="hidden lg:block bg-bgsecondary w-[455px] overflow-y-auto"
                        style={{
                            backgroundImage: sponsorImages ? `url(${sponsorImages.imageUrl})` : 'none',
                            backgroundRepeat: 'repeat-y',
                            backgroundSize: 'contain',
                        }}
                    />
                </div>

                {visibleCount < ads.length && (
                    <div className="text-center mb-[20px]  md:mb-[10px] lg:mb-[2px] mt-[15px] md:mt-[30px] w-full">
                        <div
                            onClick={handleShowMore}
                            className="border md:border-2 border-border text-[10px] md:text-[13px] lg:text-[17px] mx-auto h-[40px] md:h-[60px] lg:h-[76px] w-[110px] md:w-[150px] lg:w-[250px] rounded-10px flex justify-center items-center font-semibold text-placeholder cursor-pointer"
                        >
                            مشاهدة المزيد ...
                        </div>
                    </div>
                )}
            </div>
            <ButtonAddMobile />
        </div>
    );
};

export default Landing;
