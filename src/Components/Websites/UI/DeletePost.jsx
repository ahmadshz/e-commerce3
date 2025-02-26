import React from 'react';

const DeletePost = ({ closeDelete, deletePost }) => {
    return (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center">
            <div className="h-[313px] w-[700px] bg-[#F9F9F9] rounded-lg border-2 border-primary flex flex-col justify-evenly p-[20px]">
                <h1 className="text-[25px] font-bold text-primary">مسح الاعلان</h1>
                <h2 className="text-[20px] font-semibold">هل أنت متأكد أنك تريد مسح الاعلان ؟</h2>
                <div className="flex w-full justify-between gap-4">
                    <div
                        onClick={deletePost} // Call deletePost when "نعم" is clicked
                        className="bg-primary text-white w-[220px] h-[70px] text-[25px] font-bold flex items-center justify-center rounded-lg cursor-pointer"
                    >
                        نعم
                    </div>
                    <div
                        onClick={closeDelete} // Close the modal when "لا" is clicked
                        className="bg-[#009C46] text-white w-[220px] h-[70px] text-[25px] font-bold flex items-center justify-center rounded-lg cursor-pointer"
                    >
                        لا
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeletePost;