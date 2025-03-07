import React from 'react';
import Navbar from '../Header/Navbar';
import { HiOutlineArrowRight } from 'react-icons/hi';

const PrivacyPolicy = () => {

    const goBack = () => {
        window.history.back();
    };

    return (
        <div className='min-h-screen flex flex-col gap-4 lg:gap-10'>
            <Navbar />
            <div

                className='container '>
                <HiOutlineArrowRight onClick={goBack} className=' text-[30px] h-[30px] lg:h-[50px] lg:text-[45px]  ' />
            </div>
            <div className='pb-10 lg:pb-20'>
                <div className="container mx-auto bg-background  p-8 rounded-10px">
                    {/* Title */}
                    <h1 className="text-[20px] lg:text-[25px] font-bold text-primary mb-6">
                        سياسة الخصوصية في "دلال"
                    </h1>

                    {/* Introduction Section */}
                    <section className="mb-8">
                        <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed ">
                            في "دلال"، نؤمن بأن خصوصية المستخدمين هي من أولوياتنا، ونعمل باستمرار على حماية بياناتهم وضمان استخدامها بالشكل الصحيح وفقًا للقوانين السورية المتعلقة بحماية البيانات الشخصية والمعاملات الإلكترونية. تهدف سياسة الخصوصية هذه إلى توضيح كيفية جمع المعلومات، استخدامها، حمايتها، ومشاركتها عند استخدام منصتنا. إن استمرارك في استخدام "دلال" يعني موافقتك على هذه السياسة والتزامك بها.
                        </p>
                    </section>

                    {/* Data Collection Section */}
                    <section className="mb-8">
                        <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">
                            1. جمع المعلومات
                        </h2>
                        <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed ">
                            عند استخدام منصة "دلال"، نقوم بجمع بعض المعلومات الضرورية لضمان تقديم أفضل تجربة ممكنة للمستخدمين. تشمل البيانات التي نقوم بجمعها:
                        </p>
                        <ul className="list-disc list-inside space-y-3 mt-3">
                            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed "> <span className='font-bold'>المعلومات الشخصية:</span> مثل الاسم، البريد الإلكتروني، رقم الهاتف، والعنوان الجغرافي إذا تم إدخاله يدويًا.</li>
                            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed "> <span className='font-bold'>بيانات الحساب:</span> اسم المستخدم، كلمة المرور، وتفضيلات الاستخدام.</li>
                            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed "> <span className='font-bold'>معلومات الجهاز:</span> نوع الجهاز المستخدم، نظام التشغيل، المتصفح، وعنوان الـ IP.</li>
                            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed "> <span className='font-bold'> بيانات الاستخدام:</span> الصفحات التي تزورها، مدة الجلسة، وتفضيلات البحث الخاصة بك.</li>
                            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed "> <span className='font-bold'>  معلومات الدفع:</span> في حال استخدام الخدمات المدفوعة، قد نقوم بجمع معلومات الفواتير ومعالجة المدفوعات من خلال جهات دفع موثوقة.</li>
                        </ul>
                    </section>

                    {/* Data Usage Section */}
                    <section className="mb-8">
                        <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">
                            2. كيفية استخدام البيانات
                        </h2>
                        <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed  ">
                            نستخدم البيانات التي يتم جمعها للأغراض التالية:
                        </p>
                        <ul className="list-disc list-inside space-y-3 mt-3">
                            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed "> <span className='font-bold'>تحسين تجربة المستخدم:</span> تحليل تفضيلات المستخدمين لتحسين عرض المحتوى والخدمات.</li>
                            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed "> <span className='font-bold'>إدارة الحسابات:</span> السماح للمستخدمين بالتحكم في حساباتهم، تعديل إعلاناتهم، وإدارة سجل نشاطهم على المنصة.</li>
                            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed "> <span className='font-bold'>التواصل مع المستخدمين:</span> إرسال الإشعارات، العروض، والتحديثات حول سياسات المنصة.</li>
                            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed "> <span className='font-bold'>منع الاحتيال وحماية المستخدمين:</span> التحقق من الحسابات، الكشف عن الأنشطة غير المشروعة، واتخاذ الإجراءات اللازمة ضد المخالفات.</li>
                            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed "><span className='font-bold'> تحليل الأداء وتطوير المنصة:</span> فهم كيفية استخدام المنصة بهدف تحسين الخدمات والأمان.</li>
                        </ul>
                    </section>

                    {/* Data Protection Section */}
                    <section className="mb-8">
                        <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">
                            3. حماية البيانات
                        </h2>
                        <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed  ">
                            نحن نلتزم بتطبيق أعلى معايير الأمان لحماية بيانات المستخدمين من الوصول غير المصرح به أو التسريب. وتشمل التدابير الأمنية المتبعة:
                        </p>
                        <ul className="list-disc list-inside space-y-3 mt-3">
                            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed ">  <span className='font-bold'>تشفير البيانات:</span> يتم تشفير جميع البيانات الحساسة أثناء النقل والتخزين لحماية خصوصية المستخدمين.</li>
                            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed "> <span className='font-bold'>استخدام أنظمة الأمان المتقدمة:</span> مثل الجدران النارية (Firewalls) وتقنيات الحماية ضد الهجمات الإلكترونية.</li>
                            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed "> <span className='font-bold'>تحديثات أمنية دورية:</span> نقوم بمراجعة سياسات الأمان وإجراء التحديثات المستمرة لأنظمة الحماية.</li>
                        </ul>
                    </section>

                    {/* Data Sharing Section */}
                    <section className="mb-8">
                        <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">
                            4. مشاركة البيانات
                        </h2>
                        <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed  ">
                            في "دلال"، لا نقوم ببيع أو مشاركة بيانات المستخدمين مع أطراف خارجية دون موافقتهم، إلا في الحالات التالية:
                        </p>
                        <ul className="list-disc list-inside space-y-3 mt-3">
                            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed "> <span className='font-bold'>بموافقة المستخدم:</span> عند الاشتراك في خدمات تتطلب مشاركة البيانات مع أطراف موثوقة.</li>
                            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed " > <span className='font-bold'> للامتثال للقوانين:</span> إذا طُلب منا قانونيًا مشاركة بعض البيانات مع الجهات الحكومية المختصة وفقًا للقوانين السورية.</li>
                            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed "> <span className='font-bold'>منع الاحتيال وحماية حقوق المستخدمين:</span> عند الحاجة إلى التحقيق في نشاط مشبوه أو حالات احتيال.</li>
                        </ul>
                    </section>

                    {/* Cookies Section */}
                    <section className="mb-8">
                        <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">
                            5. ملفات تعريف الارتباط (Cookies)
                        </h2>
                        <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed  ">
                            نستخدم ملفات تعريف الارتباط لتحسين أداء المنصة وتوفير تجربة مخصصة للمستخدمين، وتشمل:
                        </p>
                        <ul className="list-disc list-inside space-y-3 mt-3">
                            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed ">  <span className='font-bold'>ملفات تعريف الارتباط الأساسية:</span> تتيح تسجيل الدخول والبقاء مسجلًا دون الحاجة لإعادة إدخال بياناتك في كل مرة.</li>
                            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed "><span className='font-bold'> ملفات تعريف الارتباط التحليلية: </span> تساعدنا في تحسين الموقع من خلال تتبع كيفية استخدام المستخدمين للخدمات.</li>
                            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed "><span className='font-bold'> ملفات تعريف الارتباط الإعلانية:</span> تُستخدم لعرض إعلانات مخصصة تتناسب مع اهتماماتك.</li>
                        </ul>
                        <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed   mt-3">
                            يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك، ولكن تعطيلها قد يؤثر على بعض ميزات الموقع.
                        </p>
                    </section>

                    {/* User Rights Section */}
                    <section className="mb-8">
                        <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">
                            6. حقوق المستخدمين
                        </h2>
                        <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed  ">
                            لديك الحق في:
                        </p>
                        <ul className="list-disc list-inside space-y-3 mt-3">
                            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed "> <span className='font-bold'>الوصول إلى بياناتك الشخصية:</span> يمكنك طلب الحصول على نسخة من بياناتك الشخصية المخزنة لدينا.</li>
                            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed "><span className='font-bold'> تعديل أو حذف بياناتك:</span> يمكنك تعديل بياناتك أو طلب حذف حسابك في أي وقت.</li>
                            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed "> <span className='font-bold'>إلغاء الاشتراك في الإشعارات الترويجية:</span> يمكنك تعطيل استقبال الرسائل الإعلانية من خلال إعدادات الحساب.</li>
                        </ul>
                    </section>

                    {/* Policy Updates Section */}
                    <section className="mb-8">
                        <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">
                            7. التعديلات على سياسة الخصوصية
                        </h2>
                        <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed  ">
                            قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر لمواكبة التغيرات القانونية والتقنية. سيتم إخطار المستخدمين بأي تغييرات جوهرية عبر البريد الإلكتروني أو من خلال إشعار على المنصة. نوصي بمراجعة هذه السياسة بشكل دوري للبقاء على اطلاع على كيفية حماية بياناتك.
                        </p>
                    </section>

                    {/* Contact Section */}
                    <section className="mb-8">
                        <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">
                            8. التواصل معنا
                        </h2>
                        <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed  ">
                            إذا كان لديك أي استفسارات أو مخاوف بشأن سياسة الخصوصية، يمكنك التواصل مع فريق الدعم عبر البريد الإلكتروني أو من خلال نموذج الاتصال المتاح على موقع "دلال".
                        </p>
                    </section>

                    {/* Conclusion Section */}
                    <section className="mb-8">
                        <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed  ">
                            تلتزم "دلال" بالحفاظ على أمان وخصوصية المستخدمين، ونحرص على أن تكون جميع البيانات المستخدمة ضمن الإطار القانوني لضمان تجربة موثوقة للجميع.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;