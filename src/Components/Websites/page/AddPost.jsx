import React from 'react'
import { data } from '../../../utils/data'

const AddPost = () => {
    return (
        <div className='min-h-screen container flex flex-col gap-4 justify-center my-[50px]'>
            {data.map((item, index) => (
                <div key={index} className='w-full h-[140px] md:h-[160px] lg:h-[200px] rounded-10px bg-background flex justify-between container items-center'>
                    <div className='  md:text-[15px] lg:text-[17px] xl:text-[25px] font-bold text-primary'>{item.add}</div>
                    <img className={`${index === 0 ? "w-[70px] " : "w-[60px]"} `} src={item.iconcolor} alt=''/>
                </div>
            ))}
        </div>
    )
}

export default AddPost