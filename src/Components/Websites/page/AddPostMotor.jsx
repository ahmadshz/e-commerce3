import { data, location } from '../../../utils/data';
import { IoIosCamera } from 'react-icons/io';
import Dropdown from '../UI/Dropdowns';
import RadioButton from '../UI/RadioButton';
import { useState } from 'react';
import img from '../../../assets/Carandothers/motor-1.svg'

const AddPostMotor = () => {

    const [selectedLocation, setSelectedLocation] = useState('اختر عنوان الاعلان');
    const [selectedBrand, setSelectedBrand] = useState('اختر الماركة');
    const [status, setStatus] = useState('used');
    const [gear, setGear] = useState('normal');

    return (
        <div className='min-h-screen py-[50px] md:py-[100px] container flex items-center relative'>
            <img
                className=' w-[60px] lg:w-[100px] absolute top-2 -left-2 lg:-left-4 -rotate-[90deg]'
                src={img}
                alt='Rotating'
            />

            <form className='flex flex-col gap-5 md:gap-7 w-full px-4 md:px-0'>
                {/* Title and Location Dropdown */}
                <div className='flex flex-col md:flex-row gap-5 w-full'>
                    <div className='flex flex-col gap-5 w-full md:w-[867px]'>
                        <label className='text-primary text-[20px] lg:text-[25px] font-bold'>عنوان الاعلان :</label>
                        <input
                            type='text'
                            className='w-full h-[60px] md:h-[76px] text-placeholder block border-2 border-border rounded-10px text-[16px] lg:text-[20px] pr-2 md:pr-[10px] xl:pr-[20px] outline-none focus:outline-none focus:border-primary duration-200'
                            placeholder='مثال : متور كاوازاكي slv 227'
                        />
                    </div>

                    {/* Location Dropdown */}
                    <Dropdown
                        label='الموقع :'
                        options={location}
                        selected={selectedLocation}
                        onSelect={setSelectedLocation}
                        className='w-full md:w-[560px]'
                    />
                </div>

                {/* Image Upload and Condition (Used/New) */}
                <div className='flex flex-col md:flex-row gap-5 w-full'>
                    {/* Image Upload Section */}
                    <div className='flex flex-col gap-5 w-full md:w-[395px] lg:w-[532px] xl:w-[668px] 2xl:w-[867px]'>
                        <label className='text-primary text-[20px] lg:text-[25px] font-bold'>الصور :</label>
                        <div className='relative'>
                            <input
                                type='text'
                                className='w-full h-[60px] md:h-[76px] text-placeholder block border-2 border-border rounded-10px text-[16px] lg:text-[20px] pr-2 md:pr-[10px] xl:pr-[20px] outline-none focus:outline-none focus:border-primary duration-200 pl-10'
                                placeholder='انقر هنا لاضافة الصور'
                            />
                            <IoIosCamera size={30} className='absolute top-1/2 left-4 transform -translate-y-1/2 text-placeholder' />
                        </div>
                    </div>

                    {/* Condition (Used/New) Section */}
                    <div className='flex flex-col gap-5 w-full md:w-1/3 lg:w-[340px] xl:w-[432px] 2xl:w-[560px] '>
                        <label className='text-primary text-[20px] lg:text-[25px] font-bold'>الحالة :</label>
                        <div className='flex gap-5'>
                            <div className='w-full md:w-[560px] h-[60px] md:h-[76px] flex gap-5'>
                                <RadioButton
                                    label='مستعمل'
                                    value='used'
                                    name='status'
                                    onChange={() => setStatus('used')}
                                    className='w-1/2 md:w-[118px]'
                                />
                                <RadioButton
                                    label='جديد'
                                    value='new'
                                    name='status'
                                    onChange={() => setStatus('new')}
                                    className='w-1/2 md:w-[118px]'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Brands Dropdown and Gear */}
                <div className='flex flex-col md:flex-row gap-5 w-full'>
                    <Dropdown
                        label='الماركة :'
                        options={data[1].brands.map((brand) => (
                            <div><span>{brand.arabic} </span> <span>({brand.english})</span></div>
                        ))} selected={selectedBrand}
                        placeholder
                        onSelect={setSelectedBrand}
                        className=' w-full  md:w-[867px]'
                    />

                    {/* Gear */}
                    <div className='flex flex-col gap-5 w-full md:w-[560px]'>
                        <label className='text-primary text-[20px] lg:text-[25px] font-bold'>القير :</label>
                        <div className='flex gap-5'>
                            <div className='w-full  h-[60px] md:h-[76px] flex gap-5'>
                                <RadioButton
                                    label='عادي'
                                    value='normal'
                                    name='gear'
                                    onChange={() => setGear('normal')}
                                    className='w-1/2 md:w-[118px]'
                                />
                                <RadioButton
                                    label='أوتوماتيك'
                                    value='Automatic'
                                    name='gear'
                                    onChange={() => setGear('Automatic')}
                                    className='w-1/2 md:w-[118px]'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Price and Mileage */}
                <div className='flex flex-col md:flex-row gap-5 w-full'>
                    <div className='flex flex-col gap-5 w-full md:w-[867px]'>
                        <label className='text-primary text-[20px] lg:text-[25px] font-bold'>السعر :</label>
                        <div className='flex flex-col md:flex-row gap-5 w-full'>
                            {/* Syrian Pounds Input */}
                            <div className='relative w-full md:w-1/2'>
                                <input
                                    placeholder='2000000'
                                    className='w-full h-[60px] md:h-[76px] text-placeholder border-2 border-border rounded-10px text-[16px] lg:text-[20px] pr-2 md:pr-[10px] xl:pr-[20px] outline-none focus:outline-none focus:border-primary duration-200 pl-10'
                                />
                                <span className='absolute left-2 top-1/2 transform -translate-y-1/2 text-placeholder text-[16px] lg:text-[20px]'>
                                    ليرة سورية
                                </span>
                            </div>

                            {/* US Dollars Input */}
                            <div className='relative w-full md:w-1/2'>
                                <input
                                    placeholder='500'
                                    className='w-full h-[60px] md:h-[76px] text-placeholder border-2 border-border rounded-10px text-[16px] lg:text-[20px] pr-2 md:pr-[10px] xl:pr-[20px] outline-none focus:outline-none focus:border-primary duration-200 pl-10'
                                />
                                <span className='absolute left-2 top-1/2 transform -translate-y-1/2 text-placeholder text-[16px] lg:text-[20px]'>
                                    دولار أمريكي
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Mileage Input */}
                    <div className='flex flex-col gap-5 w-full md:w-[560px]'>
                        <label className='text-primary text-[20px] lg:text-[25px] font-bold'>الممشى :</label>
                        <input
                            type='text'
                            placeholder='2000000'
                            className='w-full h-[60px] md:h-[76px] text-placeholder border-2 border-border rounded-10px text-[16px] lg:text-[20px] pr-2 md:pr-[10px] xl:pr-[20px] outline-none focus:outline-none focus:border-primary duration-200 pl-10'
                        />
                    </div>
                </div>

                {/* Description */}
                <div className='flex flex-col gap-5  md: lg:w-[895px] xl:w-[1120px] 2xl:w-[1450px]'>
                    <label className='text-primary text-[20px] lg:text-[25px] font-bold'>الوصف :</label>
                    <textarea
                        cols='30'
                        rows='10'
                        placeholder='التفاصيل كاملة :'
                        className=' md:h-[200px]  text-placeholder border-2 border-border rounded-10px text-[16px] lg:text-[20px] pr-2 pt-2 md:pr-[10px] md:pt-[10px] xl:pr-[20px] xl:pt-[20px] outline-none focus:outline-none focus:border-primary duration-200 pl-10 resize-y'
                    >
                    </textarea>
                </div>

                {/* Submit Button */}
                <button className='bg-primary h-[60px] md:h-[76px] w-full md:w-[370px] lg:w-[426px] text-white text-[20px] lg:text-[25px] font-bold rounded-10px'>
                    اعلان
                </button>
            </form>
        </div>
    )
}

export default AddPostMotor
