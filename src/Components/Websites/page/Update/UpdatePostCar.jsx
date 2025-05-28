import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { data, location } from '../../../../utils/data';
import { IoIosCamera } from 'react-icons/io';
import Dropdown from '../../UI/Dropdowns';
import RadioButton from '../../UI/RadioButton';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Loading from '../Loading';
import { baseUrl } from '../../../../Api/Api';

const UpdatePostCar = () => {
  const { id } = useParams(); // Get the post ID from URL
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [condition, setCondition] = useState('');
  const [transmission, setTransmission] = useState('');
  const [title, setTitle] = useState('');
  const [images, setImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [priceSYP, setPriceSYP] = useState('');
  const [priceUSD, setPriceUSD] = useState('');
  const [mileage, setMileage] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLoadingPost, setIsLoadingPost] = useState(true);

  const cookies = new Cookies();
  const token = cookies.get('auth_token');
  const category = 'car';

  const navigate = useNavigate();

  // Fetch existing post data
  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/ad/${id}`);

        const postData = response.data;
        console.log(response)
        setTitle(postData.title);
        setSelectedLocation(postData.location);
        setSelectedBrand(postData.vehicleType);
        setCondition(postData.condition);
        setTransmission(postData.transmission);
        setPriceSYP(postData.priceSYP);
        setPriceUSD(postData.priceUSD);
        setMileage(postData.mileage);
        setDescription(postData.description);
        setExistingImages(postData.images || []);

        setIsLoadingPost(false);
      } catch (error) {
        console.error('Error fetching post data:', error);
        setError('Failed to load post data');
        setIsLoadingPost(false);
      }
    };

    if (id) {
      fetchPostData();
    }
  }, [id, token]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + existingImages.length > 5) {
      setError('يمكنك تحميل ما يصل إلى 5 صور فقط.');
      return;
    }
    setImages(files);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    const validations = [
      { condition: !title, message: 'يرجى إدخال العنوان' },
      { condition: !selectedLocation, message: 'يرجى اختيار الموقع' },
      { condition: !selectedBrand, message: 'يرجى اختيار الماركة' },
      { condition: !condition, message: 'يرجى تحديد الحالة' },
      { condition: !transmission, message: 'يرجى تحديد القير' },
      { condition: !mileage, message: 'يرجى إدخال عدد الممشى' },
      { condition: !priceSYP, message: 'يرجى إدخال السعر بالليرة السورية' },
      { condition: !priceUSD, message: 'يرجى إدخال السعر بالدولار الأمريكي' },
      { condition: !description, message: 'يرجى إدخال الوصف' },
      { condition: images.length === 0 && existingImages.length === 0, message: 'يرجى إضافة صورة واحدة على الأقل' },
    ];

    for (let rule of validations) {
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

    const formData = new FormData();
    formData.append('title', title);
    formData.append('location', selectedLocation);
    formData.append('condition', condition);
    formData.append('priceSYP', priceSYP);
    formData.append('priceUSD', priceUSD);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('transmission', transmission);
    formData.append('vehicleType', selectedBrand);
    formData.append('mileage', mileage);

    // Append new images
    images.forEach((image) => {
      formData.append('images', image);
    });

    // Append images to delete (none in this case, but you could add this functionality)
    // formData.append('imagesToDelete', JSON.stringify(imagesToDelete));

    try {
      // Update existing post
      await axios.put(`${baseUrl}/ad/${id}`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        },
      });
      navigate(`/myaccount`);
    } catch (error) {
      setError('حدث خطأ أثناء تحديث الإعلان. الرجاء المحاولة مرة أخرى.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (isLoadingPost) {
    return <Loading />;
  }

  return (
    <div>
      {loading && <Loading />}

      <div className='min-h-screen py-[50px] md:py-[100px] container flex items-center relative'>
        <form className='flex flex-col gap-5 md:gap-7 w-full px-4 md:px-0' onSubmit={handleSubmit}>
          {/* Title and Location Dropdown */}
          <div className='flex flex-col md:flex-row gap-5 w-full'>
            <div className='flex flex-col md:gap-2 lg:gap-5 w-full md:w-[867px]'>
              <label className='text-primary text-[14px] md:text-[16px] lg:text-[25px] font-bold'>عنوان الاعلان :</label>
              <input
                type='text'
                className='w-full h-[50px] md:h-[60px] lg:h-[76px] text-placeholder block
                                     border md:border-2 border-border rounded-10px text-[12px] md:text-[14px] lg:text-[20px]
                                      pr-2 md:pr-[10px] xl:pr-[20px] outline-none focus:outline-none focus:border-primary duration-200'
                placeholder='مثال : سيارة تويوتا يارس موديل 2024 فل كامل'
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
              className='w-full md:w-[560px]'
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

            {/* Condition (Used/New) Section */}
            <div className='flex flex-col md:gap-2 lg:gap-5 w-full md:w-1/3 lg:w-[340px] xl:w-[432px] 2xl:w-[560px] '>
              <label className='text-primary text-[14px] md:text-[16px] lg:text-[25px] font-bold'>الحالة :</label>
              <div className='flex gap-5'>
                <div className='w-full md:w-[560px] h-[50px] md:h-[60px] lg:h-[76px] flex gap-5'>
                  <RadioButton
                    label='مستعمل'
                    value='used'
                    name='status'
                    checked={condition === 'used'}
                    onChange={() => setCondition('used')}
                    className='w-1/2 md:w-[118px]'
                  />
                  <RadioButton
                    label='جديد'
                    value='new'
                    name='status'
                    checked={condition === 'new'}
                    onChange={() => setCondition('new')}
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
              options={data[0].brands.map((brand) => `${brand.arabic} (${brand.english})`)}
              selected={selectedBrand || 'اختر الماركة'}
              onSelect={setSelectedBrand}
              className='w-full md:w-[867px]'
            />

            {/* Gear */}
            <div className='flex flex-col md:gap-2 lg:gap-5 w-full md:w-[560px]'>
              <label className='text-primary text-[14px] md:text-[16px] lg:text-[25px] font-bold'>القير :</label>
              <div className='flex gap-5'>
                <div className='w-full h-[50px] md:h-[60px] lg:h-[76px] flex gap-5'>
                  <RadioButton
                    label='عادي'
                    value='manual'
                    name='gear'
                    checked={transmission === 'manual'}
                    onChange={() => setTransmission('manual')}
                    className='w-1/2 md:w-[118px]'
                  />
                  <RadioButton
                    label='أوتوماتيك'
                    value='automatic'
                    name='gear'
                    checked={transmission === 'automatic'}
                    onChange={() => setTransmission('automatic')}
                    className='w-1/2 md:w-[118px]'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Price and Mileage */}
          <div className='flex flex-col md:flex-row gap-5 w-full'>
            <div className='flex flex-col md:gap-2 lg:gap-5 w-full md:w-[867px]'>
              <label className='text-primary text-[14px] md:text-[16px] lg:text-[25px] font-bold'>السعر :</label>
              <div className='flex flex-col md:flex-row gap-2 lg:gap-5 w-full'>
                {/* Syrian Pounds Input */}
                <div className='relative w-full md:w-1/2'>
                  <input
                    placeholder='2000000'
                    className='w-full h-[50px] md:h-[60px] lg:h-[76px] text-placeholder border md:border-2
                                             border-border rounded-10px text-[12px] md:text-[14px] lg:text-[20px] pr-2 md:pr-[10px] xl:pr-[20px] outline-none focus:outline-none focus:border-primary duration-200 pl-10'
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
                    className='w-full h-[50px] md:h-[60px] lg:h-[76px] text-placeholder border md:border-2 border-border
                                             rounded-10px text-[12px] md:text-[14px] lg:text-[20px] pr-2 md:pr-[10px] xl:pr-[20px] outline-none focus:outline-none focus:border-primary duration-200 pl-10'
                    value={priceUSD}
                    onChange={(e) => setPriceUSD(e.target.value)}
                  />
                  <span className='absolute left-2 top-1/2 transform -translate-y-1/2 text-placeholder text-[12px] md:text-[14px] lg:text-[20px]'>
                    دولار أمريكي
                  </span>
                </div>
              </div>
            </div>

            {/* Mileage Input */}
            <div className='flex flex-col md:gap-2 lg:gap-5 w-full md:w-[560px]'>
              <label className='text-primary text-[14px] md:text-[16px] lg:text-[25px] font-bold'>الممشى :</label>
              <input
                type='text'
                placeholder='2000000'
                className='w-full h-[50px] md:h-[60px] lg:h-[76px] text-placeholder
                                     border md:border-2 border-border rounded-10px text-[12px] md:text-[14px] lg:text-[20px] pr-2 md:pr-[10px] xl:pr-[20px] outline-none focus:outline-none focus:border-primary duration-200 pl-10'
                value={mileage}
                onChange={(e) => setMileage(e.target.value)}
              />
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
            disabled={loading}
            className={`bg-primary ${loading ? 'opacity-50' : ''} h-[50px] md:h-[60px] lg:h-[76px] w-full md:w-[370px] 
                                lg:w-[426px] text-white text-[16px] lg:text-[25px] font-bold rounded-10px`}
          >
            {id ? 'تحديث الإعلان' : 'إنشاء إعلان'}
          </button>
          {error && <div className='text-primary font-semibold text-[14px] md:text-[16px] lg:text-[20px]'>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default UpdatePostCar;