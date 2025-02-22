import React from 'react'
import Posts from '../../Components/Websites/page/Posts'


const Landing = () => {
    return (
        <div>
            <div className='min-h-screen container  flex gap-[10px] md:gap-5 xl:gap-7'>
                <div className='w-full lg:w-2/3 flex flex-col gap-[10px]'>
                    <Posts />
                    <Posts />
                    <Posts />
                    <Posts />
                  
                    <Posts />
                    <Posts />
                    <div className='text-center font-semibold my-[30px] text-[13px] md:text-[15px] lg:text-[21px] text-placeholder'>مشاهدة المزيد...</div>
                </div>
                <div className= 'hidden lg:block bg-bgsecondary w-1/3 '></div>
            </div>
        </div>
    )
}

export default Landing
