import { useInView } from '../hooks/useInView';
import { DynamicIcon } from './Icons';
import type { Chapter } from '../data/slides';

interface ChapterHeaderProps {
  chapter: Chapter;
}

const themeStyles: Record<string, {
  gradient: string;
  textColor: string;
  numberColor: string;
  subtitleColor: string;
  borderColor: string;
  bgOrb1: string;
  bgOrb2: string;
}> = {
  green: {
    gradient: 'from-green-500 to-green-700',
    textColor: 'text-green-800',
    numberColor: 'text-green-300',
    subtitleColor: 'text-green-600',
    borderColor: 'border-green-200',
    bgOrb1: 'bg-green-200/20',
    bgOrb2: 'bg-green-100/30',
  },
  purple: {
    gradient: 'from-purple-500 to-purple-700',
    textColor: 'text-purple-800',
    numberColor: 'text-purple-300',
    subtitleColor: 'text-purple-600',
    borderColor: 'border-purple-200',
    bgOrb1: 'bg-purple-200/20',
    bgOrb2: 'bg-purple-100/30',
  },
  yellow: {
    gradient: 'from-yellow-400 to-yellow-600',
    textColor: 'text-yellow-800',
    numberColor: 'text-yellow-300',
    subtitleColor: 'text-yellow-600',
    borderColor: 'border-yellow-200',
    bgOrb1: 'bg-yellow-200/20',
    bgOrb2: 'bg-yellow-100/30',
  },
  'green-purple': {
    gradient: 'from-green-500 to-purple-600',
    textColor: 'text-green-800',
    numberColor: 'text-green-300',
    subtitleColor: 'text-green-600',
    borderColor: 'border-green-200',
    bgOrb1: 'bg-green-200/20',
    bgOrb2: 'bg-purple-100/30',
  },
  'green-yellow': {
    gradient: 'from-green-500 to-yellow-500',
    textColor: 'text-green-800',
    numberColor: 'text-green-300',
    subtitleColor: 'text-green-600',
    borderColor: 'border-green-200',
    bgOrb1: 'bg-green-200/20',
    bgOrb2: 'bg-yellow-100/30',
  },
  'yellow-purple': {
    gradient: 'from-yellow-400 to-purple-600',
    textColor: 'text-purple-800',
    numberColor: 'text-yellow-300',
    subtitleColor: 'text-purple-600',
    borderColor: 'border-purple-200',
    bgOrb1: 'bg-yellow-200/20',
    bgOrb2: 'bg-purple-100/30',
  },
};

export function ChapterHeader({ chapter }: ChapterHeaderProps) {
  const { ref, isInView } = useInView(0.1);
  const style = themeStyles[chapter.colorTheme] || themeStyles.purple;

  return (
    <div
      ref={ref}
      id={`chapter-${chapter.id}`}
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Background orbs */}
      <div className={`absolute top-10 right-20 w-64 h-64 ${style.bgOrb1} rounded-full blur-3xl`} />
      <div className={`absolute bottom-10 left-20 w-48 h-48 ${style.bgOrb2} rounded-full blur-3xl`} />

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
        {/* Chapter number */}
        <div className="mb-6">
          <span className={`text-8xl lg:text-9xl font-black ${style.numberColor} select-none`}>
            {chapter.id.toString().padStart(2, '0')}
          </span>
        </div>

        {/* Icon */}
        <div className={`inline-flex w-16 h-16 rounded-3xl bg-gradient-to-br ${style.gradient} items-center justify-center mb-6 shadow-xl`}>
          <DynamicIcon name={chapter.icon} className="w-8 h-8 text-white" />
        </div>

        {/* Chapter label */}
        <p className={`text-sm font-bold ${style.subtitleColor} mb-3`}>
          فصل {chapter.id}
        </p>

        {/* Title */}
        <h2 className={`text-3xl lg:text-4xl font-black ${style.textColor} mb-4`}>
          {chapter.title}
        </h2>

        {/* Divider */}
        <div className={`w-20 h-1 rounded-full bg-gradient-to-l ${style.gradient} mx-auto mt-6`} />

        {/* Slide count */}
        <p className="text-sm text-gray-400 mt-6">
          {chapter.slides.length} اسلاید آموزشی
        </p>
      </div>
    </div>
  );
}
