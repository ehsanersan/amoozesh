import { useState, useEffect } from 'react';
import { chapters, slides } from '../data/slides';
import { DynamicIcon } from './Icons';

const themeColor: Record<string, string> = {
  green: 'bg-green-500',
  purple: 'bg-purple-500',
  yellow: 'bg-yellow-500',
  'green-purple': 'bg-green-500',
  'green-yellow': 'bg-green-500',
  'yellow-purple': 'bg-yellow-500',
};

const themeIconColor: Record<string, string> = {
  green: 'text-green-600',
  purple: 'text-purple-600',
  yellow: 'text-yellow-600',
  'green-purple': 'text-green-600',
  'green-yellow': 'text-green-600',
  'yellow-purple': 'text-yellow-600',
};

export function SideNav() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (let i = slides.length - 1; i >= 0; i--) {
        const el = document.getElementById(`slide-${slides[i].id}`);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSlide(slides[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
      <div className="glass rounded-2xl p-3 shadow-lg shadow-black/5">
        <div className="flex flex-col items-center gap-2">
          {chapters.map((chapter, ci) => {
            const isChapterActive = chapter.slides.includes(activeSlide);
            const dotColor = themeColor[chapter.colorTheme] || 'bg-purple-500';
            const iconColor = themeIconColor[chapter.colorTheme] || 'text-purple-600';

            return (
              <div key={chapter.id} className="flex flex-col items-center">
                {/* Chapter indicator */}
                <button
                  onClick={() => scrollTo(`chapter-${chapter.id}`)}
                  className={`
                    group relative w-9 h-9 rounded-xl flex items-center justify-center
                    transition-all duration-300
                    ${isChapterActive
                      ? 'bg-purple-50 shadow-sm'
                      : 'hover:bg-gray-50'
                    }
                  `}
                  title={chapter.title}
                >
                  <DynamicIcon
                    name={chapter.icon}
                    className={`w-4 h-4 transition-colors duration-300 ${
                      isChapterActive ? iconColor : 'text-gray-300'
                    }`}
                  />

                  {/* Tooltip */}
                  <div className="absolute right-12 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none translate-x-2 group-hover:translate-x-0">
                    <div className="glass rounded-lg px-3 py-1.5 whitespace-nowrap shadow-lg">
                      <span className="text-[11px] font-bold text-gray-700">
                        فصل {chapter.id}: {chapter.shortTitle}
                      </span>
                    </div>
                  </div>
                </button>

                {/* Slide dots */}
                <div className="flex flex-col items-center gap-1 my-1">
                  {chapter.slides.map((slideId) => (
                    <button
                      key={slideId}
                      onClick={() => scrollTo(`slide-${slideId}`)}
                      className="group relative"
                      title={`اسلاید ${slideId}`}
                    >
                      <div
                        className={`rounded-full transition-all duration-300 ${
                          activeSlide === slideId
                            ? `w-2 h-2 ${dotColor} shadow-md`
                            : 'w-1.5 h-1.5 bg-gray-200 hover:bg-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>

                {/* Separator line */}
                {ci < chapters.length - 1 && (
                  <div className="w-px h-3 bg-gray-200 my-0.5" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
