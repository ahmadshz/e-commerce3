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
  const [firstAds, setFirstAds] = useState([]); // الصفحة الأولى
  const [moreAds, setMoreAds] = useState([]);   // الإعلانات الإضافية
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [sponsorImages, setSponsorImages] = useState(null);
  const [loading, setLoading] = useState(false);       // تحميل الصفحة الأولى
  const [loadingMore, setLoadingMore] = useState(false); // تحميل المزيد
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalAds, setTotalAds] = useState(0);

  // جلب الإعلانات حسب الصفحة
  const fetchAds = async (pageNumber = 1) => {
    if (pageNumber === 1) {
      setLoading(true);
    } else {
      setLoadingMore(true);
    }

    try {
      const response = await axios.get(`${baseUrl}/ad`, {
        params: {
          search: searchQuery,
          category: selectedCategory === "used" ? undefined : selectedCategory,
          location: selectedLocation !== 'جميع المناطق' ? selectedLocation : undefined,
          page: pageNumber,
          limit: 10
        },
        withCredentials: true,
      });

      const newAds = response.data.ads || [];
      setTotalAds(response.data.total || 0);

      if (pageNumber === 1) {
        setFirstAds(newAds);
        setMoreAds([]);
      } else {
        setMoreAds(prev => [...prev, ...newAds]);
      }

      setHasMore(newAds.length === 10);

    } catch (err) {
      console.error('Error fetching ads:', err);
    } finally {
      if (pageNumber === 1) {
        setLoading(false);
      } else {
        setLoadingMore(false);
      }
    }
  };

  // جلب صور الراعي (sponsor)
  const fetchSponsorImages = async () => {
    try {
      const response = await axios.get(`${baseUrl}/img/sponsor-image`);
      if (response.data?.imageUrl) {
        setSponsorImages(response.data);
      } else {
        setSponsorImages(null);
      }
    } catch (err) {
      console.error('Error fetching sponsor images:', err);
    }
  };

  // عند تغيير الفلاتر، نرجع للصفحة الأولى ونحمل البيانات
  useEffect(() => {
    setPage(1);
    setHasMore(true);
    fetchSponsorImages();
  }, [searchQuery, selectedCategory, selectedBrand, selectedLocation]);

  // عند تغيير الصفحة، نجيب الإعلانات (الصفحة 1 أو المزيد)
  useEffect(() => {
    fetchAds(page);
  }, [page]);

  const loadMore = () => {
    if (!hasMore || loading || loadingMore) return;
    setPage(prev => prev + 1);
  };

  const handleSearch = (query) => setSearchQuery(query);
  const handleLocationChange = (loc) => setSelectedLocation(loc);
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedBrand('');
  };
  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  const [isAtBottom, setIsAtBottom] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.body.offsetHeight - 50;
      setIsAtBottom(scrollPosition >= threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const allAds = [...firstAds, ...moreAds]; // دمج الإعلانات

  return (
    <div className='min-h-screen flex flex-col gap-[10px] md:gap-5 xl:gap-7 md:pb-0'>
      <MainHeader onSearch={handleSearch} />
      <div className={`mt-[70px] md:mt-[80px] lg:mt-[100px] ${isAtBottom ? '' : 'mb-[38px]'} md:mb-0`}>
        <SubNavbar onSearch={handleSearch} onLocationChange={handleLocationChange} />
        <CategoryNavbar onCategoryChange={handleCategoryChange} onBrandChange={handleBrandChange} />
        <div className="min-h-[100vh] container flex gap-[10px] md:gap-5 xl:gap-7">
          <div className="w-full md:w-[1138px]">
            <Posts
              selectedCategory={selectedCategory}
              selectedBrand={selectedBrand}
              ads={allAds}
              sponsorImages={sponsorImages}
              loading={loading}
              loadingMore={loadingMore}
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

        {totalAds > allAds.length && hasMore && (
          <div className="text-center mb-[20px] md:mb-[10px] lg:mb-[2px] mt-[15px] md:mt-[30px] w-full">
            <div
              onClick={loadMore}
              className="border md:border-2 border-border text-[10px] md:text-[13px] lg:text-[17px] mx-auto h-[40px] md:h-[60px] lg:h-[76px] w-[110px] md:w-[150px] lg:w-[250px] rounded-10px flex justify-center items-center font-semibold text-placeholder cursor-pointer"
            >
              {loadingMore ? 'جاري التحميل...' : 'مشاهدة المزيد ...'}
            </div>
          </div>
        )}
      </div>
      <ButtonAddMobile />
    </div>
  );
};

export default Landing;
