import React, { useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../../Api/Api'; // Adjust the path as needed
import Cookies from 'universal-cookie';
import { IoIosCamera } from 'react-icons/io';

const AddPostForm = () => {
    const [images, setImages] = useState([]); // State for post images
    const [loading, setLoading] = useState(false); // State for loading state
    const [error, setError] = useState(''); // State for error messages
    const [success, setSuccess] = useState('');
    const cookies = new Cookies();
    const token = cookies.get('auth_token');




    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form behavior



        setLoading(true); // Start loading
        setError(''); // Clear previous errors
        setSuccess(''); // Clear previous success messages

        try {
            // Create a FormData object to send the images and title
            const formData = new FormData();
            images.forEach((image) => {
                formData.append('image', image);
            });


            // Send the POST request to the backend
            const response = await axios.post(`${baseUrl}/img/upload-sponsor`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.data) {
                setSuccess('تمت إضافة الإعلان بنجاح!');
                setImages([]); // Clear the images input
            }
        } catch (error) {
            setError('حدث خطأ أثناء إضافة الإعلان. الرجاء المحاولة مرة أخرى.');
            console.error('Error adding post:', error);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    // Handle images file input change
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 5) {
            setError('يمكنك تحميل ما يصل إلى 5 صور فقط.');
            return;
        }
        setImages(files);
    };

    return (
        <div className="min-h-screen flex justify-center items-center p-6">
            <div className="bg-background p-8 rounded-lg h-fit w-full max-w-md shadow-lg">
                <h1 className="text-2xl font-bold text-primary mb-6 text-center">إضافة إعلان جديد</h1>

                {/* Display error message */}
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}

                {/* Display success message */}
                {success && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                        {success}
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    {/* Title Input */}

                    {/* Images Input */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            الصور
                        </label>
                        <div className="relative w-full h-20 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-primary transition duration-200">
                            {/* Placeholder */}
                            <div className="text-center text-gray-500">
                                {images.length > 0 ? (
                                    <span>{images.length} صورة مختارة</span>
                                ) : (
                                    <span>انقر هنا لرفع الصور</span>
                                )}
                            </div>

                            {/* File Input */}
                            <input
                                type="file"
                                multiple
                                accept="image/*" // Allow only image files
                                onChange={handleFileChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />

                            {/* Camera Icon */}
                            <IoIosCamera size={24} className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500" />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition duration-200"
                    >
                        {loading ? 'جاري الإضافة...' : 'إضافة الإعلان'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddPostForm;