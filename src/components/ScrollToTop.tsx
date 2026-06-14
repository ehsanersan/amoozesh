import { useState, useEffect } from 'react';
import { ChevronUp } from './Icons';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 left-6 z-50
        w-12 h-12 rounded-2xl
        bg-gradient-to-br from-purple-500 to-purple-700
        flex items-center justify-center
        shadow-xl shadow-purple-500/30
        transition-all duration-300
        hover:shadow-purple-500/50 hover:-translate-y-1
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
      aria-label="بازگشت به بالا"
    >
      <ChevronUp className="w-5 h-5 text-white" />
    </button>
  );
}
