import React from 'react';
import { data } from '../../../utils/data';
import { Link } from 'react-router-dom';

const AddPost = () => {
    return (
        <div className='min-h-screen container flex flex-col gap-4 justify-center my-[50px]'>
            {data.map((item, index) => (
                <Link
                    to="/intermediate"
                    state={{ targetPath: item.path }}
                    key={index}
                    className='w-full relative h-[140px] md:h-[160px] lg:h-[200px] rounded-10px bg-background flex justify-between px-2 md:px-7 items-center gap-2 cursor-pointer'
                >
                    <div className='text-[13px]  md:text-[17px] lg:text-[25px] font-bold text-primary'>
                        {item.add}
                    </div>
                    <img
                        className={`${index === 0 ? "w-[70px] lg:w-[190px] h-[120px] " : "w-[60px] lg:w-[170px] h-[100px]"}`}
                        src={item.iconcolor}
                        alt=''
                    />
                </Link>
            ))}
        </div>
    );
};

export default AddPost;