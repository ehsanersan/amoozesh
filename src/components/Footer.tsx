import { BookOpen, Heart } from './Icons';

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-purple-800">لذیذ</h3>
              <p className="text-[10px] text-gray-500 -mt-0.5">واحد تولید</p>
            </div>
          </div>

          <p className="text-sm text-gray-400 text-center">
            تهیه‌شده برای آموزش پرسنل واحد تولید و آشپزخانه صنعتی
          </p>

          <div className="flex items-center gap-1 text-xs text-gray-400">
            <span>ساخته‌شده با</span>
            <Heart className="w-3 h-3 text-red-400 fill-red-400" />
            <span>برای تیم لذیذ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
