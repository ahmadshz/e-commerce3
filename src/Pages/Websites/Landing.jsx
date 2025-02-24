import React from 'react'
import Posts from '../../Components/Websites/page/Posts'


const Landing = () => {
    return (
        <div>
            <div className='min-h-[50vh] container  flex gap-[10px] md:gap-5 xl:gap-7'>
                <div className='w-full lg:w-2/3'>
                    <Posts />
                </div>
                <div className='hidden lg:block bg-bgsecondary w-1/3 '></div>
            </div>

            <div className='text-center mb-[5px] md:mb-[10px] lg:mb-[2px] mt-[15px] md:mt-[30px] w-full  '>
                <div className=' ring-2 ring-border   text-[10px] md:text-[13px] lg:text-[17px] mx-auto 
                h-[40px]   md:h-[60px] lg:h-[76px] w-[110px] md:w-[150px]  lg:w-[250px] 
                rounded-10px  flex justify-center items-center  font-semibold text-placeholder'>
                    مشاهدة المزيد ...</div>
            </div>
        </div>
    )
}

export default Landing
