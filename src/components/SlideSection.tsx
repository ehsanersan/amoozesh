import { useInView } from '../hooks/useInView';
import { GlassCard } from './GlassCard';
import { DynamicIcon } from './Icons';
import { WarningBox } from './WarningBox';
import { TipBox } from './TipBox';
import type { Slide } from '../data/slides';

interface SlideSectionProps {
  slide: Slide;
  chapterTheme: string;
  slideIndex: number;
  totalSlides: number;
  isReversed?: boolean;
}

const themeConfig: Record<string, {
  glassVariant: 'green' | 'purple' | 'yellow' | 'default';
  iconBg: string;
  iconColor: string;
  titleColor: string;
  badgeClass: string;
  bulletDot: string;
  numberBg: string;
  numberText: string;
  imageShadow: string;
}> = {
  green: {
    glassVariant: 'green',
    iconBg: 'bg-green-500/15',
    iconColor: 'text-green-600',
    titleColor: 'text-green-800',
    badgeClass: 'glass-green',
    bulletDot: 'bg-green-500',
    numberBg: 'bg-green-500/10',
    numberText: 'text-green-600',
    imageShadow: 'shadow-green-500/10',
  },
  purple: {
    glassVariant: 'purple',
    iconBg: 'bg-purple-500/15',
    iconColor: 'text-purple-600',
    titleColor: 'text-purple-800',
    badgeClass: 'glass-purple',
    bulletDot: 'bg-purple-500',
    numberBg: 'bg-purple-500/10',
    numberText: 'text-purple-600',
    imageShadow: 'shadow-purple-500/10',
  },
  yellow: {
    glassVariant: 'yellow',
    iconBg: 'bg-yellow-500/15',
    iconColor: 'text-yellow-600',
    titleColor: 'text-yellow-800',
    badgeClass: 'glass-yellow',
    bulletDot: 'bg-yellow-500',
    numberBg: 'bg-yellow-500/10',
    numberText: 'text-yellow-600',
    imageShadow: 'shadow-yellow-500/10',
  },
  'green-purple': {
    glassVariant: 'green',
    iconBg: 'bg-green-500/15',
    iconColor: 'text-green-600',
    titleColor: 'text-green-800',
    badgeClass: 'glass-green',
    bulletDot: 'bg-green-500',
    numberBg: 'bg-purple-500/10',
    numberText: 'text-purple-600',
    imageShadow: 'shadow-green-500/10',
  },
  'green-yellow': {
    glassVariant: 'green',
    iconBg: 'bg-green-500/15',
    iconColor: 'text-green-600',
    titleColor: 'text-green-800',
    badgeClass: 'glass-green',
    bulletDot: 'bg-green-500',
    numberBg: 'bg-yellow-500/10',
    numberText: 'text-yellow-600',
    imageShadow: 'shadow-green-500/10',
  },
  'yellow-purple': {
    glassVariant: 'yellow',
    iconBg: 'bg-yellow-500/15',
    iconColor: 'text-yellow-600',
    titleColor: 'text-purple-800',
    badgeClass: 'glass-yellow',
    bulletDot: 'bg-yellow-500',
    numberBg: 'bg-purple-500/10',
    numberText: 'text-purple-600',
    imageShadow: 'shadow-yellow-500/10',
  },
};

export function SlideSection({ slide, chapterTheme, slideIndex, totalSlides, isReversed }: SlideSectionProps) {
  const { ref, isInView } = useInView(0.1);
  const config = themeConfig[chapterTheme] || themeConfig.purple;

  return (
    <div
      ref={ref}
      id={`slide-${slide.id}`}
      className="py-12 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content Side */}
          <div className={`${isReversed ? 'lg:order-2' : 'lg:order-1'} ${isInView ? 'animate-fade-in-right' : 'opacity-0'}`}>
            {/* Slide number badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className={`inline-flex items-center gap-2 ${config.badgeClass} rounded-full px-3 py-1.5`}>
                <DynamicIcon name={slide.icon} className={`w-4 h-4 ${config.iconColor}`} />
                <span className={`text-xs font-bold ${config.numberText}`}>
                  اسلاید {slide.id} از {totalSlides}
                </span>
              </div>
            </div>

            {/* Title */}
            <h3 className={`text-2xl lg:text-3xl font-black ${config.titleColor} mb-3 leading-tight`}>
              {slide.title}
            </h3>

            {/* Subtitle */}
            {slide.subtitle && (
              <p className="text-base text-gray-500 mb-6 font-medium leading-relaxed">
                {slide.subtitle}
              </p>
            )}

            {/* Description */}
            {slide.description && (
              <p className="text-sm text-gray-600 mb-6 leading-loose">
                {slide.description}
              </p>
            )}

            {/* Bullets */}
            <GlassCard variant={config.glassVariant} hover={false} className="mb-4">
              <ul className="space-y-3">
                {slide.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-2 h-2 rounded-full ${config.bulletDot} mt-2.5`} />
                    <span className="text-sm text-gray-700 leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            {/* Warning Box */}
            {slide.warning && <WarningBox message={slide.warning} />}

            {/* Tip Box */}
            {slide.tip && <TipBox message={slide.tip} />}
          </div>

          {/* Image Side */}
          <div className={`${isReversed ? 'lg:order-1' : 'lg:order-2'} ${isInView ? 'animate-fade-in-left delay-200' : 'opacity-0'}`}>
            <div className={`relative rounded-3xl overflow-hidden shadow-2xl ${config.imageShadow}`}>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              {/* Slide info overlay */}
              <div className="absolute bottom-4 right-4 left-4">
                <div className="glass rounded-xl px-4 py-3 flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg ${config.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <DynamicIcon name={slide.icon} className={`w-4 h-4 ${config.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold">{slide.title}</p>
                    <p className="text-white/60 text-[10px]">فصل {slide.chapterId} • اسلاید {slideIndex + 1}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
