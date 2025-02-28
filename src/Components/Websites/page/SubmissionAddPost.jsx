import React from "react";

import { Link } from "react-router-dom";

const SubmissionAddPost = ({ onClose }) => {
    return (
        <div className="fixed z-50 inset-0 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-background rounded-10px border-2 border-primary  w-[80%] md:w-[60%] lg:w-fit  flex flex-col gap-7  relative py-7 p-5 ">



                {/* رسالة انتظار */}
                <p className=" text-[20px] md:text-[25px]  text-primary font-semibold">
                    تم إرسال إعلانك بنجاح!

                </p>
                <p className=" text-[15px] md:text-[20px]">
                    يرجى الانتظار حتى يتم مراجعته والموافقة عليه من قبل المشرف.
                </p>

                    <Link to={'/'} className="w-[200px] mx-auto h-[60px] lg:h-[76px]
                     flex justify-center items-center rounded-10px bg-primary text-white text-[20px]  md:text-[25px]" >تخطي </Link>

            </div>
        </div>
    );
};

export default SubmissionAddPost;
