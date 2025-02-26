import React from 'react'
import MainHeader from '../Header/MainHeader'

const SinglePost = () => {
    return (
        <div className='flex flex-col gap-[100px]'>
            <MainHeader />
            <div className="min-h-screen container flex gap-[10px] md:gap-5 xl:gap-7">
                <div className=" w-full  md:w-[1138px] ">
                    <div className='bg-background w-full h-[155px] flex'>
                        <div className='w-3/5 md:py-2 pr-2 md:pr-[10px] xl:pr-[20px] flex flex-col justify-between'>
                            <div className='text-[15px] md:text-[19px] lg:text-[24px] font-semibold'>هوندا اكورد 2015 ستاندر </div>
                            <div className='text-[13px] lg:text-[15px] font-normal text-placeholder'>دمشق</div>
                        </div>
                        <div className='w-1/5'>
                        
                        </div>
                        <div className='w-1/5'>sdffs</div>
                    </div>
                </div>
                <div className="hidden lg:block bg-bgsecondary w-[455px] "></div>
            </div>

        </div>
    )
}

export default SinglePost
