import React, { useState } from 'react';
import { data, location } from '../../../../utils/data';
import { IoIosCamera } from 'react-icons/io';
import Dropdown from '../../UI/Dropdowns';
import RadioButton from '../../UI/RadioButton';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { baseUrl } from '../../../../Api/Api';
import Loading from '../Loading';
import SubmissionAddPost from '../SubmissionAddPost';

const AddPostParty = () => {
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [status, setStatus] = useState('used');
    const [title, setTitle] = useState('');
    const [images, setImages] = useState([]);
    const [syrianPounds, setSyrianPounds] = useState('');
    const [usDollars, setUsDollars] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('')
    const [submission, setSubmission] = useState(false)
    const [loading, setLoading] = useState(false)


    const coockies = new Cookies();
    const token = coockies.get('auth_token');
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 5) {
            setError('يمكنك تحميل ما يصل إلى 5 صور فقط.');
            return;
        }
        setImages(files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validations = [
            { condition: !title, message: 'يرجى إدخال العنوان' },
            { condition: !selectedLocation, message: 'يرجى اختيار الموقع' },
            { condition: !selectedBrand, message: 'يرجى اختيار نوع الوظيفة' },
            { condition: !status, message: 'يرجى تحديد الحالة' },
            { condition: !syrianPounds, message: 'يرجى إدخال السعر بالليرة السورية' },
            { condition: !usDollars, message: 'يرجى إدخال السعر بالدولار الأمريكي' },
            { condition: !description, message: 'يرجى إدخال الوصف' },
            { condition: images.length === 0, message: 'يرجى إضافة صورة واحدة على الأقل' },
        ];

        for (const field of validations) {
            if (field.condition) {
                setError(field.message);
                return;
            }
        }


        // تأكد أن السعر أرقام فقط (وأنه لا يحتوي على رموز أو حروف)
        if (!/^\d+$/.test(syrianPounds) || !/^\d+$/.test(usDollars)) {
            setError('السعر يجب أن يتكون من أرقام فقط.');
            return;
        }
        setLoading(true)

        const formData = new FormData();
        formData.append('title', title);
        formData.append('location', selectedLocation);
        formData.append('category', 'parties');
        formData.append('adType', selectedBrand);
        formData.append('condition', status);
        formData.append('priceSYP', syrianPounds);
        formData.append('priceUSD', usDollars);
        formData.append('description', description);

        images.forEach((image) => {
            formData.append('images', image);
        });

        try {
            await axios.post(`${baseUrl}/ad`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            setSubmission(true)

        } catch (error) {
            console.error('Error:', error);
            setError('فشل في نشر الإعلان');
        } finally {
            setLoading(false)
        }
    };

    return (
        <div>
            {loading ? <Loading /> : ''}
            {submission ? <SubmissionAddPost /> : ''}
            <div className='min-h-screen py-[50px] md:py-[100px] container flex items-center relative'>
                <form className='flex flex-col gap-5 md:gap-7 w-full px-4 md:px-0' onSubmit={handleSubmit}>
                    {/* Title and Location Dropdown */}
                    <div className='flex flex-col md:flex-row gap-5 w-full'>
                        <div className='flex flex-col md:gap-2 lg:gap-5 w-full md:w-3/6 lg:w-[867px]'>
                            <label className='text-primary text-[14px] md:text-[16px] lg:text-[25px] font-bold'>عنوان الاعلان :</label>
                            <input
                                type='text'
                                className='w-full h-[50px] md:h-[60px] lg:h-[76px] text-placeholder block 
                                border md:border-2 border-border rounded-10px text-[12px] md:text-[14px] lg:text-[20px]
                                 pr-2 md:pr-[10px] xl:pr-[20px] outline-none focus:outline-none focus:border-primary duration-200'
                                placeholder='مثال : شركة الأتاسي لتنظيم الأعراس في دمشق'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                maxLength={70}

                            />
                        </div>

                        {/* Location Dropdown */}
                        <Dropdown
                            label='الموقع :'
                            options={location}
                            selected={selectedLocation || 'اختر الموقع'}
                            onSelect={setSelectedLocation}
                            className='w-full md:w-3/6 lg:w-[560px]'
                        />
                    </div>

                    {/* Image Upload and Condition (Used/New) */}
                    <div className='flex flex-col md:flex-row gap-5 w-full'>
                        {/* Image Upload Section */}
                        <div className='flex flex-col md:gap-2 lg:gap-5 w-full md:w-[395px] lg:w-[532px] xl:w-[668px] 2xl:w-[867px]'>
                            <label className='text-primary text-[14px] md:text-[16px] lg:text-[25px] font-bold'>الصور :</label>
                            <div className='relative w-full h-[50px] md:h-[60px] lg:h-[76px] text-placeholder block border md:border-2 border-border rounded-10px
                                                                                    text-[12px] md:text-[14px] lg:text-[20px] pr-2 md:pr-[10px] xl:pr-[20px] outline-none focus:outline-none
                                                                                     focus:border-primary duration-200 pl-10'>
                                {/* Placeholder */}
                                <div className='absolute inset-0 pr-2 md:pr-[10px] xl:pr-[20px] flex items-center pl-10 text-placeholder'>
                                    {images && images.length > 0
                                        ? <span >{images.length < 2 ? images.length + " صور" : images.length + "صورة"} </span>
                                        : 'انقر هنا لاضافة الصور'}
                                </div>

                                {/* File Input */}
                                <input
                                    type='file'
                                    multiple
                                    accept='image/*'
                                    max={5}
                                    className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
                                    onChange={handleFileChange}
                                />

                                <IoIosCamera size={30} className='absolute top-1/2 left-4 transform -translate-y-1/2 text-placeholder' />
                            </div>
                        </div>

                        {/* Condition (Used/New) Section */}
                        <div className='flex flex-col md:gap-2 lg:gap-5w-full md:w-1/2 lg:w-[340px] xl:w-[432px] 2xl:w-[560px]'>
                            <label className='text-primary text-[14px] md:text-[16px] lg:text-[25px] font-bold'>الحالة :</label>
                            <div className='flex gap-5'>
                                <div className='w-full md:w-[560px] h-[50px] md:h-[60px] lg:h-[76px] flex gap-5'>
                                    <RadioButton
                                        label='جديد'
                                        value='new'
                                        name='status'
                                        onChange={() => setStatus('new')}
                                        className='w-1/2'
                                    />
                                    <RadioButton
                                        label='مستعمل'
                                        value='used'
                                        name='status'
                                        onChange={() => setStatus('used')}
                                        className='w-1/2'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-5 w-full'>
                        <Dropdown
                            label=' نوع الوظيفة : '
                            options={data[11].brands.map((brand) => brand)}
                            selected={selectedBrand || 'اختر نوع الوظيفة'}
                            placeholder
                            onSelect={setSelectedBrand}
                            className='w-full lg:w-[532px] xl:w-[668px] 2xl:w-[867px]'
                        />

                        {/* Empty Div for Alignment */}
                        <div className='hidden lg:flex flex-col gap-5'>
                            <div className='w-full md:w-[320px] lg:w-[345px] xl:w-[432px] 2xl:w-[560px]' />
                        </div>
                    </div>

                    {/* Price and Mileage */}
                    <div className='flex flex-col md:flex-row gap-5 w-full'>
                        <div className='flex flex-col md:gap-2 lg:gap-5 w-full lg:w-[532px] xl:w-[668px] 2xl:w-[867px]'>
                            <label className='text-primary text-[14px] md:text-[16px] lg:text-[25px] font-bold'>السعر :</label>
                            <div className='flex flex-col md:flex-row gap-2 lg:gap-5w-full'>
                                {/* Syrian Pounds Input */}
                                <div className='relative w-full md:w-1/2'>
                                    <input
                                        placeholder='2000000'
                                        className='w-full h-[50px] md:h-[60px] lg:h-[76px] text-placeholder border md:border-2 border-border rounded-10px text-[12px] md:text-[14px] lg:text-[20px] pr-2 md:pr-[10px] xl:pr-[20px] outline-none focus:outline-none focus:border-primary duration-200 pl-10'
                                        value={syrianPounds}
                                        onChange={(e) => setSyrianPounds(e.target.value)}
                                    />
                                    <span className='absolute left-2 top-1/2 transform -translate-y-1/2 text-placeholder text-[12px] md:text-[14px] lg:text-[20px]'>
                                        ليرة سورية
                                    </span>
                                </div>

                                {/* US Dollars Input */}
                                <div className='relative w-full md:w-1/2'>
                                    <input
                                        placeholder='500'
                                        className='w-full h-[50px] md:h-[60px] lg:h-[76px] text-placeholder border md:border-2 border-border rounded-10px text-[12px] md:text-[14px] lg:text-[20px] pr-2 md:pr-[10px] xl:pr-[20px] outline-none focus:outline-none focus:border-primary duration-200 pl-10'
                                        value={usDollars}
                                        onChange={(e) => setUsDollars(e.target.value)}
                                    />
                                    <span className='absolute left-2 top-1/2 transform -translate-y-1/2 text-placeholder text-[12px] md:text-[14px] lg:text-[20px]'>
                                        دولار أمريكي
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Empty Div for Alignment */}
                        <div className='hidden lg:flex flex-col gap-5 w-full md:w-1/2 lg:w-[345px] xl:w-[432px] 2xl:w-[560px]' />
                    </div>

                    {/* Description */}
                    <div className='flex flex-col md:gap-2 lg:gap-5 w-full lg:w-[895px] xl:w-[1120px] 2xl:w-[1450px]'>
                        <label className='text-primary text-[14px] md:text-[16px] lg:text-[25px] font-bold'>الوصف :</label>
                        <textarea
                            rows='5'
                            placeholder='التفاصيل كاملة :'
                            className='w-full h-[200px] md:h-[266px] text-placeholder border md:border-2 border-border rounded-10px text-[12px] md:text-[14px] lg:text-[20px] pr-2 pt-2 md:pr-[10px] md:pt-[10px] xl:pr-[20px] xl:pt-[20px] outline-none focus:outline-none focus:border-primary duration-200 pl-10 resize-y'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    {/* Submit Button */}
                    <button type='submit' className='bg-primary h-[50px] md:h-[60px] lg:h-[76px] w-full md:w-[370px] lg:w-[426px]
                     text-white text-[16px] lg:text-[25px] font-bold rounded-10px'>
                        اعلان
                    </button>
                    <div className='text-primary font-semibold text-[14px] md:text-[16px] lg:text-[20px]  '> {error}</div>
                </form>
            </div>
        </div>
    );
};

export default AddPostParty;