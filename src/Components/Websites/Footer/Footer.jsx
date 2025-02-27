import React from 'react'
import { FaTiktok, FaTwitter } from 'react-icons/fa'
import { GrSnapchat } from 'react-icons/gr'
import { ImFacebook2 } from 'react-icons/im'
import { SiInstagram } from 'react-icons/si'

const Footer = () => {
    return (
        <div className='min-h-[40vh]  container'>
            <div className='bg-primary  text-white rounded-10px  py-2 md:py-4 lg:py-6 flex items-center justify-center text-center font-semibold text-[12px] lg:text-[16px] xl:text-[20px] '>دلّال هو المنصة المثالية التي تلبي جميع احتياجات الشعب السوري، معًا نبني سوريا المستقبل</div>
            <div className='container mx-3  py-2 mb-[50px] md:mb-0 md:py-4 lg:py-6 flex flex-wrap md:flex-nowrap  xl:justify-betwween gap-6 md:gap-4 text-[13px] md:text-[15px] xl:text-[17px] font-semibold text-placeholder '>
                <div className=' flex md:w-2/5 flex-col gap-2'>
                    <div>تسجيل</div>
                    <div>توثيق العضوية</div>
                    <div>الأسئلة الشائعة</div>
                    <div>قائمة السلع والاعلانات الممنوعة</div>
                </div>
                <div className='flex w-full md:w-2/5 flex-col gap-2'>
                    <div>سياسة الخصوصية</div>
                    <div>مركز الأمان</div>
                    <div>نظام التقييم</div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className=''>تواصل معنا</div>
                    <div className='flex   gap-4 lg:gap-6 py-2 md:py-4 lg:py-6'>
                        <ImFacebook2 size={25} className='text-[#FF936D]' />
                        <SiInstagram size={25} className='text-[#FF936D]' />
                        <GrSnapchat size={25} className='text-[#FF936D]' />
                        <FaTiktok size={25} className='text-[#FF936D]' />
                        <FaTwitter size={25} className='text-[#FF936D]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer