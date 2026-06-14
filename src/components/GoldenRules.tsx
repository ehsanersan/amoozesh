import { useInView } from '../hooks/useInView';
import { DynamicIcon } from './Icons';
import { goldenRules } from '../data/slides';

const colorConfig: Record<string, {
  gradient: string;
  iconBg: string;
  iconColor: string;
  borderColor: string;
  titleColor: string;
  shadow: string;
  bg: string;
}> = {
  yellow: {
    gradient: 'from-yellow-400 to-yellow-600',
    iconBg: 'bg-yellow-400/20',
    iconColor: 'text-yellow-600',
    borderColor: 'border-yellow-300/30',
    titleColor: 'text-yellow-700',
    shadow: 'shadow-yellow-500/10',
    bg: 'glass-yellow',
  },
  purple: {
    gradient: 'from-purple-500 to-purple-700',
    iconBg: 'bg-purple-500/20',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-300/30',
    titleColor: 'text-purple-700',
    shadow: 'shadow-purple-500/10',
    bg: 'glass-purple',
  },
  green: {
    gradient: 'from-green-500 to-green-700',
    iconBg: 'bg-green-500/20',
    iconColor: 'text-green-600',
    borderColor: 'border-green-300/30',
    titleColor: 'text-green-700',
    shadow: 'shadow-green-500/10',
    bg: 'glass-green',
  },
};

export function GoldenRules() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      id="golden-rules"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-green-200/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 glass-purple rounded-full px-5 py-2 mb-6">
            <DynamicIcon name="Award" className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-bold text-purple-700">بخش پایانی</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4">
            سه اصل{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-purple-600 via-yellow-500 to-green-500">
              طلایی
            </span>{' '}
            واحد تولید
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            این سه اصل، ستون‌های اصلی فرهنگ کاری در واحد تولید لذیذ هستند
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {goldenRules.map((rule, index) => {
            const config = colorConfig[rule.color];
            return (
              <div
                key={index}
                className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div
                  className={`
                    ${config.bg} rounded-3xl p-8 lg:p-10
                    shadow-xl ${config.shadow}
                    transition-all duration-500 hover:shadow-2xl hover:-translate-y-2
                    h-full flex flex-col items-center text-center
                    border ${config.borderColor}
                  `}
                >
                  {/* Number */}
                  <div className="mb-6">
                    <span className={`text-6xl font-black ${config.titleColor} opacity-20`}>
                      {(index + 1).toString()}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${config.gradient} flex items-center justify-center mb-8 shadow-xl`}>
                    <DynamicIcon name={rule.icon} className="w-10 h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl lg:text-2xl font-black ${config.titleColor} mb-4`}>
                    {rule.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-loose">
                    {rule.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer message */}
        <div className={`text-center mt-16 ${isInView ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          <div className="glass-purple rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-lg font-bold text-purple-800 mb-2">
              ما در لذیذ، به این اصول متعهدیم
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              رعایت این سه اصل، تضمین‌کننده سلامت مشتریان، اعتبار برند و امنیت شغلی همه ما است.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
