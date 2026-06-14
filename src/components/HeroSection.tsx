import { useInView } from '../hooks/useInView';
import { ChevronLeft, GraduationCap, Shield, Heart } from './Icons';

export function HeroSection() {
  const { ref, isInView } = useInView(0.1);

  const scrollToIntro = () => {
    const el = document.getElementById('intro');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-green-200/25 rounded-full blur-3xl animate-pulse-soft delay-500" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-yellow-200/20 rounded-full blur-3xl animate-pulse-soft delay-300" />
        
        {/* Floating glass cards in background */}
        <div className="absolute top-32 left-20 w-32 h-20 glass rounded-2xl opacity-40 animate-float hidden lg:block" />
        <div className="absolute bottom-40 right-32 w-24 h-16 glass rounded-2xl opacity-30 animate-float delay-200 hidden lg:block" />
        <div className="absolute top-60 left-1/2 w-20 h-14 glass-purple rounded-xl opacity-25 animate-float delay-400 hidden lg:block" />
        
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #8b3dff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`${isInView ? 'animate-fade-in-right' : 'opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-purple rounded-full px-4 py-2 mb-8">
              <GraduationCap className="w-4 h-4 text-purple-600" />
              <span className="text-xs font-bold text-purple-700">دوره آموزشی واحد تولید</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
              آموزش{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-purple-600 to-purple-400">
                بهداشت
              </span>
              ،{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-green-600 to-green-400">
                کیفیت
              </span>{' '}
              و{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-600 to-yellow-400">
                ایمنی
              </span>
              <br />
              در واحد تولید{' '}
              <span className="text-purple-700">لذیذ</span>
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-lg">
              راهنمای جامع اصول حرفه‌ای کار در تولید مواد غذایی، ویژه پرسنل واحد تولید و آشپزخانه صنعتی
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToIntro}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-l from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 transition-all duration-300 shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5"
              >
                <span>شروع آموزش</span>
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('chapter-1');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-purple-700 glass-purple hover:bg-purple-100/30 transition-all duration-300"
              >
                مشاهده فصل‌ها
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12">
              <div className="text-center">
                <p className="text-2xl font-black text-purple-600">۵</p>
                <p className="text-xs text-gray-500 mt-1">فصل آموزشی</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <p className="text-2xl font-black text-green-600">۲۰</p>
                <p className="text-xs text-gray-500 mt-1">اسلاید</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <p className="text-2xl font-black text-yellow-500">۳</p>
                <p className="text-xs text-gray-500 mt-1">اصل طلایی</p>
              </div>
            </div>
          </div>

          {/* Image / Visual */}
          <div className={`relative ${isInView ? 'animate-fade-in-left delay-200' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main image card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/15">
                <img
                  src="/images/hero.jpg"
                  alt="واحد تولید لذیذ"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
                <div className="absolute bottom-6 right-6 left-6">
                  <div className="glass rounded-xl p-4">
                    <p className="text-white text-sm font-bold">واحد تولید لذیذ</p>
                    <p className="text-white/70 text-xs mt-1">تعهد به بهداشت، کیفیت و ایمنی</p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 glass rounded-2xl p-4 shadow-lg animate-float hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <Heart className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">بهداشت</p>
                    <p className="text-[10px] text-gray-500">اولویت اول</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 glass rounded-2xl p-4 shadow-lg animate-float delay-300 hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">ایمنی</p>
                    <p className="text-[10px] text-gray-500">همیشه اول</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
