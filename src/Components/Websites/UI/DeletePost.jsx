import React from 'react';

const DeletePost = ({ closeDelete, deletePost, isDeleting }) => {
    return (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-[#F9F9F9] rounded-10px border-2 border-primary p-[20px] w-[85%] md:w-[500px] h-[313px] flex flex-col justify-evenly shadow-lg">
                <h1 className="text-[20px] md:text-[25px] font-bold text-primary text-center md:text-start">
                    مسح الاعلان
                </h1>
                <h2 className="text-[16px] md:text-[20px] font-semibold text-center md:text-start">
                    هل أنت متأكد أنك تريد مسح الاعلان ؟
                </h2>
                <div className="flex flex-col md:flex-row w-full justify-between gap-4">
                    <button
                        disabled={isDeleting === true}
                        onClick={deletePost}
                        className="bg-primary cursor-pointer text-white w-full md:w-[220px] h-[50px] md:h-[60px] xl:h-[70px] text-[16px] md:text-[20px] font-bold flex items-center justify-center rounded-10px"
                    >
                        {isDeleting ? 'جاري الحذف...' : 'نعم'}
                    </button>
                    <div
                        onClick={closeDelete}
                        className="bg-[#009C46] cursor-pointer text-white w-full md:w-[220px] h-[50px] md:h-[60px] xl:h-[70px] text-[16px] md:text-[25px] font-bold flex items-center justify-center rounded-10px"
                    >
                        لا
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeletePost;