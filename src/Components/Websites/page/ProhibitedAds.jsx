import React from 'react';

const ProhibitedAds = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto bg-background p-8 rounded-10px">
        {/* Title */}
        <h1 className="text-[20px] lg:text-[25px] font-bold text-primary mb-6">
          قائمة السلع والإعلانات الممنوعة في دلال
        </h1>

        {/* Introduction Section */}
        <section className="mb-8">
          <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed ">
            في إطار التزام منصة "دلال" بتوفير بيئة آمنة وموثوقة لجميع المستخدمين، تم وضع قائمة بالسلع والخدمات التي يُمنع الإعلان عنها، وذلك لضمان الامتثال للقوانين السورية وحماية المستخدمين من أي معاملات غير قانونية أو غير أخلاقية. يجب على جميع المعلنين مراجعة هذه القائمة قبل نشر أي إعلان، حيث سيتم حذف أي إعلان مخالف دون سابق إنذار، وقد يؤدي تكرار المخالفات إلى حظر الحساب نهائيًا.
          </p>
        </section>

        {/* Prohibited Items Section */}
        <section className="mb-8">
          <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">
            1. المواد المحظورة قانونيًا
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">الأسلحة النارية والذخائر بجميع أنواعها، بما في ذلك المسدسات والبنادق وأي معدات عسكرية.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">المواد المتفجرة، الألعاب النارية، والمواد الكيميائية الخطرة.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">المخدرات والمؤثرات العقلية، بما في ذلك الأدوية المخدرة غير المرخصة.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">العملات المزورة أو المزيفة، والسندات المالية المزورة.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">الأعضاء البشرية أو أي إعلان متعلق بالتبرع أو بيع الأعضاء.</li>
          </ul>
        </section>

        {/* Counterfeit Goods Section */}
        <section className="mb-8">
          <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">
            2. السلع غير المشروعة والمقلدة
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">السلع المسروقة أو المجهولة المصدر.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">المنتجات المقلدة أو المزيفة التي تنتهك حقوق الملكية الفكرية والعلامات التجارية المسجلة.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">الوثائق الحكومية المزورة أو بيع المستندات الرسمية مثل جوازات السفر، الهويات، ورخص القيادة.</li>
          </ul>
        </section>

        {/* Immoral Ads Section */}
        <section className="mb-8">
          <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">
            3. الإعلانات المخالفة للأخلاق العامة
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">المحتوى الإباحي أو أي مواد ذات طابع جنسي صريح.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">الإعلانات التي تحتوي على خطاب كراهية أو تحريض على العنف أو التمييز ضد فئة معينة.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">السلع والخدمات التي تروج للممارسات الدجلية أو الاحتيالية مثل الشعوذة والسحر وقراءة الفنجان.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">الملابس أو المنتجات التي تحتوي على شعارات أو رموز محظورة قانونيًا.</li>
          </ul>
        </section>

        {/* Financial and Fraudulent Services Section */}
        <section className="mb-8">
          <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">
            4. الخدمات المالية والاحتيالية
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">بيع الحسابات المزيفة أو الخدمات التي تهدف إلى الاحتيال، مثل الترويج للمراهنات والقمار.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">خدمات التلاعب بالتصنيفات أو المراجعات الوهمية على المواقع والتطبيقات.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">إعلانات القروض غير المرخصة، أو عروض التمويل المشبوهة التي لا تتبع الإجراءات القانونية المعتمدة.</li>
          </ul>
        </section>

        {/* Medicines and Medical Supplies Section */}
        <section className="mb-8">
          <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">
            5. الأدوية والمستلزمات الطبية
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">بيع الأدوية الموصوفة طبيًا دون ترخيص رسمي من الجهات المختصة.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">بيع اللقاحات والمعدات الطبية دون موافقة وزارة الصحة السورية.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">المنتجات التي يتم الترويج لها على أنها تعالج أمراضًا خطيرة دون إثبات طبي موثق.</li>
          </ul>
        </section>

        {/* Animals and Animal Products Section */}
        <section className="mb-8">
          <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">
            6. الحيوانات والمنتجات الحيوانية الممنوعة
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">بيع الحيوانات المهددة بالانقراض أو أي كائنات محمية بموجب القانون.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">بيع العاج أو المنتجات المصنوعة منه.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">الإعلان عن خدمات صيد غير قانونية أو تجارة الحيوانات البرية.</li>
          </ul>
        </section>

        {/* Illegal Devices and Software Section */}
        <section className="mb-8">
          <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">
            7. الأجهزة والبرامج غير القانونية
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">الأجهزة التي تهدف إلى فك تشفير القنوات التلفزيونية المشفرة بدون تصريح.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">البرمجيات التي تساعد في القرصنة أو الاختراق أو سرقة البيانات.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">الحسابات المسروقة على منصات الألعاب أو مواقع الاشتراكات المدفوعة.</li>
          </ul>
        </section>

        {/* Real Estate and Vehicles Section */}
        <section className="mb-8">
          <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">
            8. العقارات والسيارات المخالفة للقوانين
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">بيع العقارات التي لا تحمل أوراقًا قانونية سليمة أو التي تكون قيد نزاع قانوني.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">المركبات التي لا تملك وثائق تسجيل رسمية أو التي تكون مجهولة المصدر.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">إعلانات إيجار المنازل والشقق لأغراض غير قانونية أو غير أخلاقية.</li>
          </ul>
        </section>

        {/* Jobs and Services Section */}
        <section className="mb-8">
          <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">
            9. الوظائف والخدمات المخالفة
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">إعلانات التوظيف التي تروج لفرص عمل غير حقيقية أو تعتمد على نظام الاحتيال.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">عروض العمل التي تستغل الأفراد، مثل الوظائف الوهمية التي تطلب مبالغ مالية مسبقة.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">إعلانات التوظيف التي تتضمن تمييزًا عنصريًا أو تمييزًا على أساس الجنس أو الدين.</li>
          </ul>
        </section>

        {/* Misleading or Fraudulent Content Section */}
        <section className="mb-8">
          <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">
            10. المحتوى المضلل أو الاحتيالي
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">إعلانات العروض الوهمية التي تعد بمنتجات بأسعار غير واقعية لجذب العملاء.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">إعلانات الترويج لطرق الربح السريع المشبوهة عبر الإنترنت.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">الإعلانات التي تقدم معلومات خاطئة أو مضللة عن المنتجات والخدمات.</li>
          </ul>
        </section>

        {/* Penalties Section */}
        <section className="mb-8">
          <h2 className="text-[16px] lg:text-[20px] font-semibold text-primary mb-2">
            العقوبات على المخالفين
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">يتم حذف أي إعلان يخالف هذه القائمة على الفور.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">قد يتعرض المستخدم الذي ينشر إعلانات محظورة إلى إيقاف حسابه أو حظره نهائيًا.</li>
            <li className="font-normal text-[13px] lg:text-[17px] leading-relaxed">في الحالات الجسيمة، قد يتم إبلاغ الجهات القانونية المختصة لاتخاذ الإجراءات اللازمة.</li>
          </ul>
        </section>

        {/* Conclusion Section */}
        <section className="mb-8">
          <p className="font-normal text-[13px] lg:text-[17px] leading-relaxed leading-relaxed">
            منصة "دلال" تلتزم بتوفير بيئة آمنة وموثوقة لجميع المستخدمين، وتحث جميع الأعضاء على الالتزام بالقوانين والضوابط الأخلاقية عند نشر الإعلانات. في حال وجود أي استفسار حول سياسات النشر، يمكنكم التواصل مع فريق الدعم عبر الصفحة الرسمية للمنصة.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ProhibitedAds;