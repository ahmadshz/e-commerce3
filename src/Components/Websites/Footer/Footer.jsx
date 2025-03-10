import React from 'react';
import { FaTiktok, FaTwitter } from 'react-icons/fa';
import { GrSnapchat } from 'react-icons/gr';
import { ImFacebook2 } from 'react-icons/im';
import { SiInstagram } from 'react-icons/si';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <AnimatePresence mode='wait'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className='min-h-[40vh] hidden lg:block container'
                >
                    <div className='bg-primary text-white rounded-10px py-2 md:py-4 lg:py-6 flex items-center justify-center text-center font-semibold text-[12px] lg:text-[16px] xl:text-[20px]'>
                        دلّال هو المنصة المثالية التي تلبي جميع احتياجات الشعب السوري، معًا نبني سوريا المستقبل
                    </div>
                    <div className='container mx-3 py-2 mb-[50px] md:mb-0 md:py-4 lg:py-6 flex flex-wrap md:flex-nowrap xl:justify-between gap-6 md:gap-4 text-[13px] md:text-[15px] xl:text-[17px] font-semibold text-placeholder'>
                        <div className='flex md:w-2/5 flex-col gap-2'>
                            <Link to={'/registration'}>تسجيل</Link>
                            <Link to={'/memberDocumentation'}>توثيق العضوية</Link>
                            <Link to={'/faq'}>الأسئلة الشائعة</Link>
                            <Link to={'/prohibitedAds'}>قائمة السلع والاعلانات الممنوعة</Link>
                        </div>
                        <div className='flex w-full md:w-2/5 flex-col gap-2'>
                            <Link to={'/privacyPolicy'}>سياسة الخصوصية</Link>
                            <Link to={'/securityCenter'}>مركز الأمان</Link>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div>تواصل معنا</div>
                            <div className='flex gap-4 lg:gap-6 py-2 md:py-4 lg:py-6'>
                                <ImFacebook2 onClick={() => window.open('https://www.facebook.com/share/166Mdr3wPu/?mibextid=wwXIfr')} size={25} className='text-[#FF936D]' />
                                <SiInstagram onClick={() => window.open('https://www.instagram.com/dallal_sy?igsh=MTRyaTlhOTJqYzZ2YQ%3D%3D&utm_source=qr')} size={25} className='text-[#FF936D]' />
                                <FaTiktok onClick={() => window.open('https://www.tiktok.com/@dallal.sy?_t=ZS-8uY4d8ZSIm9&_r=1')} size={25} className='text-[#FF936D]' />
                                <svg
                                    onClick={() => window.open('https://x.com/dallal_sy?s=21&t=jWVmcT1Db2z-NTL_kJjevw')}
                                    className='text-[#FF936D] fill-current font-bold'
                                    xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="27" height="27" viewBox="0 0 48 48">
                                    <polygon points="41,6 9.929,42 6.215,42 37.287,6"></polygon><polygon fill="#fff" points="31.143,41 7.82,7 16.777,7 40.1,41" ></polygon><path d="M15.724,9l20.578,30h-4.106L11.618,9H15.724 M17.304,6H5.922l24.694,36h11.382L17.304,6L17.304,6z"></path>
                                </svg>                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Footer;