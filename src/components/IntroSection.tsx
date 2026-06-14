import { useInView } from '../hooks/useInView';
import { GlassCard } from './GlassCard';
import { DynamicIcon } from './Icons';
import { chapters } from '../data/slides';

const chapterThemeColors: Record<string, { bg: string; text: string; icon: string }> = {
  green: { bg: 'bg-green-500/10', text: 'text-green-700', icon: 'text-green-600' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-700', icon: 'text-purple-600' },
  yellow: { bg: 'bg-yellow-500/10', text: 'text-yellow-700', icon: 'text-yellow-600' },
  'green-purple': { bg: 'bg-green-500/10', text: 'text-green-700', icon: 'text-green-600' },
  'green-yellow': { bg: 'bg-green-500/10', text: 'text-green-700', icon: 'text-green-600' },
  'yellow-purple': { bg: 'bg-yellow-500/10', text: 'text-yellow-700', icon: 'text-yellow-600' },
};

const chapterGlassVariant: Record<string, 'green' | 'purple' | 'yellow' | 'default'> = {
  green: 'green',
  purple: 'purple',
  yellow: 'yellow',
  'green-purple': 'green',
  'green-yellow': 'green',
  'yellow-purple': 'yellow',
};

export function IntroSection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="intro" ref={ref} className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 glass-purple rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-bold text-purple-700">نمای کلی آموزش</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6">
            سرفصل‌های{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-purple-600 to-purple-400">
              دوره آموزشی
            </span>
          </h2>
          <p className="text-gray-500 leading-relaxed text-lg">
            این دوره آموزشی شامل ۵ فصل اصلی است که تمامی اصول بهداشت، کیفیت و ایمنی در واحد تولید لذیذ را پوشش می‌دهد. هر فصل به‌صورت اسلایدهای تعاملی ارائه شده است.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter, index) => {
            const colors = chapterThemeColors[chapter.colorTheme];
            const glassVariant = chapterGlassVariant[chapter.colorTheme];
            return (
              <div
                key={chapter.id}
                className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => {
                    const el = document.getElementById(`chapter-${chapter.id}`);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full text-right"
                >
                  <GlassCard variant={glassVariant} className="h-full">
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-2xl ${colors.bg} flex items-center justify-center`}>
                        <DynamicIcon name={chapter.icon} className={`w-6 h-6 ${colors.icon}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-gray-400 mb-1">فصل {chapter.id}</p>
                        <h3 className={`text-base font-extrabold ${colors.text} mb-2`}>
                          {chapter.title}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {chapter.slides.length} اسلاید آموزشی
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </button>
              </div>
            );
          })}

          {/* Golden Rules Card */}
          <div
            className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.5s' }}
          >
            <button
              onClick={() => {
                const el = document.getElementById('golden-rules');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full text-right"
            >
              <GlassCard variant="purple" className="h-full bg-gradient-to-br from-purple-500/10 to-purple-600/5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-500/30">
                    <DynamicIcon name="Award" className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-purple-400 mb-1">بخش ویژه</p>
                    <h3 className="text-base font-extrabold text-purple-800 mb-2">
                      سه اصل طلایی تولید
                    </h3>
                    <p className="text-xs text-gray-500">
                      اصول بنیادین واحد تولید لذیذ
                    </p>
                  </div>
                </div>
              </GlassCard>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
