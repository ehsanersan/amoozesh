export interface Slide {
  id: number;
  chapterId: number;
  title: string;
  subtitle?: string;
  description?: string;
  bullets: string[];
  image: string;
  icon: string;
  warning?: string;
  tip?: string;
}

export interface Chapter {
  id: number;
  title: string;
  shortTitle: string;
  colorTheme: 'green' | 'purple' | 'yellow' | 'green-purple' | 'green-yellow' | 'yellow-purple';
  icon: string;
  slides: number[];
}

export const chapters: Chapter[] = [
  {
    id: 1,
    title: 'بهداشت فردی',
    shortTitle: 'بهداشت فردی',
    colorTheme: 'green',
    icon: 'HandMetal',
    slides: [1, 2, 3],
  },
  {
    id: 2,
    title: 'بهداشت مواد غذایی و جلوگیری از آلودگی',
    shortTitle: 'بهداشت غذایی',
    colorTheme: 'green-purple',
    icon: 'ShieldCheck',
    slides: [4, 5, 6, 7],
  },
  {
    id: 3,
    title: 'استاندارد تولید غذا در لذیذ',
    shortTitle: 'استاندارد تولید',
    colorTheme: 'purple',
    icon: 'Award',
    slides: [8, 9, 10, 11],
  },
  {
    id: 4,
    title: 'استفاده از تجهیزات و ایمنی',
    shortTitle: 'ایمنی تجهیزات',
    colorTheme: 'yellow-purple',
    icon: 'Wrench',
    slides: [12, 13, 14, 15, 16],
  },
  {
    id: 5,
    title: 'نگهداری و دیفراست مواد غذایی',
    shortTitle: 'نگهداری مواد',
    colorTheme: 'green-yellow',
    icon: 'Thermometer',
    slides: [17, 18, 19, 20],
  },
];

