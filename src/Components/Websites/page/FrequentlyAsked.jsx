import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import Navbar from '../Header/Navbar';

const FrequentlyAsked = () => {

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
                <div className="container mx-auto bg-background p-8 rounded-10px">
                    {/* Title */}
                    <h1 className="text-[20px] lg:text-[25px] font-bold text-primary mb-6">
                        الأسئلة الشائعة في دلال
                    </h1>

                    {/* FAQ Sections */}
                    <section className="mb-8">
                        <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">كيف يمكنني التسجيل في دلال؟</h2>
                        <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed">
                            يمكنك التسجيل في "دلال" بسهولة عبر زيارة الموقع الرسمي، ثم النقر على زر "إنشاء حساب جديد". بعد ذلك، ستحتاج إلى إدخال اسم المستخدم، البريد الإلكتروني، رقم الهاتف، وكلمة المرور، ثم إكمال عملية التحقق من خلال إدخال الرمز المرسل إلى رقم هاتفك أو بريدك الإلكتروني. بمجرد تأكيد الحساب، يمكنك البدء في استخدام المنصة.          </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">هل أحتاج إلى توثيق حسابي بعد التسجيل؟</h2>
                        <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed">
                            نعم، يُطلب من جميع المستخدمين توثيق حساباتهم من خلال رقم الهاتف أو البريد الإلكتروني. هذه الخطوة ضرورية لضمان أمان الحسابات والحد من الحسابات الوهمية. قد يتم لاحقًا إضافة طرق تحقق إضافية مثل توثيق الهوية الوطنية لبعض الفئات لضمان مزيد من الأمان.          </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">كيف يمكنني نشر إعلان جديد؟</h2>
                        <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed">
                            بعد تسجيل الدخول إلى حسابك، انتقل إلى الصفحة الرئيسية واضغط على "أضف إعلانًا جديدًا". اختر الفئة المناسبة للإعلان، وأضف تفاصيل المنتج أو الخدمة التي ترغب في عرضها، مثل العنوان، الوصف، السعر، الصور، وموقعك الجغرافي. بعد مراجعة الإعلان، اضغط على "نشر"، وسيكون إعلانك متاحًا للمشاهدين          </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">هل هناك رسوم على نشر الإعلانات؟</h2>
                        <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed">
                            لا، نشر الإعلانات الأساسية في "دلال" مجاني تمامًا. ومع ذلك، هناك خيارات إضافية مثل تمييز الإعلان أو تثبيته في الصدارة مقابل رسوم رمزية، مما يساعد على زيادة فرص مشاهدة إعلانك بشكل أكبر وأسرع.          </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">كيف يمكنني تعديل أو حذف إعلاني؟</h2>
                        <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed">
                            لتعديل إعلانك، قم بتسجيل الدخول وانتقل إلى "إعلاناتي"، ثم اختر الإعلان الذي ترغب في تعديله واضغط على "تعديل". يمكنك تغيير أي تفاصيل ترغب بها، ثم حفظ التعديلات. لحذف إعلان، انتقل إلى نفس الصفحة واضغط على "حذف"، وسيتم إزالة الإعلان نهائيًا.          </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">كم مدة بقاء الإعلان على الموقع؟</h2>
                        <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed">
                            يبقى الإعلان منشورًا لمدة 10 أيام، وبعدها يتم حذفه تلقائيًا. ومع ذلك، يمكنك تجديده قبل انتهاء المدة بيومين ليبقى نشطًا لمدة 5 أيام إضافية.              </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">كيف أبحث عن إعلان معين في دلال؟</h2>
                        <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed">
                            يمكنك استخدام شريط البحث في أعلى الصفحة لإدخال الكلمات المفتاحية المتعلقة بالإعلان الذي تبحث عنه. كما يمكنك تصفح الفئات المختلفة أو استخدام الفلاتر المتاحة لتضييق نطاق البحث وفقًا للسعر، الموقع، أو نوع المنتج.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">كيف يمكنني التواصل مع البائع؟</h2>
                        <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed">
                            بعد العثور على الإعلان الذي يهمك، يمكنك التواصل مع البائع مباشرة عبر رقم الهاتف المتاح في الإعلان، أو من خلال الرسائل داخل الموقع إذا كان البائع قد فعّل هذه الخاصية. يُنصح دائمًا بالتواصل عبر المنصة لضمان الأمان.                    </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">ماذا أفعل إذا تعرضت لعملية احتيال؟</h2>
                        <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed">
                            إذا شعرت أنك تعرضت لاحتيال، قم فورًا بالإبلاغ عن المستخدم من خلال خيار "الإبلاغ عن إساءة" المتاح في الإعلان. كما يمكنك التواصل مع فريق دعم "دلال" لمساعدتك في اتخاذ الإجراءات المناسبة. في بعض الحالات، يمكنك تقديم شكوى رسمية إلى الجهات المختصة وفقًا للقوانين السورية.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">هل يمكنني استرجاع حسابي إذا فقدت كلمة المرور؟</h2>
                        <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed">
                            نعم، يمكنك استعادة حسابك بسهولة من خلال النقر على "نسيت كلمة المرور"، وإدخال بريدك الإلكتروني أو رقم هاتفك المسجل. سيتم إرسال رابط إعادة تعيين كلمة المرور، وبعدها يمكنك إنشاء كلمة مرور جديدة وتسجيل الدخول مجددًا.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">ما هي شروط استخدام دلال؟</h2>
                        <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed">
                            يجب أن يكون المستخدم قد بلغ السن القانوني (18 عامًا فأكثر)، وألا يستخدم المنصة لنشر إعلانات مخالفة للقوانين أو تتضمن محتوى مضللًا أو احتياليًا. يُحظر أيضًا التلاعب بالأسعار، أو نشر إعلانات مكررة بهدف إزعاج المستخدمين.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">هل يمكنني الإعلان عن أي منتج أو خدمة على دلال؟</h2>
                        <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed">
                            نعم، يمكنك الإعلان عن العديد من المنتجات والخدمات، ولكن هناك قائمة بالسلع والخدمات الممنوعة وفقًا للقوانين السورية، مثل الأسلحة، المخدرات، المواد الممنوعة، والإعلانات ذات الطابع الاحتيالي أو غير الأخلاقي. يمكنك الاطلاع على القائمة الكاملة للمنتجات والخدمات المحظورة في صفحة "سياسة النشر".
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">كيف يمكنني تمييز إعلاني ليظهر في أعلى نتائج البحث؟</h2>
                        <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed">
                            يمكنك الاستفادة من خدمة "تمييز الإعلان" عبر دفع رسوم رمزية، مما يجعل إعلانك يظهر في أعلى الصفحة داخل الفئة الخاصة به، ويزيد من فرص وصول المشترين إليه بشكل أسرع.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">هل يمكنني استخدام دلال من خارج سوريا؟</h2>
                        <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed">
                            في الوقت الحالي، يركز "دلال" على السوق السوري، ولكن يمكن للمستخدمين من خارج سوريا تصفح الإعلانات والتواصل مع البائعين إذا كانوا مهتمين بإجراء عمليات شراء داخل البلاد.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">كيف يمكنني التواصل مع دعم العملاء في دلال؟</h2>
                        <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed">
                            إذا واجهتك أي مشكلة أو كان لديك استفسار، يمكنك التواصل مع فريق الدعم الفني عبر البريد الإلكتروني، فريق الدعم متاح للمساعدة في حل أي مشاكل تواجهها أثناء استخدام المنصة.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default FrequentlyAsked;