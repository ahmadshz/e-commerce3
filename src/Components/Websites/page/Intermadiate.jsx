import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Use useLocation and useNavigate

const Intermediate = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const targetPath = location.state?.targetPath || '/';

    const rules = [
        {
            title: "مسؤولية المعلن",
            items: [
                "المعلن مسؤول عن صحة جميع المعلومات في الإعلان.",
                "يجب أن يكون الإعلان قانونيًا ولا يحتوي على محتوى غير لائق أو مخالف للقوانين المحلية.",
            ],
        },
        {
            title: "المحتوى المحظور",
            items: [
                "يحظر نشر الإعلانات التي تحتوي على مواد غير قانونية أو مضللة أو خادعة.",
                "يحظر الترويج للمنتجات المحظورة.",
            ],
        },
        {
            title: "حقوق الموقع",
            items: [
                "يحق للموقع حذف أو تعديل أي إعلان يخالف الشروط.",
                "يتم مسح الاعلان في خلال خمسة عشر يوما ولكن يمكنك تحديث الاعلان قبل انتهاء مدته بيومين ويحدث لمدة خمسة ايام اضافية فقط.",
            ],
        },
        {
            title: "حماية البيانات الشخصية",
            items: [
                "الموقع يحترم خصوصية بيانات المعلنين ويعمل على حمايتها.",
            ],
        },
    ];

    // Handle accepting the terms
    const handleAccept = () => {
        navigate(targetPath);
    };

    return (
        <div className="min-h-screen flex justify-center md:items-center container bg-white p-6 rounded-10px">
            <div className="container h-auto bg-background py-[20px]">
                <h1 className="text-[20px] lg:text-[25px] text-primary font-bold my-[10px] xl:my-5 ">
                    بإضافة إعلانك على موقع دلال، فإنك توافق على الالتزام بشروط هذه الاتفاقية :
                </h1>
                <div className="grid lg:grid-cols-2 my-[10px] xl:my-5 gap-5 xl:gap-8">
                    {rules.map((rule, index) => (
                        <div key={index} className="my-[10px] xl:my-5 ">
                            <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-4">{rule.title}</h2>
                            <ul className="list-disc list-inside space-y-3">
                                {rule.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className=" font-normal text-[13px] lg:text-[17px]">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <h1 className="text-placeholder text-[16px] lg:text-[20px] font-bold my-[10px] xl:my-5 ">
                    القانون المعمول به: تخضع هذه الاتفاقية لقوانين الجمهورية العربية السورية.
                </h1>
                <div className="my-[10px] xl:my-5 ">
                    <h1 className="text-primary text-[16px] lg:text-[20px] font-semibold">رسوم الأعلان هي صفر ليرة سورية,</h1>
                    <h1 className="text-primary text-[16px] lg:text-[20px] font-semibold">يداّ بيد نعمر سوريا المستقبل</h1>
                </div>
                <div
                    onClick={handleAccept}
                    className="bg-primary flex justify-center items-center rounded-10px h-[60px] md:h-[76px]  w-full md:w-[180px] xl:w-[211px] text-white text-[20px] lg:text-[25px] font-bold xl:my-5  cursor-pointer"
                >
                    موافق
                </div>
            </div>
        </div>
    );
};

export default Intermediate;