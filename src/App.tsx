import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { ChapterHeader } from './components/ChapterHeader';
import { SlideSection } from './components/SlideSection';
import { SlideNav } from './components/SlideNav';
import { GoldenRules } from './components/GoldenRules';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { SideNav } from './components/SideNav';
import { ProgressBar } from './components/ProgressBar';
import { chapters, slides } from './data/slides';

function App() {
  const totalSlides = slides.length;

  const navigateToSlide = (slideId: number) => {
    const el = document.getElementById(`slide-${slideId}`);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-vazir" dir="rtl">
      <ProgressBar />
      <Header />
      <SideNav />

      <main>
        <HeroSection />
        <IntroSection />

        {chapters.map((chapter) => {
          const chapterSlides = slides.filter((s) => s.chapterId === chapter.id);
          return (
            <div key={chapter.id}>
              <ChapterHeader chapter={chapter} />
              {chapterSlides.map((slide, idx) => (
                <div key={slide.id}>
                  <SlideSection
                    slide={slide}
                    chapterTheme={chapter.colorTheme}
                    slideIndex={idx}
                    totalSlides={totalSlides}
                    isReversed={idx % 2 === 1}
                  />
                  <SlideNav
                    currentSlide={slide.id}
                    totalSlides={totalSlides}
                    onPrev={() => navigateToSlide(slide.id - 1)}
                    onNext={() => navigateToSlide(slide.id + 1)}
                  />
                </div>
              ))}
            </div>
          );
        })}

        <GoldenRules />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
