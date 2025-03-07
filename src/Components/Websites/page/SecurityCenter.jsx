import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import Navbar from '../Header/Navbar';

const SecurityCenter = () => {
  
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
          مركز الأمان في دلال
        </h1>

        {/* Introduction Section */}
        <section className="mb-8">
          <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed">
            في "دلال"، نحرص على أن تكون المنصة بيئة آمنة وموثوقة لكافة المستخدمين، سواء كانوا بائعين أو مشترين. ونظرًا لأن التجارة الإلكترونية تتطلب درجة عالية من الأمان والشفافية، فإننا نقدم مجموعة من الإرشادات والتدابير الأمنية لحماية المستخدمين من الاحتيال، وضمان إجراء المعاملات بأمان وسهولة. يتضمن مركز الأمان في "دلال" نصائح وإرشادات حول كيفية البيع والشراء بأمان، وكيفية التعامل مع حالات الاحتيال أو السلوكيات المخالفة، إضافةً إلى مجموعة من ضوابط الأمان التي تعزز الثقة داخل المنصة.
          </p>
        </section>

        {/* Safe Buying and Selling Guidelines Section */}
        <section className="mb-8">
          <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-4">
            إرشادات البيع والشراء بأمان
          </h2>
          <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed">
            الالتزام ببعض الإرشادات البسيطة يمكن أن يساعد المستخدمين في تجنب الاحتيال أو التعرض لمعاملات غير آمنة. لذلك، نوصي بما يلي:
          </p>
          <ul className="list-disc list-inside space-y-3 mt-3">
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed"> <span className='font-bold'>اللقاء في أماكن عامة وآمنة:</span> عند إجراء عمليات الشراء أو البيع المباشر، يُفضل اللقاء في أماكن معروفة ومزدحمة مثل المقاهي أو المراكز التجارية أو الأماكن التي يوجد بها كاميرات مراقبة لضمان الأمان لكلا الطرفين.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed"><span className='font-bold'> عدم مشاركة المعلومات الحساسة: </span> تجنب مشاركة أي معلومات حساسة مثل بيانات الحساب البنكي، أرقام البطاقات الائتمانية، أو معلومات الدخول إلى حسابك في "دلال" مع أي شخص.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed"> <span className='font-bold'>فحص السلعة جيدًا قبل الشراء:</span> تأكد من معاينة السلعة شخصيًا قبل دفع أي مبلغ مالي، وتأكد من أنها تتطابق مع المواصفات المذكورة في الإعلان.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed"> <span className='font-bold'>تجنب الدفع المسبق:</span> لا تقم بتحويل الأموال قبل استلام المنتج أو التأكد من جدية البائع، خاصة عند التعامل مع أشخاص غير موثقين داخل المنصة.</li>
          </ul>
        </section>

        {/* Dealing with Fraud Section */}
        <section className="mb-8">
          <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-4">
            التعامل مع الاحتيال والإبلاغ عنه
          </h2>
          <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed mb-2">
            رغم جهودنا في مكافحة الاحتيال، قد يحاول بعض الأفراد استغلال المنصة لأغراض غير قانونية. في حال واجهت عملية مشبوهة أو اشتبهت في إعلان احتيالي، يمكنك اتباع الخطوات التالية:
          </p>
          <ul className="list-disc list-inside space-y-3 mt-3">
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed"> <span className='font-bold'>الإبلاغ عن الإعلان أو المستخدم:</span> كل إعلان يحتوي على خيار "الإبلاغ عن إساءة"، حيث يمكنك استخدامه لتنبيه فريق الدعم حول أي نشاط مشبوه أو إعلان غير مطابق للسياسات.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed"> <span className='font-bold'>التواصل مع فريق الدعم الفني:</span> في حال تعرضت لمحاولة احتيال، يمكنك التواصل معنا مباشرة عبر صفحة "اتصل بنا"، وسنتخذ الإجراءات اللازمة لحل المشكلة.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed"> <span className='font-bold'>التعاون مع الجهات المختصة:</span> إذا كنت ضحية لعملية احتيال مالي، فمن الأفضل تقديم بلاغ رسمي للجهات المختصة في سوريا، حيث يمكننا تزويد الجهات الأمنية بالمعلومات اللازمة لمساعدتها في التحقيق.</li>
          </ul>
        </section>

        {/* Security Measures Section */}
        <section className="mb-8">
          <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-4">
            ضوابط الأمان داخل المنصة
          </h2>
          <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed mb-2">
            تعمل "دلال" على حماية المستخدمين من خلال مجموعة من التقنيات والتدابير الأمنية التي تهدف إلى تعزيز الموثوقية داخل المنصة، ومنها:
          </p>
          <ul className="list-disc list-inside space-y-3 mt-3">
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed" > <span className='font-bold'>استخدام التحقق الثنائي (Two-Factor Authentication - 2FA):</span> عند تسجيل الدخول أو تنفيذ إجراءات حساسة، يمكن تفعيل التحقق عبر رمز يُرسل إلى الهاتف أو البريد الإلكتروني لضمان أمان الحساب.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed"><span className='font-bold'>  مراقبة الإعلانات وحذف المحتوى المخالف:</span> يتم فحص الإعلانات للتأكد من عدم انتهاكها للسياسات، كما يتم حذف الإعلانات غير القانونية أو المشبوهة تلقائيًا.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed"> <span className='font-bold'>تحديث الحسابات وكلمات المرور بانتظام:</span> يُنصح المستخدمون بتحديث كلمات المرور بشكل دوري وعدم استخدام نفس كلمة المرور عبر منصات متعددة لتجنب الاختراق.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed"> <span className='font-bold'>الحد من الحسابات الوهمية:</span> يتم التحقق من المستخدمين عبر رقم الهاتف والبريد الإلكتروني، مع إمكانية فرض متطلبات تحقق إضافية للحسابات ذات الأنشطة التجارية الكبيرة.</li>
          </ul>
        </section>

        {/* Commitment Section */}
        <section className="mb-8">
          <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-4">
            التزام دلال بتوفير بيئة آمنة
          </h2>
          <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed mb-2">
            نحن في "دلال" ندرك أن الأمان هو حجر الأساس لأي منصة إلكترونية ناجحة. لذلك، نسعى جاهدين لتقديم تجربة استخدام خالية من المخاطر، مع توفير جميع الأدوات والإرشادات التي تُمكّن المستخدمين من إجراء معاملات موثوقة وآمنة. إذا كنت بحاجة إلى أي مساعدة أو لديك استفسارات بخصوص الأمان داخل المنصة، لا تتردد في التواصل مع فريق الدعم الخاص بنا.
          </p>
        </section>

        {/* Conclusion Section */}
        <section className="mb-8">
          <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed mb-2">
            إن التزامك بهذه الإرشادات واتخاذ الاحتياطات اللازمة أثناء التعاملات عبر "دلال" سيساهم في جعل المنصة مكانًا أكثر أمانًا لجميع المستخدمين، مما يعزز الثقة والشفافية في سوق الإعلانات المبوبة داخل سوريا.
          </p>
        </section>
      </div>
      </div>
    </div>
  );
};

export default SecurityCenter;