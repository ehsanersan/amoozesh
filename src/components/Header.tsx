import { useState, useEffect } from 'react';
import { Menu, X, BookOpen, ChevronLeft } from './Icons';
import { chapters } from '../data/slides';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass shadow-lg shadow-purple-500/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-extrabold text-purple-800">لذیذ</h1>
              <p className="text-[10px] text-gray-500 -mt-0.5">آموزش واحد تولید</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => scrollTo('hero')}
              className="px-3 py-2 rounded-xl text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 transition-all duration-200"
            >
              خانه
            </button>
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => scrollTo(`chapter-${chapter.id}`)}
                className="px-3 py-2 rounded-xl text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 transition-all duration-200"
              >
                {chapter.shortTitle}
              </button>
            ))}
            <button
              onClick={() => scrollTo('golden-rules')}
              className="px-4 py-2 rounded-xl text-sm font-bold text-white bg-gradient-to-l from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 transition-all duration-200 shadow-md shadow-purple-500/20 mr-2"
            >
              سه اصل طلایی
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl glass flex items-center justify-center"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-700" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 w-72 h-full bg-white shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 pt-20">
            <p className="text-xs text-gray-400 mb-4 font-bold">فهرست آموزش</p>
            <button
              onClick={() => scrollTo('hero')}
              className="w-full text-right px-4 py-3 rounded-xl text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 transition-all duration-200 flex items-center justify-between"
            >
              <span>صفحه اصلی</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => scrollTo(`chapter-${chapter.id}`)}
                className="w-full text-right px-4 py-3 rounded-xl text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 transition-all duration-200 flex items-center justify-between"
              >
                <span>
                  <span className="text-purple-400 font-bold ml-2">
                    {chapter.id}
                  </span>
                  {chapter.shortTitle}
                </span>
                <ChevronLeft className="w-4 h-4" />
              </button>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <button
                onClick={() => scrollTo('golden-rules')}
                className="w-full px-4 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-l from-purple-600 to-purple-500 text-center"
              >
                سه اصل طلایی
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
