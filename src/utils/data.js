import car from '../assets/Carandothers/car1.svg'
import carcolor from '../assets/Carandothers/car.svg'
import motor from '../assets/Carandothers/motor.svg'
import motorcolor from '../assets/Carandothers/motor-1.svg'
import howses from '../assets/Carandothers/houses-1.svg'
import howsescolor from '../assets/Carandothers/houses.svg'
import devices from '../assets/Carandothers/devices-1.svg'
import devicescolor from '../assets/Carandothers/devices.svg'
import furniture from '../assets/Carandothers/furniture-1.svg'
import furniturecolor from '../assets/Carandothers/furniture.svg'
import animals from '../assets/Carandothers/animals-1.svg'
import animalscolor from '../assets/Carandothers/animals.svg'
import jobs from '../assets/Carandothers/jobs-1.svg'
import jobscolor from '../assets/Carandothers/jobs.svg'
import services from '../assets/Carandothers/Services-1.svg'
import servicescolor from '../assets/Carandothers/Services.svg'
import education from '../assets/Carandothers/education-1.svg'
import educationcolor from '../assets/Carandothers/education.svg'
import party from '../assets/Carandothers/party-1.svg'
import partycolor from '../assets/Carandothers/party.svg'
import usecolor from '../assets/Carandothers/other.svg'
import use from '../assets/Carandothers/others-1.svg'
import oldcolor from '../assets/Carandothers/used.svg'
import old from '../assets/Carandothers/used-1.svg'



