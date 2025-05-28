import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // لجلب id من الرابط
import { data, location } from '../../../../utils/data';
import { IoIosCamera } from 'react-icons/io';
import Dropdown from '../../UI/Dropdowns';
import RadioButton from '../../UI/RadioButton';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { baseUrl } from '../../../../Api/Api';
import Loading from '../Loading';

const UpdatePostEstate = () => {
    const { id } = useParams();
    const cookies = new Cookies();
    const token = cookies.get('auth_token');

    const navigate = useNavigate();

    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [type, setType] = useState('');
    const [status, setStatus] = useState('');
    const [title, setTitle] = useState('');
    const [images, setImages] = useState([]);
    const [existingImages, setExistingImages] = useState([]);

    const [priceSYP, setPriceSYP] = useState('');
    const [priceUSD, setPriceUSD] = useState('');
    const [description, setDescription] = useState('');
    const [isNewProject, setIsNewProject] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // 🔁 get current ad data
    useEffect(() => {
        const fetchAd = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${baseUrl}/ad/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const ad = response.data;
                setTitle(ad.title || '');
                setSelectedLocation(ad.location || '');
                setStatus(ad.condition || ''); // تأكد أن هذه القيمة 'furnished', 'unfurnished', أو 'shell'
                setType(ad.propertyType || '');
                setIsNewProject(ad.newHousingProject ? 'yes' : 'no'); // تحويل من boolean إلى 'yes'/'no'
                setSelectedBrand(ad.deedType || '');
                setPriceSYP(ad.priceSYP || '');
                setPriceUSD(ad.priceUSD || '');
                setDescription(ad.description || '');
                setExistingImages(ad.images || []);
            } catch (err) {
                setError('فشل في تحميل بيانات الإعلان');
            } finally {
                setLoading(false);
            }
        };

        fetchAd();
    }, [id, token]);

    // 📝 handle file input
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 5) {
            alert('يمكنك تحميل ما يصل إلى 5 صور فقط.');
            return;
        }
        setImages(files);
    };

    // 📨 handle form submit (PUT)
    const handleSubmit = async (e) => {
        e.preventDefault();

        const validations = [
            { condition: !title, message: 'يرجى إدخال العنوان' },
            { condition: !selectedLocation, message: 'يرجى اختيار الموقع' },
            { condition: !status, message: 'يرجى تحديد الحالة' },
            { condition: !type, message: 'يرجى اختيار نوع العقار' },
            { condition: !isNewProject, message: 'يرجى تحديد الحالة' },
            { condition: !selectedBrand, message: 'يرجى اختيار الطابو' },
            { condition: !priceSYP, message: 'يرجى إدخال السعر بالليرة السورية' },
            { condition: !priceUSD, message: 'يرجى إدخال السعر بالدولار الأمريكي' },
            { condition: !description, message: 'يرجى إدخال الوصف' },
        ];

        for (const rule of validations) {
            if (rule.condition) {
                setError(rule.message);
                return;
            }
        }

        if (!/^\d+$/.test(priceSYP) || !/^\d+$/.test(priceUSD)) {
            setError('السعر يجب أن يتكون من أرقام فقط.');
            return;
        }

        setLoading(true);
        setError('');

        const formData = new FormData();
        formData.append('title', title);
        formData.append('location', selectedLocation);
        formData.append('condition', status);
        formData.append('priceSYP', priceSYP);
        formData.append('priceUSD', priceUSD);
        formData.append('description', description);
        formData.append('category', 'real_estate');
        formData.append('deedType', selectedBrand);
        formData.append('propertyType', type);
        formData.append('newHousingProject', isNewProject === 'yes'); // تحويل إلى boolean

        // Only append new images if they are File objects
        images.forEach((img) => {
            if (img instanceof File) {
                formData.append('images', img);
            }
        });

        try {
            await axios.put(`${baseUrl}/ad/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            navigate(`/myaccount`);

        } catch (err) {
            setError('حدث خطأ أثناء تحديث الإعلان. الرجاء المحاولة لاحقاً.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {loading ? <Loading /> : ''}
            <div className='min-h-screen py-[50px] md:py-[100px] container flex items-center relative'>
                <form className='flex flex-col gap-5 md:gap-7 w-full px-4 md:px-0' onSubmit={handleSubmit}>
                    {/* Title and Location Dropdown */}
                    <div className='flex flex-col md:flex-row gap-5 w-full'>
                        <div className='flex flex-col md:gap-2 lg:gap-5 w-full md:w-3/6 lg:w-[867px]'>
                            <label className='text-primary text-[14px] md:text-[16px] lg:text-[25px] font-bold'>عنوان الاعلان :</label>
                            <input
                                type='text'
                                className='w-full h-[50px] md:h-[60px] lg:h-[76px] text-placeholder block
                                 border md:border-2 border-border rounded-10px 
                                text-[12px] md:text-[14px] lg:text-[20px] pr-2 md:pr-[10px] xl:pr-[20px] outline-none focus:outline-none focus:border-primary duration-200'
                                placeholder='مثال : شقة للإيجار في حي الزبيدي بسعر مغري جداً'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        {/* Location Dropdown */}
                        <Dropdown
                            label='الموقع :'
                            options={location}
                            selected={selectedLocation || " اختر الموقع"}
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
                                                  text-[16px] lg:text-[25px] pr-2 md:pr-[10px] xl:pr-[20px] outline-none focus:outline-none
                                                   focus:border-primary duration-200 pl-10'>
                                {/* Placeholder */}
                                <div className='absolute inset-0 pr-2 md:pr-[10px] xl:pr-[20px] text-[12px] md:text-[14px] lg:text-[20px] flex items-center pl-10 text-placeholder'>
                                    {images.length > 0 || existingImages.length > 0
                                        ? <span>{images.length + existingImages.length} {images.length + existingImages.length === 1 ? 'صورة' : 'صور'}</span>
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
                                    disabled
                                />

                                {/* Camera Icon */}
                                <IoIosCamera size={30} className='absolute top-1/2 left-4 transform -translate-y-1/2 text-placeholder' />
                            </div>

                            {/* Display selected images */}

                        </div>

                        {/* Condition (Used/New/Structure) Section */}
                        <div className='flex flex-col md:gap-2 lg:gap-5 w-full md:w-[320px] lg:w-[345px] xl:w-[432px] 2xl:w-[560px]'>
                            <label className='text-primary text-[14px] md:text-[16px] lg:text-[25px] font-bold'>الحالة :</label>
                            <div className='flex gap-5'>
                                <div className='w-full md:w-[325px] lg:w-[345px] xl:w-[432px] 2xl:w-[560px] h-[50px] md:h-[60px] lg:h-[76px] flex gap-2 md:gap-5'>

                                    {/* حالة العقار */}
                                    <RadioButton
                                        label='مفروش'
                                        value='furnished'
                                        name='status'
                                        checked={status === 'furnished'}
                                        onChange={() => setStatus('furnished')}
                                        className='w-1/3 md:w-1/3'

                                    />
                                    <RadioButton
                                        label='غير مفروش'
                                        value='unfurnished'
                                        name='status'
                                        checked={status === 'unfurnished'}
                                        onChange={() => setStatus('unfurnished')}
                                        className='w-1/3 md:w-1/3'

                                    />
                                    <RadioButton
                                        label='على العظم'
                                        value='shell'
                                        name='status'
                                        checked={status === 'shell'}
                                        onChange={() => setStatus('shell')}
                                        className='w-1/3 md:w-1/3'

                                    />

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Brands Dropdown and Tabo */}
                    <div className='flex flex-col md:flex-row gap-5 w-full'>
                        <Dropdown
                            label='نوع العقار :'
                            options={data[3].brands.map((brand) => brand)}
                            selected={type || 'اختر نوع العقار'}
                            onSelect={setType}
                            className='w-full md:w-[325px] lg:w-[532px] xl:w-[668px] 2xl:w-[867px]'
                        />

                        {/* Tabo */}
                        <div className='flex flex-col gap-5'>
                            <Dropdown
                                label='نوع الطابو :'
                                options={data[3].tabo.map((tabo) => tabo)}
                                selected={selectedBrand || 'اختر نوع الطابو'}
                                onSelect={setSelectedBrand}
                                className='w-full md:w-[320px] lg:w-[345px] xl:w-[432px] 2xl:w-[560px]'
                            />
                        </div>
                    </div>

                    {/* Price and Mileage */}
                    <div className='flex flex-col md:flex-row gap-5 w-full'>
                        <div className='flex flex-col md:gap-2 lg:gap-5 w-full md:w-1/2 lg:w-[532px] xl:w-[668px] 2xl:w-[867px]'>
                            <label className='text-primary text-[14px] md:text-[16px] lg:text-[25px] font-bold'>السعر :</label>
                            <div className='flex flex-col md:flex-row gap-2 lg:gap-5 w-full'>
                                {/* Syrian Pounds Input */}
                                <div className='relative w-full md:w-1/2'>
                                    <input
                                        placeholder='2000000'
                                        className='w-full h-[50px] md:h-[60px] lg:h-[76px] text-placeholder border md:border-2 border-border rounded-10px
                                         text-[12px] md:text-[14px] lg:text-[20px] pr-2 md:pr-[10px] xl:pr-[20px] outline-none focus:outline-none focus:border-primary duration-200 pl-10'
                                        value={priceSYP}
                                        onChange={(e) => setPriceSYP(e.target.value)}
                                    />
                                    <span className='absolute left-2 top-1/2 transform -translate-y-1/2 text-placeholder text-[12px] md:text-[14px] lg:text-[20px]'>
                                        ليرة سورية
                                    </span>
                                </div>

                                {/* US Dollars Input */}
                                <div className='relative w-full md:w-1/2'>
                                    <input
                                        placeholder='500'
                                        className='w-full h-[50px] md:h-[60px] lg:h-[76px] text-placeholder border md:border-2 border-border rounded-10px
                                         text-[12px] md:text-[14px] lg:text-[20px] pr-2 md:pr-[10px] xl:pr-[20px] outline-none focus:outline-none focus:border-primary duration-200 pl-10'
                                        value={priceUSD}
                                        onChange={(e) => setPriceUSD(e.target.value)}
                                    />
                                    <span className='absolute left-2 top-1/2 transform -translate-y-1/2 text-placeholder text-[12px] md:text-[14px] lg:text-[20px]'>
                                        دولار أمريكي
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Status Architectural */}
                        <div className='flex flex-col md:gap-2 lg:gap-5 w-full md:w-1/2 lg:w-[345px] xl:w-[432px] 2xl:w-[560px]'>
                            <label className='text-primary text-[14px] md:text-[16px] lg:text-[25px] font-bold'>هل هو مشروع سكني جديد ؟</label>
                            <div className='flex gap-5'>
                                <div className='w-full lg:w-[345px] xl:w-[432px] 2xl:w-[560px] h-[50px] md:h-[60px] lg:h-[76px] flex gap-5'>

                                    <RadioButton
                                        label='نعم'
                                        value='yes'
                                        name='statusArchitectural'
                                        checked={isNewProject === 'yes'}
                                        onChange={() => setIsNewProject('yes')}
                                        className='w-1/2 md:w-1/2'

                                    />
                                    <RadioButton
                                        label='لا'
                                        value='no'
                                        name='statusArchitectural'
                                        checked={isNewProject === 'no'}
                                        onChange={() => setIsNewProject('no')}
                                        className='w-1/2 md:w-1/2'

                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className='flex flex-col md:gap-2 lg:gap-5 md:lg:w-[895px] xl:w-[1120px] 2xl:w-[1450px]'>
                        <label className='text-primary text-[14px] md:text-[16px] lg:text-[25px] font-bold'>الوصف :</label>
                        <textarea
                            rows='5'
                            placeholder='التفاصيل كاملة :'
                            className='md:h-[200px] text-placeholder border md:border-2 border-border rounded-10px 
                            text-[12px] md:text-[14px] lg:text-[20px] pr-2 pt-2 md:pr-[10px] md:pt-[10px] xl:pr-[20px] xl:pt-[20px] outline-none focus:outline-none focus:border-primary duration-200 pl-10 resize-y'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    
                    {/* show images */}
                    <div className="flex flex-wrap gap-2 mt-2">
                        {existingImages.map((image, index) => (
                            <div key={`existing-${index}`} className="relative">
                                <img
                                    src={image}
                                    alt={`Existing ${index}`}
                                    className="w-20 h-20 object-cover rounded"
                                />

                            </div>
                        ))}

                        {images.map((image, index) => (
                            <div key={`new-${index}`} className="relative">
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt={`Preview ${index}`}
                                    className="w-20 h-20 object-cover rounded"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Submit Button */}
                    <button
                        type='submit'
                        className={`bg-primary h-[50px] md:h-[60px] lg:h-[76px] w-full md:w-[370px] lg:w-[426px] ${loading ? 'opacity-50' : ''}
                         text-white text-[16px] lg:text-[25px] font-bold rounded-10px`}
                    >
                        اعلان
                    </button>
                    <div className='text-primary text-[14px] md:text-[16px] lg:text-[25px] font-semibold '> {error}</div>

                </form>
            </div>
        </div>
    );
};

export default UpdatePostEstate;
