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
        category: "Car",
        brands: [
            { arabic: "شاحنات", english: "Trucks" },
            { arabic: "قطع غيار ", english: "spare parts" },
            { arabic: "فورد", english: "Ford" },
            { arabic: "نيسان", english: "Nissan" },
            { arabic: "هيونداي", english: "Hyundai" },
            { arabic: "جنسس", english: "Genesis" },
            { arabic: "لكزس", english: "Lexus" },
            { arabic: "جي إم سي", english: "GMC" },
            { arabic: "شيفروليه", english: "Chevrolet" },
            { arabic: "مرسيدس بنز", english: "Mercedes-Benz" },
            { arabic: "هوندا", english: "Honda" },
            { arabic: "بي إم دبليو", english: "BMW" },
            { arabic: "كيا", english: "Kia" },
            { arabic: "دودج", english: "Dodge" },
            { arabic: "كرايزلر", english: "Chrysler" },
            { arabic: "جيب", english: "Jeep" },
            { arabic: "ميتسوبيشي", english: "Mitsubishi" },
            { arabic: "مازدا", english: "Mazda" },
            { arabic: "لاند روفر", english: "Land Rover" },
            { arabic: "إيسوزو", english: "Isuzu" },
            { arabic: "كاديلاك", english: "Cadillac" },
            { arabic: "بورش", english: "Porsche" },
            { arabic: "أودي", english: "Audi" },
            { arabic: "سوزوكي", english: "Suzuki" },
            { arabic: "إنفينيتي", english: "Infiniti" },
            { arabic: "بيجو", english: "Peugeot" },
            { arabic: "بنتلي", english: "Bentley" },
            { arabic: "جاكوار", english: "Jaguar" },
            { arabic: "سوبارو", english: "Subaru" },
            { arabic: "MG", english: "MG" },
            { arabic: "ZXAUTO", english: "ZXAUTO" },
            { arabic: "شانجان", english: "Changan" },
            { arabic: "رينو", english: "Renault" },
            { arabic: "بويك", english: "Buick" },
            { arabic: "مازيراتي", english: "Maserati" },
            { arabic: "رولز رويس", english: "Rolls-Royce" },
            { arabic: "لامبورغيني", english: "Lamborghini" },
            { arabic: "أوبل", english: "Opel" },
            { arabic: "سكودا", english: "Skoda" },
            { arabic: "فيراري", english: "Ferrari" },
            { arabic: "سيتروين", english: "Citroën" },
            { arabic: "شيري", english: "Chery" },
            { arabic: "سيات", english: "Seat" },
            { arabic: "دايو", english: "Daewoo" },
            { arabic: "ساب", english: "Saab" },
            { arabic: "فيات", english: "Fiat" },
            { arabic: "سانج يونج", english: "SsangYong" },
            { arabic: "أستون مارتن", english: "Aston Martin" },
            { arabic: "بروتون", english: "Proton" },
            { arabic: "هافال", english: "Haval" },
            { arabic: "جي إيه سي", english: "GAC" },
            { arabic: "سي إم سي", english: "CMC" },
            { arabic: "فوتون", english: "Foton" },
            { arabic: "فيكتوري أوتو", english: "Victory Auto" },
            { arabic: "ليفان", english: "Lifan" },
            { arabic: "ماكسيس", english: "Maxus" },
            { arabic: "ماكلارين", english: "McLaren" },
            { arabic: "جاك", english: "JAC" },
            { arabic: "بايك", english: "BAIC" },
            { arabic: "دونغ فينج", english: "Dongfeng" },
            { arabic: "إكسيد", english: "Exeed" },
            { arabic: "تسلا", english: "Tesla" },
            { arabic: "ساوايست", english: "Southwest" },
            { arabic: "ماهيندرا", english: "Mahindra" },
            { arabic: "زوتي", english: "Zotye" },
            { arabic: "هونشي", english: "Hongqi" },
            { arabic: "سمارت", english: "Smart" },
            { arabic: "تانك", english: "Tank" },
            { arabic: "لينك آند كو", english: "Lynk & Co" },
            { arabic: "لوسيد", english: "Lucid" },
            { arabic: "إينيوس", english: "Ineos" },
            { arabic: "همر", english: "Hummer" },
            { arabic: "لينكولن", english: "Lincoln" },
            { arabic: "فولكس فاجن", english: "Volkswagen" },
            { arabic: "دايهاتسو", english: "Daihatsu" },
            { arabic: "جيلي", english: "Geely" },
            { arabic: "ميركوري", english: "Mercury" },
            { arabic: "فولفو", english: "Volvo" },
            { arabic: "جريت وول", english: "Great Wall" },
            { arabic: "فاو", english: "FAW" },
            { arabic: "BYD", english: "BYD" },
            { arabic: "ألفا روميو", english: "Alfa Romeo" },
            { arabic: "تاتا", english: "Tata" },
            { arabic: "جي إم سي JMC", english: "JMC" },
            { arabic: "جيتور", english: "Jetour" }
        ],
        path: "/addPostCar",
        add: 'أضف إعلانك لبيع أو شراء سيارات',
        icon: car,
        iconcolor: carcolor,
    },
    {
        title: "دلال الدراجات",
        category: "Bike",
        brands: [
            { arabic: "دراجة سوزوكي", english: "Suzuki" },
            { arabic: "دراجة ياماها", english: "Yamaha" },
            { arabic: "دراجة كهربائية", english: "Electric Dirt Bike" },
            { arabic: "دراجة صيني", english: "Chinese Dirt Bike" },
            { arabic: "دراجة هوندا", english: "Honda" },
            { arabic: "دراجة هارلي", english: "Harley-Davidson" },
            { arabic: "دراجة رام", english: "RAM" },
            { arabic: "دراجة كوزاكي", english: "Kawasaki" },
            { arabic: "دراجة بحرية", english: "Marine Bike" },
            { arabic: "دراجة بي إم دبليو", english: "BMW" },
            { arabic: "دراجة كيه تي إم", english: "KTM" },
            { arabic: "دراجة إنديان", english: "Indian Motorcycles" },
            { arabic: "دراجة بقي", english: "Bagi" },
            { arabic: "دراجة بولاريس", english: "Polaris" },
            { arabic: "دراجة كانام", english: "Can-Am" },
            { arabic: "دراجة كارتينغ", english: "Go-kart" },
            { arabic: "دراجة هاوجو", english: "Haoujo" },
            { arabic: "دراجة زيرو موتورسايكلز", english: "Zero Electric Motorcycles" },
            { arabic: "دراجة إينيرجيكا", english: "Energica Electric Motorcycles" },
            { arabic: "دراجة هارلي ديفيدسون لايف واير", english: "Harley-Davidson LiveWire" },
            { arabic: "بسكليت", english: "Bicycle" },
            { arabic: "جت سكي", english: "Jet Ski" }
        ],
        path: "/addPostMotor",
        add: 'أضف إعلانك لبيع أو شراء الدراجات بجميع أنواعها',
        icon: motor,
        iconcolor: motorcolor,
    },
    {
        title: "دلال للعقار",
        category: "real_estate",
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
        path: "/addPostEstate",
        add: "أضف إعلانك لبيع أو شراء أو استئجار العقارات بأسعار تنافسية",
        icon: howses,
        iconcolor: howsescolor,
    },
    {
        title: "الاجهزة",
        category: "electronics",
        brands: ["جوال أبل", "جوال سامسونج", "جوال هواوي", "جوال شاومي", "جوال سوني", "آيباد", "جالاكسي تاب",
            "لابتوب", "كمبيوتر مكتبي", "ملحقات كمبيوتر", "طابعات وماسحات", "أجهزة شبكات", "شاشات وبرجكتر", "تلفزيونات وصوتيات",
            "ألعاب إلكترونية", "كاميرات تصوير", "حسابات واشتراكات", "أرقام مميزة", "أجهزة منزلية ومطبخ", "مواطير ومولدات",
            "أجهزة غير مصنفة", "كفرات جوال", "شاحن", "سماعات", "ماوس"],
        path: "/addPostDevices",
        add: "اعرض جهازك للبيع",
        icon: devices,
        iconcolor: devicescolor,
    },
    {
        title: "الاثاث",
        category: "furniture",
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
        path: "/addPostFurniture",
        add: "أضف  إعلانك للأثاث الجديد أو المستعمل",
        icon: furniture,
        iconcolor: furniturecolor,
    },
    {
        title: "الحيوان",
        category: "pets",
        brands: ["غنم", "ماعز", "ببغاء", "حمام", "قطط", "دجاج", "إبل", "خيل", "كلاب", "بقر", "أسماك وسلاحف", "أرانب", "بط", "سناجب", "هامستر", "وبر", "خيل"],
        path: "/addPostAnimals",
        add: "اعرض حيواناتك الأليفة للبيع",
        icon: animals,
        iconcolor: animalscolor,
    },
    {
        title: "الوظيفة ",
        brands: ["وظائف إدارية", "وظائف أزياء وتجميل", "وظائف أمن وسلامة", "وظائف تعليمية", "وظائف تقنية وتصميم", "وظائف زراعة ورعي", "وظائف صناعية", "وظائف طب وتمريض", "وظائف عمارة وبناء", "وظائف عمالة منزلية", "وظائف مطاعم", "وظائف المبيعات وخدمة العملاء", "وظائف النقل والمواصلات", "وظائف الإعلام والإعلان", "وظائف السياحة والفندقة", "وظائف رياضية", "وظائف بحرية"],
        path: "/addPostForJob",
        add: "انشر إعلانك للبحث عن موظفين  أو نشر إعلانك للبحث عن وظيفة",
        icon: jobs,
        iconcolor: jobscolor,
    },
    {
        title: "الخدمات",
        category: "services",
        brands: [
            "إدارة مشاريع", "تصميم جرافيك وتقنية", "خدمات طبية", "أمن وسلامة", "نقل ومواصلات", "استشارات قانونية", "خدمات مالية ومحاسبية", "بيع وشراء (عقارات، سيارات، تجارة إلكترونية)",
            "تنظيف وصيانة (كهربائي، سباك)", "سياحة وفندقة", "اتصالات (إنترنت، هواتف، بريد)", "تسويق وإعلانات", "فنون وترفيه (حفلات، تصوير)", "خدمات طعام (توصيل، تنظيم حفلات)",
            "زراعة وبيئة", "خدمات مالية رقمية", "حيوانات أليفة", "استشارات متنوعة", "بناء وصيانة (ترميم، كهرباء)"
        ],
        path: "/addPostForServises",
        add: "اعرض خدماتك أو انشر عن الخدمات التي تحتاجها",
        icon: services,
        iconcolor: servicescolor,
    },
    {
        title: "مستعمل",
        path: "/addPostOld",
        add: "لبيع أو شراء أشياء مستعملة؟ أضف إعلانك هنا",
        icon: old,
        iconcolor: oldcolor,
    },
    {
        title: "التعليم",
        category: "education",
        brands: ["دروس خصوصية", "دورات تدريبية", "استشارات أكاديمية", "تدريب مهني"],
        path: "/addPostForEducation",
        add: "انشر إعلانات الدروس أو أكتب ابحث عن المعلمين أو التوجه العلمي من هن",
        icon: education,
        iconcolor: educationcolor,
    },
    {
        title: "حفلات ومناسبات",
        brands: ["تنظيم حفلات", "تأجير معدات", "تصوير فوتوغرافي وفيديو", "تصميم الدعوات"],
        path: "/addPostParty",
        add: "أعلن عن أعمال حفلاتك أو مناسباتك أو أعرض طلبك للبحث عن الجهة المناسبة",
        icon: party,
        iconcolor: partycolor,
    },
    {
        title: "المزيد",
        path: "/addPostAboutOthers",
        add: "لديك شيء مختلف؟ أضف إعلانك في هذه الفئة",
        icon: use,
        iconcolor: usecolor,
    },

];


export const location = [
    "آرا", "إدلب", "جرمانا", "دوما", "دير الزور", "ريف دمشق", "رأس العين", "الرقة", "زملكا", "السلمية",
    "صيدنايا", "طرطوس", "تل أبيض", "التل", "حماة", "حمص", "حلب", "حلب القديمة", "الحسكة", "القامشلي",
    "القنيطرة", "القرداحة", "دمشق", "دير عطية", "درعا", "دوار المطار", "جبلة", "جسر الشغور", "جرمانا",
    "حلب", "معضمية الشام", "محردة", "مضايا", "الميادين", "نوى", "بانياس", "بصرى الشام", "تدمر", "دمشق القديمة",
    "دوما", "دير الزور", "ريف دمشق", "صيدنايا", "طرطوس", "معرة النعمان", "حلب", "نبل", "ريف حمص", "الزبداني",
    "سلمية", "كفر بطنا"
]