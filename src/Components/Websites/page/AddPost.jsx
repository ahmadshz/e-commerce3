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
                    <div className='text-[13px]  md:text-[17px] lg:text-[20px] xl:text-[25px] w-8/12 font-bold text-primary'>
                        {item.add}
                    </div>
                    <img
                        className={`${
                                index === 0
                                    ? 'w-[80px] h-[80px] -ml-1 lg:ml-1 lg:w-[200px] lg:h-[150px]'
                                    : index === 1
                                    ? 'w-[70px] h-[70px] -ml-1 lg:ml-3 lg:w-[180px] lg:h-[140px]'
                                    : index === 2
                                    ? 'w-[60px] h-[40px] -ml-1 lg:ml-6 lg:w-[140px] lg:h-[80px]'
                                    : index === 4
                                    ? 'w-[60px] h-[70px] ml-1 lg:ml-8 lg:w-[150px] lg:h-[130px]'
                                    : index === 8
                                    ? 'w-[70px] h-[70px] -ml-1 lg:ml-7 lg:w-[150px] lg:h-[130px]'
                                    : index === 9
                                    ? 'w-[70px] h-[70px] -ml-1 lg:ml-7 lg:w-[150px] lg:h-[125px]'
                                    : index === 10
                                    ? 'w-[70px] h-[70px] -ml-1 lg:ml-7 lg:w-[150px] lg:h-[125px]'
                                    : ' lg:ml-12 w-[55px] lg:w-[100px]'
                            }`}
                        src={item.iconcolor}
                        alt=''
                    />
                </Link>
            ))}
        </div>
    );
};

export default AddPost;