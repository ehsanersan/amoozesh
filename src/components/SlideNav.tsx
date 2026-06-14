import { ChevronRight, ChevronLeft } from './Icons';

interface SlideNavProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
}

export function SlideNav({ currentSlide, totalSlides, onPrev, onNext }: SlideNavProps) {
  return (
    <div className="flex items-center justify-center gap-4 py-8">
      <button
        onClick={onPrev}
        disabled={currentSlide <= 1}
        className={`
          w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300
          ${currentSlide <= 1
            ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
            : 'glass-purple text-purple-600 hover:bg-purple-100/40 hover:-translate-y-0.5 shadow-md'
          }
        `}
        aria-label="اسلاید قبلی"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="glass rounded-xl px-4 py-2">
        <span className="text-sm font-bold text-gray-600">
          <span className="text-purple-600">{currentSlide}</span>
          {' '}از{' '}
          <span>{totalSlides}</span>
        </span>
      </div>

      <button
        onClick={onNext}
        disabled={currentSlide >= totalSlides}
        className={`
          w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300
          ${currentSlide >= totalSlides
            ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
            : 'glass-purple text-purple-600 hover:bg-purple-100/40 hover:-translate-y-0.5 shadow-md'
          }
        `}
        aria-label="اسلاید بعدی"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
    </div>
  );
}