export const slides: Slide[] = [
  // Chapter 1: Personal Hygiene
  {
    id: 1,
    chapterId: 1,
    title: 'چرا بهداشت فردی اهمیت دارد؟',
    subtitle: 'اولین خط دفاع در تولید غذای سالم',
    description: 'بهداشت فردی پایه و اساس تولید غذای سالم و ایمن است. هر فرد در واحد تولید، مستقیماً بر سلامت مشتریان تأثیر می‌گذارد.',
    bullets: [
      'جلوگیری از انتقال آلودگی به مواد غذایی',
      'حفظ سلامت و اعتماد مشتریان',
      'حفظ اعتبار و وجهه برند لذیذ',
      'پیشگیری از شکایات و برگشت محصول',
    ],
    image: `${import.meta.env.BASE_URL}images/hygiene.jpg`,
    icon: 'Heart',
    tip: 'بهداشت فردی شما = سلامت هزاران مشتری',
  },
  {
    id: 2,
    chapterId: 1,
    title: 'الزامات بهداشت فردی',
    subtitle: 'رعایت این موارد برای تمامی پرسنل الزامی است',
    bullets: [
      'پوشیدن لباس کار تمیز و مرتب',
      'استفاده صحیح از کلاه و پوشش کامل موها',
      'رعایت اصلاح و آراستگی ظاهر',
      'کوتاه نگه‌داشتن ناخن‌ها بدون لاک',
      'شستشوی مداوم و صحیح دست‌ها با صابون',
    ],
    image: `${import.meta.env.BASE_URL}images/hygiene.jpg`,
    icon: 'ClipboardCheck',
  },
  {
    id: 3,
    chapterId: 1,
    title: 'اشتباهات رایج بهداشتی',
    subtitle: 'از این خطاها اجتناب کنید',
    bullets: [
      'لمس مواد غذایی با دست‌های آلوده یا بدون دستکش',
      'استفاده از تلفن همراه حین کار در خط تولید',
      'عدم استفاده از کلاه و پوشش مو',
      'حضور در محیط تولید هنگام بیماری یا عفونت',
    ],
    image: `${import.meta.env.BASE_URL}images/hygiene.jpg`,
    icon: 'AlertTriangle',
    warning: 'حضور در محیط تولید هنگام بیماری ممنوع است. فوراً به سرپرست خود اطلاع دهید.',
  },

  // Chapter 2: Food Hygiene
  {
    id: 4,
    chapterId: 2,
    title: 'تفکیک مواد خام و پخته',
    subtitle: 'جلوگیری از آلودگی متقاطع',
    description: 'آلودگی متقاطع یکی از خطرناک‌ترین عوامل بیماری‌های غذایی است. تفکیک صحیح مواد خام و پخته ضروری است.',
    bullets: [
      'ممنوعیت نگهداری مواد خام در کنار مواد پخته‌شده',
      'استفاده از ظروف و تجهیزات مجزا برای هر نوع ماده غذایی',
      'رعایت اصول جلوگیری از آلودگی متقاطع در تمامی مراحل',
    ],
    image: `${import.meta.env.BASE_URL}images/food-safety.jpg`,
    icon: 'Layers',
    warning: 'هرگز مواد خام را در کنار غذای آماده قرار ندهید!',
  },
  {
    id: 5,
    chapterId: 2,
    title: 'تفکیک مواد شسته و نشسته',
    subtitle: 'نظم و برچسب‌گذاری صحیح',
    bullets: [
      'قرار دادن مواد شسته‌شده در ظروف مشخص و تمیز',
      'برچسب‌گذاری دقیق ظروف حاوی مواد غذایی',
      'جلوگیری از اختلاط مواد شسته و نشسته',
    ],
    image: `${import.meta.env.BASE_URL}images/food-safety.jpg`,
    icon: 'Tags',
    tip: 'برچسب‌گذاری صحیح = جلوگیری از اشتباهات',
  },
  {
    id: 6,
    chapterId: 2,
    title: 'نگهداری غذا پس از پخت',
    subtitle: 'حفظ کیفیت و ایمنی محصول نهایی',
    bullets: [
      'بستن درب ظروف بلافاصله پس از پخت',
      'استفاده از سلفون استاندارد یا درب مخصوص',
      'ثبت دقیق زمان و تاریخ تولید روی هر ظرف',
    ],
    image: `${import.meta.env.BASE_URL}images/food-safety.jpg`,
    icon: 'Package',
  },
  {
    id: 7,
    chapterId: 2,
    title: 'اصول خنک‌سازی و انجماد',
    subtitle: 'کنترل دما، کلید ایمنی غذا',
    bullets: [
      'انتقال سریع غذای پخته‌شده به شاک فریزر',
      'ممنوعیت قرار دادن غذای داغ مستقیماً در سردخانه',
      'رعایت دقیق زمان‌بندی فرآیند خنک‌سازی',
    ],
    image: `${import.meta.env.BASE_URL}images/food-safety.jpg`,
    icon: 'Snowflake',
    warning: 'غذای داغ را هرگز مستقیماً وارد سردخانه نکنید!',
  },

  // Chapter 3: Production Standards
  {
    id: 8,
    chapterId: 3,
    title: 'تولید استاندارد و یکپارچه',
    subtitle: 'کیفیت یکسان در هر بار تولید',
    description: 'استانداردسازی فرآیند تولید تضمین‌کننده کیفیت یکنواخت و رضایت مشتریان است.',
    bullets: [
      'پیروی دقیق از دستور پخت مصوب واحد تولید',
      'ممنوعیت اعمال سلیقه شخصی در فرمولاسیون',
      'رعایت وزن دقیق مواد اولیه طبق استاندارد',
    ],
    image: `${import.meta.env.BASE_URL}images/standards.jpg`,
    icon: 'FileText',
    tip: 'دستور پخت مصوب = تضمین کیفیت',
  },
  {
    id: 9,
    chapterId: 3,
    title: 'پخت صحیح مواد اولیه',
    subtitle: 'دقت در زمان و دمای پخت',
    bullets: [
      'پخت استاندارد پیاز و سایر مواد پایه',
      'رعایت دقیق زمان و دمای پخت هر ماده',
      'کنترل مستمر کیفیت حین فرآیند تولید',
    ],
    image: `${import.meta.env.BASE_URL}images/standards.jpg`,
    icon: 'Flame',
  },
  {
    id: 10,
    chapterId: 3,
    title: 'کنترل و کاهش ضایعات',
    subtitle: 'مصرف هوشمندانه مواد اولیه',
    bullets: [
      'مصرف بهینه و صحیح مواد اولیه',
      'تلاش مستمر برای کاهش دورریز',
      'گزارش فوری مواد آسیب‌دیده یا فاسد به سرپرست',
    ],
    image: `${import.meta.env.BASE_URL}images/standards.jpg`,
    icon: 'TrendingDown',
  },
  {
    id: 11,
    chapterId: 3,
    title: 'مسئولیت فردی در قبال کیفیت',
    subtitle: 'هر آشپز، نماینده کیفیت لذیذ',
    description: 'کیفیت محصول نهایی مستقیماً به عملکرد هر فرد در خط تولید وابسته است.',
    bullets: [
      'هر آشپز مسئول کیفیت محصول تولیدی خود است',
      'کیفیت نامناسب مستقیماً بر رضایت مشتری تأثیر می‌گذارد',
    ],
    image: `${import.meta.env.BASE_URL}images/standards.jpg`,
    icon: 'UserCheck',
    tip: 'شما نماینده برند لذیذ در هر بشقاب غذا هستید.',
  },

  // Chapter 4: Equipment & Safety
  {
    id: 12,
    chapterId: 4,
    title: 'استفاده صحیح از تجهیزات',
    subtitle: 'ایمنی در اولویت',
    bullets: [
      'استفاده از تجهیزات صرفاً مطابق دستورالعمل مصوب',
      'ممنوعیت هرگونه تغییر یا دستکاری در دستگاه‌ها',
    ],
    image: `${import.meta.env.BASE_URL}images/equipment.jpg`,
    icon: 'Settings',
    warning: 'هرگونه تغییر در تجهیزات بدون مجوز ممنوع است!',
  },
  {
    id: 13,
    chapterId: 4,
    title: 'امانتداری و حفاظت از تجهیزات',
    subtitle: 'تجهیزات، سرمایه مشترک ماست',
    bullets: [
      'حفاظت از قطعات و لوازم جانبی دستگاه‌ها',
      'گزارش فوری هرگونه خرابی یا نقص فنی',
      'جلوگیری از مفقود شدن ابزار و تجهیزات',
    ],
    image: `${import.meta.env.BASE_URL}images/equipment.jpg`,
    icon: 'Shield',
  },
  {
    id: 14,
    chapterId: 4,
    title: 'شستشو و ضدعفونی تجهیزات',
    subtitle: 'نظافت منظم، تولید ایمن',
    bullets: [
      'شستشوی روزانه تمامی تجهیزات مورد استفاده',
      'ضدعفونی کامل تجهیزات پس از هر بار استفاده',
      'ثبت و مستندسازی فرآیند نظافت تجهیزات',
    ],
    image: `${import.meta.env.BASE_URL}images/equipment.jpg`,
    icon: 'Sparkles',
  },
  {
    id: 15,
    chapterId: 4,
    title: 'ایمنی در کار با دستگاه‌ها',
    subtitle: 'حفاظت از جان خود و همکاران',
    bullets: [
      'استفاده الزامی از محافظ و تجهیزات ایمنی دستگاه',
      'ممنوعیت برداشتن یا غیرفعال کردن قطعات ایمنی',
      'توقف فوری کار در صورت مشاهده نقص فنی',
    ],
    image: `${import.meta.env.BASE_URL}images/equipment.jpg`,
    icon: 'HardHat',
    warning: 'هرگز بدون محافظ با دستگاه‌ها کار نکنید!',
  },
  {
    id: 16,
    chapterId: 4,
    title: 'درس از یک حادثه واقعی',
    subtitle: 'ایمنی، مهم‌تر از سرعت',
    description: 'این نمونه واقعی نشان می‌دهد که بی‌توجهی به اصول ایمنی چه عواقبی دارد.',
    bullets: [
      'حادثه: آسیب شدید دست در دستگاه خردکن صنعتی',
      'علت: عدم استفاده از محافظ دستگاه به دلیل عجله',
      'درس آموخته: ایمنی همیشه مقدم بر سرعت کار است',
    ],
    image: `${import.meta.env.BASE_URL}images/equipment.jpg`,
    icon: 'AlertOctagon',
    warning: 'ایمنی قبل از سرعت! هیچ کاری ارزش آسیب‌دیدن شما را ندارد.',
  },

  // Chapter 5: Storage & Defrost
  {
    id: 17,
    chapterId: 5,
    title: 'اصول نگهداری مواد منجمد',
    subtitle: 'حفظ کیفیت از انبار تا آشپزخانه',
    bullets: [
      'رعایت اصل FIFO (اول وارد، اول خارج)',
      'برچسب‌گذاری دقیق با تاریخ ورود و انقضا',
      'کنترل مستمر دمای سردخانه و فریزر',
    ],
    image: `${import.meta.env.BASE_URL}images/storage.jpg`,
    icon: 'Database',
    tip: 'FIFO: هر ماده‌ای که زودتر وارد شده، زودتر مصرف شود.',
  },
  {
    id: 18,
    chapterId: 5,
    title: 'روش صحیح دیفراست',
    subtitle: 'یخ‌زدایی ایمن و کنترل‌شده',
    bullets: [
      'انتقال مواد از فریزر به یخچال با دمای کنترل‌شده',
      'برنامه‌ریزی دقیق زمان دیفراست بر اساس نوع ماده',
    ],
    image: `${import.meta.env.BASE_URL}images/storage.jpg`,
    icon: 'Droplets',
  },
  {
    id: 19,
    chapterId: 5,
    title: 'روش‌های ممنوع یخ‌زدایی',
    subtitle: 'از این روش‌ها اکیداً خودداری کنید',
    bullets: [
      'ممنوعیت قرار دادن مواد منجمد روی حرارت مستقیم',
      'ممنوعیت دیفراست در نور مستقیم آفتاب',
      'ممنوعیت نگهداری طولانی‌مدت در دمای محیط',
    ],
    image: `${import.meta.env.BASE_URL}images/storage.jpg`,
    icon: 'Ban',
    warning: 'دیفراست در دمای محیط باعث رشد سریع باکتری‌ها می‌شود!',
  },
  {
    id: 20,
    chapterId: 5,
    title: 'مسئولیت فردی در نگهداری مواد',
    subtitle: 'هر نفر، یک حلقه از زنجیره کیفیت',
    bullets: [
      'حفظ کیفیت و سلامت مواد اولیه در تمام مراحل',
      'جلوگیری از فساد مواد غذایی با رعایت اصول نگهداری',
      'تلاش مستمر برای کاهش ضایعات و دورریز',
    ],
    image: `${import.meta.env.BASE_URL}images/storage.jpg`,
    icon: 'Users',
    tip: 'کیفیت مواد اولیه = کیفیت محصول نهایی',
  },
];

export const goldenRules = [
  {
    title: 'ایمنی قبل از سرعت',
    description: 'هیچ وظیفه‌ای آنقدر فوری نیست که ایمنی شما و همکارانتان را به خطر بیندازد.',
    icon: 'ShieldAlert',
    color: 'yellow',
  },
  {
    title: 'کیفیت قبل از سلیقه شخصی',
    description: 'استانداردها و دستور پخت مصوب، تضمین‌کننده کیفیت یکنواخت و رضایت مشتری است.',
    icon: 'Award',
    color: 'purple',
  },
  {
    title: 'بهداشت قبل از هر چیز',
    description: 'بهداشت فردی و محیطی، پایه و اساس تولید غذای سالم و حفظ اعتماد مشتریان است.',
    icon: 'Sparkles',
    color: 'green',
  },
];