export const data = [
    {
        title: "دلال المركبات",
        brands: [
            { arabic: "فورد", english: "Ford" }, { arabic: "نيسان", english: "Nissan" }, { arabic: "هيونداي", english: "Hyundai" }, { arabic: "جنسيس", english: "Genesis" },
            { arabic: "لكزس", english: "Lexus" }, { arabic: "جي إم سي", english: "GMC" }, { arabic: "شيفروليه", english: "Chevrolet" }, { arabic: "مرسيدس-بنز", english: "Mercedes-Benz" },
            { arabic: "هوندا", english: "Honda" }, { arabic: "بي إم دبليو", english: "BMW" }, { arabic: "كيا", english: "Kia" }, { arabic: "دودج", english: "Dodge" },
            { arabic: "كرايسلر", english: "Chrysler" }, { arabic: "جيب", english: "Jeep" }, { arabic: "ميتسوبيشي", english: "Mitsubishi" }, { arabic: "مازدا", english: "Mazda" },
            { arabic: "لاند روفر", english: "Land Rover" }, { arabic: "إيسوزو", english: "Isuzu" }, { arabic: "كاديلاك", english: "Cadillac" }, { arabic: "بورشه", english: "Porsche" },
            { arabic: "أودي", english: "Audi" }, { arabic: "سوزوكي", english: "Suzuki" }, { arabic: "إنفينيتي", english: "Infiniti" }, { arabic: "بيجو", english: "Peugeot" },
            { arabic: "بنتلي", english: "Bentley" }, { arabic: "جاكوار", english: "Jaguar" }, { arabic: "سوبارو", english: "Subaru" }, { arabic: "إم جي", english: "MG" }
        ],
        path: "",
        icon: car,
        iconcolor: carcolor,
    },
    {
        title: "دلال الدراجات",
        brands: [
            { arabic: "دراجة سوزوكي", english: "Suzuki" }, { arabic: "دراجة ياماها", english: "Yamaha" }, { arabic: "دراجة كهربائية", english: "Electric Dirt Bike" }, { arabic: "دراجة صيني", english: "Chinese Dirt Bike" }, { arabic: "دراجة هوندا", english: "Honda" },
            { arabic: "دراجة هارلي", english: "Harley-Davidson" }, { arabic: "دراجة رام", english: "RAM" }, { arabic: "دراجة كوزاكي", english: "Kawasaki" }, { arabic: "دراجة بحرية", english: "Marine Bike" }, { arabic: "دراجة بي إم دبليو", english: "BMW" },
            { arabic: "دراجة كيه تي إم", english: "KTM" }, { arabic: "دراجة إنديان", english: "Indian Motorcycles" }, { arabic: "دراجة بقي", english: "Bagi" }, { arabic: "دراجة بوالريس", english: "Polaris" }, { arabic: "دراجة كانام", english: "Am-Can" },
            { arabic: "دراجة كارتينغ", english: "Go-Kart" }, { arabic: "دراجة هاوجو", english: "Haoujo" }, { arabic: "دراجة زيرو موتورسايكلز", english: "Zero Motorcycles" }, { arabic: "دراجة إينيرجيكا", english: "Energica Electric Motorcycles" }, { arabic: "دراجة هارلي ديفيدسون اليف واير", english: "Harley Davidson LiveWire" },
            { arabic: "بسكليت", english: "Bicycle" }, { arabic: "جت سكي", english: "Jet Ski" }
        ],
        path: "",
        icon: motor,
        iconcolor: motorcolor,
    },
    {
        title: "دلال للعقار",
        brands: [
            "شقق للبيع", "شقق للايجار", "أراضي للبيع", "أراضي للايجار", "بيت للبيع", "بيت للايجار", "فلل للبيع", "فلل للايجار", "مزرعة للبيع", "مزرعة للايجار", "عمائر للبيع", "محلات للبيع",
            "محلات للايجار", "محلات للتقبيل", "شالية للبيع", "شالية للايجار", "مستودع للبيع", "مستودع للايجار", "مكتب للبيع", "مكتب للايجار",
        ],
        tabo: [
            "الطابو العقاري(الطابو العادي)",
            "(الطابو المحدث)الطابو العيني",
            "(الطابوالزراعي)الطابو الاخضر",
            "(أراضي البناء)الطابو العقاري",
            "الطابو المؤقت",
            "الطابو العائلي",
        ],
        explainTabo: [
            "الطابو العقاري (الطابو العادي):",
            "هو الطابو الرسمي الذي يُسجل العقار في السجل العقاري ويُثبت ملكية العقار بشكل قانوني. يحتوي على كافة التفاصيل مثل الموقع والمساحة والحدود واسم المالك.",
            "الطابو العيني (الطابو المحدث):",
            "هذا النوع من الطابو يحتوي على تفاصيل محدثة عن العقار، مثل التغييرات في الملكية أو التعديلات التي تمت على العقار. يستخدم عادة للعقارات التي تم تقسيمها أو تعديلها.",
            "الطابو الأخضر (الطابو الزراعي):",
            "يُستخدم للعقارات الزراعية أو الأراضي المخصصة للزراعة. يحتوي على تفاصيل خاصة بالأنشطة الزراعية التي تتم على العقار ويشمل شروطًا خاصة تتعلق باستخدام الأرض.",
            "الطابو العقاري (أراضي البناء):",
            "يُختص بالعقارات التي تم تخصيصها للبناء، سواء كانت سكنية أو تجارية. يحدد هذا الطابو أراضي البناء وفقًا للتخطيط العمراني ويُحدد كيفية استخدامها للبناء.",
            "الطابو المؤقت:",
            "هو طابو يصدر بشكل مؤقت في حال كان العقار في مرحلة المعالجة أو لم تكتمل الإجراءات القانونية بشكل كامل. يُستخدم عادة في الحالات التي لا يتم فيها إصدار الطابو النهائي على الفور.",
            "الطابو العائلي:",
            "يُستخدم في حال كانت الملكية العقارية تُسجل باسم أفراد العائلة. يمكن أن يكون هذا الطابو ملكية فردية أو مشتركة بين أفراد الأسرة، ويُستخدم للحفاظ على الملكية ضمن العائلة."
        ],
        path: "",
        icon: howses,
        iconcolor: howsescolor,
    },
    {
        title: "الاجهزة",
        brands: ["جوال أبل", "جوال سامسونج", "جوال هواوي", "جوال شاومي", "جوال سوني", "آيباد", "جالاكسي تاب",
            "لابتوب", "كمبيوتر مكتبي", "ملحقات كمبيوتر", "طابعات وماسحات", "أجهزة شبكات", "شاشات وبرجكتر", "تلفزيونات وصوتيات",
            "ألعاب إلكترونية", "كاميرات تصوير", "حسابات واشتراكات", "أرقام مميزة", "أجهزة منزلية ومطبخ", "مواطير ومولدات",
            "أجهزة غير مصنفة", "كفرات جوال", "شاحن", "سماعات", "ماوس"],
        path: "",
        icon: devices,
        iconcolor: devicescolor,
    },
    {
        title: "الاثاث",
        brands: [
            "غرف نوم (أسرة، دواليب، كومودينات)",
            "غرف معيشة (كنبات، طاولات قهوة، مكتبات)",
            "غرف طعام (طاولات، كراسي، بوفيهات)",
            "غرف أطفال (أسرة، دواليب، طاولات دراسة)",
            "مكاتب عمل (مكاتب، كراسي، وحدات تخزين)",
            "أثاث حدائق (طاولات، مظلات، أراجيح)",
            "دواليب وأرفف تخزين (جدارية، متعددة الاستخدام)",
            "إضاءة وديكور (ثريات، سجاد، لوحات)",
            "أثاث ذكي (قابل للطي، مزود بشواحن)",
            "أثاث خارجي وتجاري (فنادق، مطاعم، مدارس)",
            "أجهزة منزلية (برادات، غسالات)"
        ],
        path: "",
        icon: furniture,
        iconcolor: furniturecolor,
    },
    {
        title: "الحيوان",
        brands: ["غنم", "ماعز", "ببغاء", "حمام", "قطط", "دجاج", "إبل", "خيل", "كلاب", "بقر", "أسماك وسلاحف", "أرانب", "بط", "سناجب", "هامستر", "وبر", "خيل"],
        path: "",
        icon: animals,
        iconcolor: animalscolor,
    },
    {
        title: "الوظيفة ",
        brands: ["وظائف إدارية", "وظائف أزياء وتجميل", "وظائف أمن وسلامة", "وظائف تعليمية", "وظائف تقنية وتصميم", "وظائف زراعة ورعي", "وظائف صناعية", "وظائف طب وتمريض", "وظائف عمارة وبناء", "وظائف عمالة منزلية", "وظائف مطاعم", "وظائف المبيعات وخدمة العملاء", "وظائف النقل والمواصلات", "وظائف الإعلام والإعلان", "وظائف السياحة والفندقة", "وظائف رياضية", "وظائف بحرية"],
        path: "",
        icon: jobs,
        iconcolor: jobscolor,
    },
    {
        title: "الخدمات",
        brands: [
            "إدارة مشاريع", "تصميم جرافيك وتقنية", "خدمات طبية", "أمن وسلامة", "نقل ومواصلات", "استشارات قانونية", "خدمات مالية ومحاسبية", "بيع وشراء (عقارات، سيارات، تجارة إلكترونية)",
            "تنظيف وصيانة (كهربائي، سباك)", "سياحة وفندقة", "اتصالات (إنترنت، هواتف، بريد)", "تسويق وإعلانات", "فنون وترفيه (حفلات، تصوير)", "خدمات طعام (توصيل، تنظيم حفلات)",
            "زراعة وبيئة", "خدمات مالية رقمية", "حيوانات أليفة", "استشارات متنوعة", "بناء وصيانة (ترميم، كهرباء)"
        ],
        path: "",
        icon: services,
        iconcolor: servicescolor,
    },
    {
        title: "مستعمل",
        path: "",
        icon: old,
        iconcolor: oldcolor,
    },
    {
        title: "التعليم",
        brands:  ["دروس خصوصية", "دورات تدريبية", "استشارات أكاديمية", "تدريب مهني"],
        path: "",
        icon: education,
        iconcolor: educationcolor,
    },
    {
        title: "حفلات ومناسبات",
        brands:   ["تنظيم حفلات", "تأجير معدات", "تصوير فوتوغرافي وفيديو", "تصميم الدعوات"],
        path: "",
        icon: party,
        iconcolor: partycolor,
    },
    {
        title: "المزيد",
        path: "",
        icon: use,
        iconcolor: usecolor,
    },

];


export const location =[
    "آرا", "إدلب", "جرمانا", "دوما", "دير الزور", "ريف دمشق", "رأس العين", "الرقة", "زملكا", "السلمية", 
    "صيدنايا", "طرطوس", "تل أبيض", "التل", "حماة", "حمص", "حلب", "حلب القديمة", "الحسكة", "القامشلي", 
    "القنيطرة", "القرداحة", "دمشق", "دير عطية", "درعا", "دوار المطار", "جبلة", "جسر الشغور", "جرمانا", 
    "حلب", "معضمية الشام", "محردة", "مضايا", "الميادين", "نوى", "بانياس", "بصرى الشام", "تدمر", "دمشق القديمة", 
    "دوما", "دير الزور", "ريف دمشق", "صيدنايا", "طرطوس", "معرة النعمان", "حلب", "نبل", "ريف حمص", "الزبداني", 
    "سلمية", "كفر بطنا"
  ]